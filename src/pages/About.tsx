const stack = [
  {
    name: 'React 18 · TypeScript',
    description:
      '화면을 컴포넌트 단위로 나눠 만들고, 타입으로 실수를 빌드 단계에서 잡습니다.',
  },
  {
    name: 'Vite',
    description:
      '개발 서버와 빌드 도구입니다. 빠르고 설정이 단순하며, 마크다운 글을 빌드할 때 읽어 오는 기능(import.meta.glob)도 Vite가 제공합니다.',
  },
  {
    name: 'Tailwind CSS',
    description:
      '유틸리티 클래스로 스타일을 작성합니다. 색은 CSS 변수 토큰으로 묶어서 다크/라이트 테마를 한 곳에서 바꿉니다.',
  },
  {
    name: 'React Router (HashRouter)',
    description:
      '페이지 이동을 맡습니다. GitHub Pages에는 서버 설정이 없어서 주소에 #을 쓰는 방식을 택했고, 덕분에 어느 페이지에서 새로고침해도 404가 나지 않습니다.',
  },
  {
    name: 'marked',
    description: '블로그의 마크다운 본문을 HTML로 바꿔 줍니다.',
  },
  {
    name: 'GitHub Pages · GitHub Actions',
    description:
      '정적 파일 호스팅과 자동 배포입니다. main에 push하면 테스트, 빌드, 배포가 차례로 실행됩니다.',
  },
  {
    name: 'GitHub Contents API',
    description:
      'Write 페이지가 브라우저에서 글 파일을 저장소에 직접 커밋할 때 쓰는 API입니다. 별도 서버 없이 글쓰기를 가능하게 합니다.',
  },
  {
    name: 'Vitest',
    description:
      '단위 테스트 도구입니다. 계산기 로직, 글 머리말(frontmatter) 파서, 테마 선택 규칙, 프로젝트 데이터를 검사합니다.',
  },
  {
    name: 'Claude Code',
    description:
      '설계, 계획, 구현, 리뷰를 함께 진행한 AI 개발 도구입니다. 이 사이트의 코드와 문서 대부분이 이 방식으로 만들어졌습니다.',
  },
]

export default function About() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-6 leading-relaxed text-foreground/90">
          이 페이지는 GitHub Pages 위에서 Claude와 함께 만든 개발 연습 페이지입니다. 블로그, 도구
          실행, 브라우저 글쓰기 같은 기능을 하나씩 직접 만들어 보면서, 정적 사이트로 어디까지 할
          수 있는지 연습하고 있습니다.
        </p>

        <h2 className="mt-10 text-lg font-semibold">사용한 기술</h2>
        <ul className="mt-4 space-y-5">
          {stack.map((item) => (
            <li key={item.name}>
              <p className="font-mono text-accent">{item.name}</p>
              <p className="mt-1 leading-relaxed text-foreground/90">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
