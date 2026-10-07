# Builds build\status.war with the JDK on the PATH. See README.md.
$ErrorActionPreference = 'Stop'

$lib = Join-Path $PSScriptRoot 'lib\servlet-api.jar'
if (-not (Test-Path $lib)) {
    throw "Missing $lib. Copy servlet-api.jar from the server's /opt/tomcat/lib (see README.md)."
}

$out = Join-Path $PSScriptRoot 'build'
$war = Join-Path $out 'war'
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
New-Item -ItemType Directory -Path (Join-Path $war 'WEB-INF\classes') | Out-Null

$sources = Get-ChildItem (Join-Path $PSScriptRoot 'src\main\java') -Recurse -Filter *.java | ForEach-Object { $_.FullName }
javac --release 17 -Xlint:all -cp $lib -d (Join-Path $war 'WEB-INF\classes') $sources
if ($LASTEXITCODE -ne 0) { throw 'javac failed' }

Copy-Item (Join-Path $PSScriptRoot 'src\main\webapp\WEB-INF\web.xml') (Join-Path $war 'WEB-INF\web.xml')

$target = Join-Path $out 'status.war'
jar --create --file $target -C $war .
if ($LASTEXITCODE -ne 0) { throw 'jar failed' }

$size = (Get-Item $target).Length
Write-Host "Built $target ($size bytes)"
