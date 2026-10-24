import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHeader from '../components/PageHeader'
import { ERS_URL } from '../lib/ers'

// A page of the server's own (the report viewer) shown inside this one. It is not sandboxed: it needs its own
// scripts and cookies to work, and it is a site we run ourselves.
export default function ERS() {
  return (
    <main className="page-width py-10 sm:py-12">
      <PageHeader
        title="ERS"
        description="MRD 경로에는 ReportingServer가 접근 가능한 경로가 올라가야 합니다. 예시로 파일 서버 도메인 경로나 구글 드라이브 경로가 있습니다."
      >
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <a href={ERS_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            새 탭에서 열기
          </a>
        </Button>
      </PageHeader>

      <iframe
        src={ERS_URL}
        title="ERS 보고서 뷰어"
        allow="fullscreen; clipboard-write"
        className="block h-[calc(100vh-16rem)] min-h-[480px] w-full rounded-xl border bg-white shadow-sm"
      />
    </main>
  )
}
