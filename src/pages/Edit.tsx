import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import HtmlEditor from '../components/HtmlEditor'
import PageHeader from '../components/PageHeader'
import PostEditor from '../components/PostEditor'
import StatusAlert, { type Status } from '../components/StatusAlert'
import { createOrUpdateFile, getFile } from '../lib/github'
import { parseFrontmatter, serializeFrontmatter } from '../lib/frontmatter'
import { composeDraft, draftProblem, parseHtmlPost, serializeHtmlPost, type HtmlDraft } from '../lib/htmlPost'
import { posts, type Post } from '../lib/posts'
import { parseYoutubeUrl, watchUrl } from '../lib/youtube'

type Editing =
  | { format: 'md'; slug: string; path: string; sha: string; date: string; title: string; body: string; videoUrl: string | null } // videoUrl: set for a video post
  | { format: 'html'; slug: string; path: string; sha: string; date: string; draft: HtmlDraft }

export default function Edit() {
  const { pat } = useAdmin()
  const [editing, setEditing] = useState<Editing | null>(null)
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  // The list comes from the files built into the site, but the text to edit is fetched from the repository, so it
  // is always the latest committed version.
  async function open(post: Post) {
    setStatus(null)
    setLoading(post.slug)
    try {
      const { content, sha } = await getFile(post.path, pat)
      const common = { slug: post.slug, path: post.path, sha }
      if (post.format === 'html') {
        const { title, date, html } = parseHtmlPost(content)
        setEditing({ ...common, format: 'html', date, draft: { title, html, htmlName: null, css: [] } })
      } else {
        const { frontmatter, body } = parseFrontmatter(content)
        const videoUrl = frontmatter.video ? watchUrl(frontmatter.video) : null
        setEditing({ ...common, format: 'md', date: frontmatter.date, title: frontmatter.title, body, videoUrl })
      }
    } catch (error) {
      setStatus({ kind: 'error', text: error instanceof Error ? error.message : '글을 불러오지 못했습니다.' })
    } finally {
      setLoading(null)
    }
  }

  async function save() {
    if (!editing) return
    let content: string
    let title: string
    if (editing.format === 'md') {
      title = editing.title
      const video = editing.videoUrl === null ? undefined : parseYoutubeUrl(editing.videoUrl)
      if (editing.videoUrl !== null && !video) return
      content = serializeFrontmatter({ title, date: editing.date, ...(video ? { video } : {}) }, editing.body)
    } else {
      const page = composeDraft(editing.draft)
      if (page === null) return
      title = editing.draft.title
      content = serializeHtmlPost({ title, date: editing.date }, page)
    }
    setStatus(null)
    setIsSaving(true)
    try {
      await createOrUpdateFile(editing.path, content, `post: update ${title}`, pat, editing.sha)
      setStatus({ kind: 'success', text: '수정됨 — 배포까지 약 1분 정도 걸려요.' })
      setEditing(null)
    } catch (error) {
      setStatus({ kind: 'error', text: error instanceof Error ? error.message : '수정 중 오류가 발생했습니다.' })
    } finally {
      setIsSaving(false)
    }
  }

  const cancel = (
    <Button type="button" variant="outline" onClick={() => setEditing(null)}>
      취소
    </Button>
  )

  return (
    <main className="page-width py-10 sm:py-12">
      <PageHeader title="Edit" description="고칠 글을 고르면 저장소의 최신 내용을 불러옵니다." />
      <AdminNotice />

      {editing?.format === 'md' && (
        <PostEditor
          title={editing.title}
          body={editing.body}
          date={editing.date}
          note={`(수정 중: ${editing.slug})`}
          video={
            editing.videoUrl === null ? undefined : { url: editing.videoUrl, onUrlChange: (videoUrl) => setEditing({ ...editing, videoUrl }) }
          }
          onTitleChange={(title) => setEditing({ ...editing, title })}
          onBodyChange={(body) => setEditing({ ...editing, body })}
        >
          <Button
            type="button"
            onClick={save}
            disabled={
              isSaving ||
              !editing.title ||
              (editing.videoUrl === null ? !editing.body : parseYoutubeUrl(editing.videoUrl) === null)
            }
          >
            {isSaving ? '저장 중...' : 'Update'}
          </Button>
          {cancel}
        </PostEditor>
      )}

      {editing?.format === 'html' && (
        <HtmlEditor
          draft={editing.draft}
          onChange={(draft) => setEditing({ ...editing, draft })}
          note={`(수정 중: ${editing.slug})`}
          keptNote="저장된 페이지를 그대로 씁니다. 새 파일을 고르면 바뀝니다."
        >
          <Button
            type="button"
            onClick={save}
            disabled={isSaving || !editing.draft.title.trim() || draftProblem(editing.draft) !== null}
          >
            {isSaving ? '저장 중...' : 'Update'}
          </Button>
          {cancel}
        </HtmlEditor>
      )}

      {!editing && (
        <ul className="mt-6 space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Card className="flex items-center justify-between gap-3 p-4">
                <span className="min-w-0 break-words">
                  {post.title} <span className="text-sm text-muted-foreground">({post.date})</span>
                  {post.format === 'html' && (
                    <Badge variant="secondary" className="ml-2">
                      HTML
                    </Badge>
                  )}
                  {post.video && (
                    <Badge variant="secondary" className="ml-2">
                      영상
                    </Badge>
                  )}
                </span>
                <Button type="button" variant="outline" size="sm" onClick={() => open(post)} disabled={loading !== null}>
                  {loading === post.slug ? '불러오는 중...' : 'Edit'}
                </Button>
              </Card>
            </li>
          ))}
        </ul>
      )}

      <StatusAlert status={status} className="mt-6" />
    </main>
  )
}
