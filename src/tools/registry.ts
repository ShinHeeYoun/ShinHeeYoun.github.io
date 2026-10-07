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
    description: '새는 숙여서 피하고 나무는 불덩이로 태우며 달리는 공룡 게임입니다. 입력과 게임 로직이 로그로 흐릅니다.',
  },
] as const satisfies readonly ToolMeta[]

export type ToolId = (typeof tools)[number]['id']
