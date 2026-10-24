export type ToolMeta = {
  id: string
  name: string
  description: string
  icon: ToolIcon // the picture on the tool's card
  wide?: boolean // use the full page width instead of a narrow column (for tools that need room)
}

// Names of lucide-react icons. They are looked up in src/pages/Tools.tsx, so that this file stays free of React.
export type ToolIcon = 'calculator' | 'gamepad' | 'shuffle' | 'dice' | 'roulette' | 'map'

export const tools = [
  {
    id: 'calculator',
    name: '계산기',
    description: '기본 사칙연산을 지원하는 버튼식 계산기입니다.',
    icon: 'calculator',
  },
  {
    id: 'dino',
    name: '공룡 점프 게임',
    description: '새는 숙여서 피하고 나무는 불덩이로 태우며 달리는 공룡 게임입니다. 입력과 게임 로직이 로그로 흐릅니다.',
    icon: 'gamepad',
  },
  {
    id: 'ladder',
    name: '사다리타기',
    description: '열 수와 이름·결과를 정하고 시작하면 사다리가 만들어집니다. 길을 눌러 하나씩 확인하거나 전체 결과를 한 번에 볼 수 있습니다.',
    icon: 'shuffle',
    wide: true,
  },
  {
    id: 'yacht',
    name: 'Yacht Dice',
    description: '주사위 5개를 최대 3번 굴려 12개 칸을 채우는 요트 다이스입니다. 굴리기 버튼을 누르고 있는 동안 주사위 눈이 바뀌다가, 떼는 순간 결정됩니다.',
    icon: 'dice',
    wide: true,
  },
  {
    id: 'roulette',
    name: '룰렛',
    description: '항목을 직접 적고 돌리면 하나가 뽑힙니다. 모든 항목의 확률이 같고, 결과는 돌리기 전에 정해집니다.',
    icon: 'roulette',
    wide: true,
  },
  {
    id: 'map',
    name: '세계 지도',
    description: 'Google Maps로 세계 지도를 봅니다. 눌러서 위도·경도와 현지 시각·날씨 보기, 거리와 면적 재기, 내 위치, 화면 링크 공유, 도시 위치 맞히기 퀴즈를 할 수 있습니다.',
    icon: 'map',
    wide: true,
  },
] as const satisfies readonly ToolMeta[]

export type ToolId = (typeof tools)[number]['id']
