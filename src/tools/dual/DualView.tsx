import { Check, Copy, Eraser, Hash, Type } from 'lucide-react'
import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { cryptoRng } from '../../lib/random'
import {
  DEFAULT_COLUMNS,
  DEFAULT_NUMBER_DIGITS,
  DEFAULT_REPEAT,
  DEFAULT_ROWS,
  DEFAULT_STRING_LENGTH,
  MAX_COLUMNS,
  MAX_NUMBER_DIGITS,
  MAX_REPEAT,
  MAX_ROWS,
  MAX_STRING_LENGTH,
  buildSql,
  cellAt,
  clamp,
  columnKind,
  defaultName,
  isExpression,
  warnings,
  withCell,
  withDummy,
  withName,
  type Config,
  type DummyKind,
  type Mode,
} from './controller'

// A number box that may be empty while the user types; it is put right when they leave it.
function CountField({
  id,
  label,
  text,
  min,
  max,
  onText,
}: {
  id: string
  label: string
  text: string
  min: number
  max: number
  onText: (text: string) => void
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={text}
        onChange={(event) => onText(event.target.value)}
        onBlur={() => onText(String(clamp(parseInt(text, 10), min, max)))}
        className="w-28"
      />
    </div>
  )
}

const number = (text: string, min: number, max: number) => clamp(parseInt(text, 10), min, max)

