export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  // internal route only — rendered through a router Link
  href?: string
}

export const projects: Project[] = [
  {
    id: 'reporting-queue-analysis',
    title: '리포팅 서버 요청 적체 원인 분석',
    summary:
      '주기적 "멈춤" 현상을 로그로 추적. 개별 요청 지연이 아니라 요청 총량이 처리 용량을 넘어 내부 큐가 적체되고, 상위 timeout이 만료되던 구조를 규명하고 근거 지표와 권고안을 정리.',
    tags: ['로그분석', 'Tomcat', '용량산정'],
  },
  {
    id: 'was-thread-leak-oom',
    title: 'WAS 스레드 누수로 인한 OOM/행 장애 분석',
    summary: '반복 재기동 징후와 스레드 누수를 로그·덤프로 연결해 원인을 특정.',
    tags: ['JVM', '스레드덤프', 'Tomcat'],
  },
  {
    id: 'log-analysis-tool',
    title: '대용량 로그 분석 웹 도구',
    summary:
      '수 GB 로그를 한 번만 인덱싱해 타임라인, 요청 추적, 예외 군집화, 성능·트래픽 분석을 제공하는 로컬 도구. 외부 의존성 없이 오프라인 동작.',
    tags: ['Python', 'JavaScript', '로그분석'],
  },
  {
    id: 'connection-pool-leak-demo',
    title: 'DB 커넥션 풀 누수 재현 데모',
    summary: '커넥션 누수 증상을 재현해 원인과 관찰 방법을 보여주는 데모.',
    tags: ['Node.js', 'DB', 'pgpool'],
  },
  {
    id: 'thread-dump-scripts',
    title: '스레드 덤프 수집·분석 스크립트',
    summary: '장애 시점의 jstack 덤프를 일정 간격으로 수집하고 요약하는 스크립트.',
    tags: ['PowerShell', 'JVM'],
  },
]
