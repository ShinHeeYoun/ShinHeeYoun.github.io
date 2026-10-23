# Builds build\scores.war with the JDK on the PATH, after running the tests. See README.md.
#
# The Oracle JDBC driver is not in this repository: it is downloaded from Maven Central the first time, checked
# against the checksum Maven Central publishes for it, and packed into the war (so Tomcat's own lib folder is not touched).
$ErrorActionPreference = 'Stop'

$driverVersion = '23.26.3.0.0'
$driverName = "ojdbc11-$driverVersion.jar"
$driverUrl = "https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc11/$driverVersion/$driverName"

$lib = Join-Path $PSScriptRoot 'lib'
New-Item -ItemType Directory -Force $lib | Out-Null

# servlet-api.jar is only used to compile, and is not committed. The status app needs the same file.
$servletApi = Join-Path $lib 'servlet-api.jar'
if (-not (Test-Path $servletApi)) {
    $fromStatus = Join-Path $PSScriptRoot '..\status\lib\servlet-api.jar'
    if (-not (Test-Path $fromStatus)) {
        throw "Missing ${servletApi}. Copy servlet-api.jar from the server's /opt/tomcat/lib (see ..\status\README.md)."
    }
    Copy-Item $fromStatus $servletApi
}

function Get-Text($response) {
    if ($response.Content -is [byte[]]) { return [System.Text.Encoding]::ASCII.GetString($response.Content) }
    return [string]$response.Content
}

$driver = Join-Path $lib $driverName
$checksumFile = "$driver.sha1"
if (-not (Test-Path $driver)) {
    Write-Host "Downloading $driverName from Maven Central"
    Invoke-WebRequest -Uri $driverUrl -OutFile $driver -UseBasicParsing
    Remove-Item $checksumFile -ErrorAction SilentlyContinue
}
if (-not (Test-Path $checksumFile)) {
    Set-Content -Path $checksumFile -Value (Get-Text (Invoke-WebRequest -Uri "$driverUrl.sha1" -UseBasicParsing)).Trim() -Encoding ascii
}
$expected = (Get-Content $checksumFile -Raw).Trim().ToLower()
$actual = (Get-FileHash -Algorithm SHA1 $driver).Hash.ToLower()
if ($actual -ne $expected) {
    Remove-Item $driver, $checksumFile
    throw "The driver does not match the SHA-1 published by Maven Central ($actual, expected $expected). It was deleted; run the build again."
}
Write-Host "Driver ${driverName}: checksum OK"

$out = Join-Path $PSScriptRoot 'build'
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
$classes = Join-Path $out 'classes'
$testClasses = Join-Path $out 'test-classes'
$war = Join-Path $out 'war'
New-Item -ItemType Directory -Path $classes, $testClasses, (Join-Path $war 'WEB-INF\classes'), (Join-Path $war 'WEB-INF\lib') | Out-Null

$main = Get-ChildItem (Join-Path $PSScriptRoot 'src\main\java') -Recurse -Filter *.java | ForEach-Object { $_.FullName }
javac --release 17 -Xlint:all -Werror -encoding UTF-8 -cp $servletApi -d $classes $main
if ($LASTEXITCODE -ne 0) { throw 'javac failed' }

$tests = Get-ChildItem (Join-Path $PSScriptRoot 'src\test\java') -Recurse -Filter *.java | ForEach-Object { $_.FullName }
javac --release 17 -Xlint:all -Werror -encoding UTF-8 -cp "$classes;$servletApi" -d $testClasses $tests
if ($LASTEXITCODE -ne 0) { throw 'javac failed on the tests' }

java -cp "$classes;$testClasses" dev.shinheeyoun.scores.Tests (Join-Path $PSScriptRoot 'fixtures')
if ($LASTEXITCODE -ne 0) { throw 'The tests failed: no war was built.' }

Copy-Item -Recurse (Join-Path $classes '*') (Join-Path $war 'WEB-INF\classes')
Copy-Item (Join-Path $PSScriptRoot 'src\main\webapp\WEB-INF\web.xml') (Join-Path $war 'WEB-INF\web.xml')
Copy-Item $driver (Join-Path $war 'WEB-INF\lib')

$target = Join-Path $out 'scores.war'
jar --create --file $target -C $war .
if ($LASTEXITCODE -ne 0) { throw 'jar failed' }

$size = [math]::Round((Get-Item $target).Length / 1MB, 1)
Write-Host "Built $target ($size MB)"
