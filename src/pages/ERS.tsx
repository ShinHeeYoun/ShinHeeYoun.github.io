import { ERS_URL } from '../lib/ers'

// A page of the server's own (the report viewer) shown inside this one. It is not sandboxed: it needs its own
// scripts and cookies to work, and it is a site we run ourselves.
export default function ERS() {
  return (
    <main className="w-full px-6 py-6 md:px-12">
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
        따로 운영하는 서버(Oracle Cloud의 Tomcat)에 올린 보고서 뷰어를 이 페이지 안에서 바로 씁니다. 화면이 비거나
        보고서가 열리지 않으면 새 탭에서 열어 보세요.
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
