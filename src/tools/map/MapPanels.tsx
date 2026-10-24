import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatArea, formatDistance, pathLengthKm, polygonAreaKm2 } from './geo'
import { formatCoordinates, type LatLng } from './places'
import { MAX_POINTS, currentPlace, isFinished, maxScore, totalScore, type Quiz } from './quiz'
import { describeTimeDifference, describeWeather, formatLocalTime, type Weather } from './weather'

// A panel under the map: a card with room to breathe.
function Panel({ children, ...rest }: { children: ReactNode; 'aria-live'?: 'polite'; role?: string }) {
  return (
    <Card {...rest}>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  )
}

export type WeatherState = { status: 'idle' } | { status: 'loading' } | { status: 'error' } | { status: 'ready'; weather: Weather }

// --- Explore: where was clicked, and what the time and weather are there ---

export function ExplorePanel({
  picked,
  weather,
  now,
  copied,
  onCopy,
  onClear,
}: {
  picked: LatLng | null
  weather: WeatherState
  now: Date
  copied: boolean
  onCopy: () => void
  onClear: () => void
}) {
  if (!picked) {
    return (
      <Panel>
        <p className="text-sm text-muted-foreground">지도를 누르면 그 곳의 위도·경도와 현지 시각, 날씨가 표시됩니다.</p>
      </Panel>
    )
  }
  const ownOffset = -now.getTimezoneOffset() * 60 // seconds east of UTC, for this computer
  return (
    <Panel aria-live="polite">
      <p className="text-xs text-muted-foreground">선택한 위치</p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{formatCoordinates(picked)}</p>

      {weather.status === 'loading' && <p className="mt-3 text-sm text-muted-foreground">시각과 날씨를 불러오는 중...</p>}
      {weather.status === 'error' && (
        <p className="mt-3 text-sm text-muted-foreground">이 위치의 시각과 날씨를 가져오지 못했습니다. 잠시 후 다시 눌러 보세요.</p>
      )}
      {weather.status === 'ready' && (
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-lg bg-muted/60 p-3">
            <dt className="text-xs text-muted-foreground">현지 시각 ({weather.weather.timeZone})</dt>
            <dd className="mt-0.5 font-medium tabular-nums">{formatLocalTime(now, weather.weather.timeZone)}</dd>
            <dd className="text-xs text-muted-foreground">{describeTimeDifference(weather.weather.utcOffsetSeconds, ownOffset)}</dd>
          </div>
          <div className="rounded-lg bg-muted/60 p-3">
            <dt className="text-xs text-muted-foreground">지금 날씨</dt>
            <dd className="mt-0.5 font-medium">
              <span aria-hidden="true">{describeWeather(weather.weather.code).icon} </span>
              {describeWeather(weather.weather.code).text}, <span className="tabular-nums">{weather.weather.temperature.toFixed(1)}°C</span>
            </dd>
            <dd className="text-xs text-muted-foreground tabular-nums">
              습도 {Math.round(weather.weather.humidity)}% · 바람 {weather.weather.windSpeed.toFixed(1)} m/s
            </dd>
          </div>
        </dl>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="outline" size="sm" onClick={onCopy}>
          {copied ? '복사했습니다' : '좌표 복사'}
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onClear}>
          표시 지우기
        </Button>
      </div>
      {weather.status !== 'idle' && (
        <p className="mt-3 text-xs text-muted-foreground">
          날씨 정보:{' '}
          <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Open-Meteo.com
          </a>{' '}
          (CC BY 4.0). 누른 위치의 좌표가 이 서비스로 전달됩니다.
        </p>
      )}
    </Panel>
  )
}

// --- Measure: the length of a path and the area of a shape ---

export function MeasurePanel({
  points,
  closed,
  onToggleClosed,
  onUndo,
  onClear,
}: {
  points: LatLng[]
  closed: boolean
  onToggleClosed: () => void
  onUndo: () => void
  onClear: () => void
}) {
  const shape = closed && points.length >= 3
  return (
    <Panel aria-live="polite">
      {points.length === 0 ? (
        <p className="text-sm text-muted-foreground">지도를 눌러 점을 찍으면 점 사이의 거리를 재 줍니다. 점을 계속 이어서 찍어 보세요.</p>
      ) : (
        <dl className="grid max-w-lg grid-cols-3 gap-3">
          <div className="rounded-lg bg-muted/60 p-3">
            <dt className="text-xs text-muted-foreground">점</dt>
            <dd className="text-lg font-semibold tabular-nums">{points.length}개</dd>
          </div>
          <div className="rounded-lg bg-muted/60 p-3">
            <dt className="text-xs text-muted-foreground">{shape ? '둘레' : '거리'}</dt>
            <dd className="text-lg font-semibold tabular-nums">{formatDistance(pathLengthKm(points, shape))}</dd>
          </div>
          {shape && (
            <div className="rounded-lg bg-muted/60 p-3">
              <dt className="text-xs text-muted-foreground">면적</dt>
              <dd className="text-lg font-semibold tabular-nums">{formatArea(polygonAreaKm2(points))}</dd>
            </div>
          )}
        </dl>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" variant="outline" size="sm" onClick={onUndo} disabled={points.length === 0}>
          마지막 점 취소
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onClear} disabled={points.length === 0}>
          모두 지우기
        </Button>
        <Button type="button" variant={closed ? 'secondary' : 'outline'} size="sm" onClick={onToggleClosed} disabled={points.length < 3} aria-pressed={closed}>
          {closed ? '도형 닫기 해제' : '도형으로 닫기 (면적 보기)'}
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        두 점 사이는 지구 표면을 따라 가장 짧은 길(대권)로 잽니다. 그래서 평평한 지도 위의 직선과는 다르게 보일 수 있고, 지구를 완전한 구로
        보고 계산해서 실제와 0.5% 안팎의 차이가 있을 수 있습니다.
      </p>
    </Panel>
  )
}

// --- Quiz: where is this city? ---

function Row({ children }: { children: ReactNode }) {
  return <li className="flex flex-wrap items-baseline justify-between gap-x-4 border-b py-1.5 text-sm last:border-0">{children}</li>
}

export function QuizPanel({
  quiz,
  best,
  newRecord,
  onStart,
  onNext,
  onQuit,
}: {
  quiz: Quiz | null
  best: number
  newRecord: boolean
  onStart: () => void
  onNext: () => void
  onQuit: () => void
}) {
  if (!quiz) {
    return (
      <Panel>
        <p className="text-sm">
          도시 이름이 나오면 지도에서 그 위치를 눌러 맞히는 퀴즈입니다. 한 판은 10문제이고, 정답에 가까울수록 높은 점수(문제당 최대{' '}
          {MAX_POINTS}점)를 받습니다.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          지도는 이름이 없는 위성 사진으로 바뀌고 확대는 제한됩니다. {best > 0 ? `최고 기록: ${best}점` : '아직 기록이 없습니다.'}
        </p>
        <Button type="button" onClick={onStart} className="mt-4">
          시작
        </Button>
      </Panel>
    )
  }

  if (isFinished(quiz)) {
    const total = totalScore(quiz)
    return (
      <Panel role="status">
        <p className="text-sm text-muted-foreground">게임 종료</p>
        <p className="mt-1 text-5xl font-extrabold tabular-nums tracking-tight">
          {total}점 <span className="text-lg font-normal text-muted-foreground">/ {maxScore(quiz)}</span>
        </p>
        <p className="mt-2 text-sm">
          {newRecord ? (
            <Badge className="bg-highlight text-highlight-foreground hover:bg-highlight">최고 기록을 넘었습니다</Badge>
          ) : (
            `최고 기록: ${best}점`
          )}
        </p>
        <ol className="mt-4 max-w-md">
          {quiz.results.map((result, i) => (
            <Row key={i}>
              <span>
                {i + 1}. {result.place.name} <span className="text-xs text-muted-foreground">({result.place.country})</span>
              </span>
              <span className="tabular-nums">
                {formatDistance(result.km)} · {result.points}점
              </span>
            </Row>
          ))}
        </ol>
        <Button type="button" onClick={onStart} className="mt-4">
          다시 하기
        </Button>
      </Panel>
    )
  }

  const place = currentPlace(quiz)
  const last = quiz.results[quiz.results.length - 1]
  const number = quiz.revealed ? quiz.results.length : quiz.results.length + 1
  return (
    <Panel role="status">
      <p className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
        <span>
          문제 {number} / {quiz.places.length}
        </span>
        <span className="tabular-nums">현재 {totalScore(quiz)}점</span>
      </p>
      {place && (
        <p className="mt-2 text-2xl">
          <span className="font-bold">{place.name}</span> <span className="text-sm text-muted-foreground">({place.country})</span>
        </p>
      )}
      {quiz.revealed && last ? (
        <>
          <p className="mt-2 text-sm">
            정답과 <span className="font-semibold tabular-nums">{formatDistance(last.km)}</span> 떨어졌습니다 ·{' '}
            <span className="font-semibold tabular-nums">+{last.points}점</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">지도의 파란 핀이 내 답, 초록 핀이 정답입니다.</p>
        </>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">이 도시가 있다고 생각하는 곳을 지도에서 누르세요.</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {quiz.revealed && (
          <Button type="button" onClick={onNext}>
            {quiz.results.length === quiz.places.length ? '결과 보기' : '다음 문제'}
          </Button>
        )}
        <Button type="button" variant="outline" onClick={onQuit}>
          그만하기
        </Button>
      </div>
    </Panel>
  )
}