export default function DualView() {
  const [mode, setMode] = useState<Mode>('loop')
  const [columnsText, setColumnsText] = useState(String(DEFAULT_COLUMNS))
  const [rowsText, setRowsText] = useState(String(DEFAULT_ROWS))
  const [repeatText, setRepeatText] = useState(String(DEFAULT_REPEAT))
  const [names, setNames] = useState<string[]>([])
  const [cells, setCells] = useState<string[][]>([])
  const [stringText, setStringText] = useState(String(DEFAULT_STRING_LENGTH))
  const [digitsText, setDigitsText] = useState(String(DEFAULT_NUMBER_DIGITS))
  const [copied, setCopied] = useState(false)

  const columns = number(columnsText, 1, MAX_COLUMNS)
  const rows = mode === 'loop' ? 1 : number(rowsText, 1, MAX_ROWS)
  const repeat = number(repeatText, 1, MAX_REPEAT)

  const config: Config = { mode, columns, rows, repeat, names, cells }
  const sql = buildSql(config)
  const notes = warnings(config)
  const kinds = Array.from({ length: columns }, (_, column) => columnKind(config, rows, column))

  function fill(kind: DummyKind) {
    const size = kind === 'string' ? number(stringText, 1, MAX_STRING_LENGTH) : number(digitsText, 1, MAX_NUMBER_DIGITS)
    setCells((old) => withDummy(old, rows, columns, kind, size, cryptoRng()))
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(sql)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-6">
      <div role="group" aria-label="쿼리 방식" className="flex flex-wrap gap-2">
        {(
          [
            ['loop', '반복문'],
            ['plain', '일반문'],
          ] as const
        ).map(([value, label]) => (
          <Button key={value} type="button" variant={mode === value ? 'default' : 'outline'} aria-pressed={mode === value} onClick={() => setMode(value)}>
            {label}
          </Button>
        ))}
        <p className="ml-1 self-center text-sm text-muted-foreground">
          {mode === 'loop' ? '한 행을 정한 횟수만큼 반복합니다 (CONNECT BY LEVEL).' : '입력한 모든 행을 UNION ALL로 합칩니다.'}
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-wrap items-end gap-x-6 gap-y-4 p-5">
          <CountField id="dual-columns" label="열 개수" text={columnsText} min={1} max={MAX_COLUMNS} onText={setColumnsText} />
          {mode === 'plain' ? (
            <CountField id="dual-rows" label="행 개수" text={rowsText} min={1} max={MAX_ROWS} onText={setRowsText} />
          ) : (
            <CountField id="dual-repeat" label="반복 횟수" text={repeatText} min={1} max={MAX_REPEAT} onText={setRepeatText} />
          )}

          <div className="space-y-1.5">
            <span className="text-sm font-medium leading-none">더미 데이터로 채우기</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button type="button" variant="outline" className="gap-1.5" onClick={() => fill('string')}>
                <Type />
                랜덤 문자열
              </Button>
              <Input
                aria-label="문자열 길이"
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_STRING_LENGTH}
                value={stringText}
                onChange={(event) => setStringText(event.target.value)}
                onBlur={() => setStringText(String(number(stringText, 1, MAX_STRING_LENGTH)))}
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">글자</span>
              <Button type="button" variant="outline" className="ml-2 gap-1.5" onClick={() => fill('number')}>
                <Hash />
                랜덤 숫자
              </Button>
              <Input
                aria-label="숫자 자릿수"
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_NUMBER_DIGITS}
                value={digitsText}
                onChange={(event) => setDigitsText(event.target.value)}
                onBlur={() => setDigitsText(String(number(digitsText, 1, MAX_NUMBER_DIGITS)))}
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">자리</span>
              <Button type="button" variant="ghost" className="ml-2 gap-1.5" onClick={() => setCells([])}>
                <Eraser />
                모두 비우기
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="min-w-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">
              표 <span className="text-sm font-normal text-muted-foreground">({mode === 'loop' ? '1행을 반복' : `${rows}행`} × {columns}열)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="max-h-[32rem] overflow-auto rounded-md border">
              <table className="w-full border-collapse text-sm">
                <thead className="sticky top-0 z-10 bg-muted">
                  <tr>
                    <th scope="col" className="w-10 px-2 py-2 text-center font-medium text-muted-foreground">
                      #
                    </th>
                    {Array.from({ length: columns }, (_, column) => (
                      <th key={column} scope="col" className="min-w-32 p-1.5 text-left align-top">
                        <Input
                          aria-label={`${column + 1}번째 열의 필드명`}
                          placeholder={defaultName(column)}
                          value={names[column] ?? ''}
                          onChange={(event) => setNames((old) => withName(old, column, event.target.value))}
                          className="h-8 font-mono text-xs font-semibold"
                        />
                        <Badge variant="secondary" className="mt-1 font-normal">
                          {kinds[column] === 'number' ? '숫자' : '문자'}
                        </Badge>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: rows }, (_, row) => (
                    <tr key={row} className="border-t">
                      <th scope="row" className="px-2 py-1 text-center font-normal text-muted-foreground">
                        {row + 1}
                      </th>
                      {Array.from({ length: columns }, (_, column) => {
                        const text = cellAt(cells, row, column)
                        return (
                          <td key={column} className="p-1">
                            <Input
                              aria-label={`${row + 1}행 ${column + 1}열`}
                              value={text}
                              onChange={(event) => setCells((old) => withCell(old, row, column, event.target.value))}
                              className={cn('h-8 font-mono text-xs', isExpression(text) && 'text-primary')}
                            />
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                  {mode === 'loop' && (
                    <tr className="border-t bg-muted/40">
                      <td colSpan={columns + 1} className="px-3 py-2 text-xs text-muted-foreground">
                        ↻ 위 행이 {repeat.toLocaleString()}번 반복됩니다 (LEVEL 1 ~ {repeat.toLocaleString()}).
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              빈 칸은 NULL, 숫자만 있는 열은 숫자, 나머지는 문자로 들어갑니다. 값 앞에 <code className="font-mono">=</code>를 붙이면 SQL이 그대로
              들어갑니다 (예: <code className="font-mono">=LEVEL</code>, <code className="font-mono">=SYSDATE</code>).
            </p>
          </CardContent>
        </Card>

        <Card className="min-w-0 self-start lg:sticky lg:top-20">
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-base">SQL</CardTitle>
            <Button type="button" size="sm" className="gap-1.5" onClick={() => void copy()}>
              {copied ? <Check /> : <Copy />}
              {copied ? '복사했습니다' : '복사'}
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            <pre aria-label="만들어진 SQL" className="max-h-[32rem] overflow-auto rounded-md border bg-muted/50 p-4 font-mono text-xs leading-relaxed">
              {sql}
            </pre>
            {notes.map((note) => (
              <Alert key={note}>
                <AlertDescription>{note}</AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
