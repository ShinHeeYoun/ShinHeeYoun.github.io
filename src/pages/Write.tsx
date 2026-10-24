import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import HtmlEditor from '../components/HtmlEditor'
import PageHeader from '../components/PageHeader'
import PostEditor from '../components/PostEditor'
import StatusAlert, { type Status } from '../components/StatusAlert'
import { createOrUpdateFile } from '../lib/github'
import { serializeFrontmatter } from '../lib/frontmatter'
import { composeDraft, draftProblem, emptyHtmlDraft, serializeHtmlPost } from '../lib/htmlPost'
import { generateSlug, getLocalDateString } from '../lib/posts'

type Format = 'md' | 'html'

export default function Write() {
  const { pat } = useAdmin()
  const [format, setFormat] = useState<Format>('md')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [draft, setDraft] = useState(emptyHtmlDraft)
  const [status, setStatus] = useState<Status | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)

  async function publish(path: string, content: string, postTitle: string, reset: () => void) {
    setStatus(null)
    setIsPublishing(true)
    try {
      await createOrUpdateFile(path, content, `post: ${postTitle}`, pat)
      setStatus({ kind: 'success', text: '게시됨 — 배포까지 약 1분 정도 걸려요.' })
      reset()
    } catch (error) {
      setStatus({ kind: 'error', text: error instanceof Error ? error.message : '게시 중 오류가 발생했습니다.' })
    } finally {
      setIsPublishing(false)
    }
  }

  function publishMarkdown() {
    const date = getLocalDateString()
    void publish(`src/content/posts/${generateSlug(date)}.md`, serializeFrontmatter({ title, date }, body), title, () => {
      setTitle('')
      setBody('')
    })
  }

  function publishHtml() {
    const page = composeDraft(draft)
    if (page === null) return
    const date = getLocalDateString()
    void publish(
      `src/content/posts/${generateSlug(date)}.html`,
      serializeHtmlPost({ title: draft.title, date }, page),
      draft.title,
      () => setDraft(emptyHtmlDraft),
    )
  }

  return (
    <main className="page-width py-10 sm:py-12">
      <PageHeader title="Write" description="새 글을 쓰면 저장소에 바로 올라가고, 배포되면 블로그에 나타납니다." />
      <AdminNotice />

      <div className="mt-6 flex items-center gap-3">
        <span className="text-sm font-medium">형식</span>
        <Tabs value={format} onValueChange={(value) => setFormat(value as Format)}>
          <TabsList>
            <TabsTrigger value="md">Markdown</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {format === 'md' ? (
        <PostEditor title={title} body={body} date={getLocalDateString()} onTitleChange={setTitle} onBodyChange={setBody}>
          <Button type="button" onClick={publishMarkdown} disabled={isPublishing || !title || !body}>
            {isPublishing ? '게시 중...' : '게시'}
          </Button>
        </PostEditor>
      ) : (
        <HtmlEditor draft={draft} onChange={setDraft}>
          <Button
            type="button"
            onClick={publishHtml}
            disabled={isPublishing || !draft.title.trim() || draftProblem(draft) !== null}
          >
            {isPublishing ? '게시 중...' : '게시'}
          </Button>
        </HtmlEditor>
      )}

      <StatusAlert status={status} className="mt-6" />
    </main>
  )
}
