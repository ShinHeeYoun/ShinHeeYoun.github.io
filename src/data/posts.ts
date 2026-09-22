export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: '첫 번째 글',
    date: '2026-09-22',
    excerpt:
      '이 사이트를 막 만들기 시작했습니다. 게시글 작성 기능은 다음 단계에서 붙일 예정입니다.',
  },
  {
    slug: 'about-this-site',
    title: '이 사이트에 대하여',
    date: '2026-09-22',
    excerpt:
      'Vite와 React로 만든 개인 홈페이지입니다. 포트폴리오, 블로그, 직접 실행해볼 수 있는 도구들을 담을 예정입니다.',
  },
]
