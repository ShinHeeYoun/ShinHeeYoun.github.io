const interests = [
  '장애 원인 분석(RCA)',
  'JVM / 스레드 덤프 분석',
  '대용량 로그 분석',
  'DB 커넥션 풀 운영',
]

const stack = ['Java', 'Tomcat', 'Python', 'Node.js', 'PowerShell / Batch', 'awk', 'pgpool']

export default function About() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Java/Tomcat 기반 운영 환경에서 발생하는 장애와 성능 문제를 로그·덤프·지표로 분석하고,
          재현 가능한 근거와 함께 보고서로 정리합니다. 반복되는 분석 작업은 직접 도구로 만들어
          둡니다.
        </p>

        <h2 className="mt-10 text-lg font-semibold">관심사</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-foreground/90">
          {interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-semibold">기술 스택</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
