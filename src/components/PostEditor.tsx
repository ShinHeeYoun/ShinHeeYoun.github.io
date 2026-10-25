import { useMemo, useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { renderPostHtml } from '../lib/markdown'
import { parseYoutubeUrl } from '../lib/youtube'
import MarkdownBody from './MarkdownBody'
import VideoPlayer from './VideoPlayer'

type Props = {
  title: string
  body: string
  date: string // shown in the preview, like on the post page
  onTitleChange: (title: string) => void
  onBodyChange: (body: string) => void
  note?: ReactNode // small text beside the title label, e.g. which post is being edited
  video?: { url: string; onUrlChange: (url: string) => void } // set for a video post: the address box, and the body is its description
  children: ReactNode // the buttons that publish (and cancel), placed after the Preview button
}

// Title and body boxes on the left, and on the right the post as it will look once the Preview button is pressed.
// The preview is a snapshot: typing after it does not change it until the button is pressed again.
export default function PostEditor({ title, body, date, onTitleChange, onBodyChange, note, video, children }: Props) {
  const [shown, setShown] = useState<{ title: string; body: string; date: string; videoId: string | null } | null>(null)
  const html = useMemo(() => (shown ? renderPostHtml(shown.body, shown.title) : ''), [shown])
  const videoId = video ? parseYoutubeUrl(video.url) : null
  const badUrl = video !== undefined && video.url.trim() !== '' && videoId === null
  const outdated = shown !== null && (shown.title !== title || shown.body !== body || shown.videoId !== videoId)

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="space-y-5">
        {video && (
          <div className="space-y-2">
            <Label htmlFor="editor-video">YouTube 주소</Label>
            <Input
              id="editor-video"
              type="url"
              inputMode="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={video.url}
              onChange={(event) => video.onUrlChange(event.target.value)}
              aria-invalid={badUrl}
            />
            <p className={`text-xs ${badUrl ? 'text-destructive' : 'text-muted-foreground'}`}>
              {badUrl
                ? '영상 주소를 알아볼 수 없습니다. 영상 하나의 주소(watch, youtu.be, shorts)를 붙여넣어 주세요.'
                : '영상 하나의 주소를 붙여넣으세요. youtu.be 짧은 주소도 됩니다.'}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="editor-title">
            제목 {note && <span className="text-xs font-normal text-muted-foreground">{note}</span>}
          </Label>
          <Input id="editor-title" type="text" value={title} onChange={(event) => onTitleChange(event.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="editor-body">{video ? '설명 (Markdown, 비워 둘 수 있음)' : '본문 (Markdown)'}</Label>
          <Textarea
            id="editor-body"
            value={body}
            onChange={(event) => onBodyChange(event.target.value)}
            rows={video ? 10 : 20}
            className="font-mono"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={() => setShown({ title, body, date, videoId })} disabled={!title && !body && !videoId}>
            미리보기
          </Button>
          {children}
        </div>
      </div>

      <Card role="region" aria-label="미리보기" className="min-w-0">
        <CardContent className="p-5">
          {outdated && (
            <p role="status" className="mb-4 rounded-md bg-accent p-2 text-xs text-accent-foreground">
              내용이 바뀌었습니다. 미리보기를 다시 눌러 갱신하세요.
            </p>
          )}
          {shown ? (
            <>
              <h1 className="text-3xl font-bold tracking-tight">{shown.title || '(제목 없음)'}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{shown.date}</p>
              {video && (
                <div className="mt-6">
                  {shown.videoId ? (
                    <VideoPlayer id={shown.videoId} title={shown.title || '영상'} />
                  ) : (
                    <p className="rounded-md bg-accent p-3 text-sm text-accent-foreground">올바른 YouTube 주소를 넣으면 여기에 영상이 나옵니다.</p>
                  )}
                </div>
              )}
              <MarkdownBody html={html} className="mt-8" />
            </>
          ) : (
            <p className="text-sm text-muted-foreground">미리보기를 누르면 여기에 표시됩니다.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
