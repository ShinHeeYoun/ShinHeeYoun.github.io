export type ToolMeta = {
  id: string
  name: string
  description: string
}

export const tools = [
  {
    id: 'calculator',
    name: '계산기',
    description: '기본 사칙연산을 지원하는 버튼식 계산기입니다.',
  },
  {
    id: 'dino',
    name: '공룡 점프 게임',
    description: '입력과 게임 로직이 로그로 흐르는 크롬 오프라인 공룡 게임입니다.',
  },
] as const satisfies readonly ToolMeta[]

export type ToolId = (typeof tools)[number]['id']
