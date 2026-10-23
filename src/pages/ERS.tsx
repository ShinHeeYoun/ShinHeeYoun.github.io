import { ERS_URL } from '../lib/ers'

// A page of the server's own (the report viewer) shown inside this one. It is not sandboxed: it needs its own
// scripts and cookies to work, and it is a site we run ourselves.
export default function ERS() {
  return (
    <main className="page-width py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="text-2xl font-bold">ERS</h1>
        <a
          href={ERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent underline-offset-4 hover:underline"
        >
          새 탭에서 열기
        </a>
      </div>
      <p className="mt-2 text-sm text-muted">
        MRD 경로에는 ReportingServer가 접근 가능한 경로가 올라가야 합니다. 예시로 파일 서버 도메인 경로나 구글 드라이브
        경로가 있습니다.
      </p>

      <iframe
        src={ERS_URL}
        title="ERS 보고서 뷰어"
        allow="fullscreen; clipboard-write"
        className="mt-4 block h-[calc(100vh-12rem)] min-h-[480px] w-full rounded-md border border-border bg-white"
      />
    </main>
  )
}
