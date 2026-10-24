type Props = {
  values: number[]
  label: string // read out by screen readers, e.g. "힙 사용량"
  current: string // the latest value, shown beside the graph
  window: string // how much time the graph covers, e.g. "8분"
}

const WIDTH = 200
const HEIGHT = 40

// A tiny line graph. The line is scaled between the lowest and the highest value shown, so a small
// change is still visible; the number beside it says what the latest value actually is.
export default function Sparkline({ values, label, current, window }: Props) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const points = values
    .map((value, i) => {
      const x = (i / (values.length - 1)) * WIDTH
      const y = HEIGHT - 4 - ((value - min) / range) * (HEIGHT - 8)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium tabular-nums">{current}</span>
      </div>
      {values.length < 2 ? (
        <p className="mt-1 text-xs text-muted-foreground">값을 모으는 중...</p>
      ) : (
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={`${label}: 최근 ${window}, 현재 ${current}`}
          className="mt-1 h-10 w-full rounded-md border bg-background"
        >
          <polyline
            points={points}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {values.length >= 2 && <p className="mt-1 text-right text-[11px] text-muted-foreground">최근 {window}</p>}
    </div>
  )
}
