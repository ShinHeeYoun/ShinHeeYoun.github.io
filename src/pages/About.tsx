type Item = {
  name: string
  what: string // what the technology is and what it gives us
  how: string // how it is used on this site
  files?: string // where to look in the repository
}

type Section = {
  title: string
  items: Item[]
}

const overview = [
  '사이트: React로 만든 정적 파일입니다. GitHub Pages가 그대로 보여주고, 사이트 자체에는 서버 코드가 없습니다.',
  '글 관리: 브라우저가 GitHub API로 저장소에 직접 커밋하면 GitHub Actions가 다시 빌드하고 배포합니다.',
  '서버 기능: 라이브 서버 상태와 ERS 탭은 따로 운영하는 Oracle Cloud 무료 서버(Tomcat)를 https로 호출합니다.',
]

const sections: Section[] = [
  {
    title: '프런트엔드',
    items: [
      {
        name: 'React 18 · TypeScript',
        what: 'React는 화면을 컴포넌트(재사용 부품) 단위로 만드는 라이브러리이고, TypeScript는 변수에 타입을 붙여 실수를 빌드 단계에서 잡아 주는 언어입니다.',
        how: '페이지는 src/pages, 부품은 src/components에 컴포넌트로 나눴습니다. 서버가 보낸 JSON처럼 믿을 수 없는 값은 타입만 믿지 않고 실행 중에도 검사해서 걸러냅니다(parseStatus).',
        files: 'src/pages · src/components · src/lib/serverStatus.ts',
      },
      {
        name: 'Vite',
        what: '개발 서버와 번들러(여러 파일을 하나로 묶는 도구)입니다. 저장하면 화면이 바로 갱신됩니다.',
        how: '빌드할 때 import.meta.glob으로 글 파일(.md, .html)을 문자열로 읽어 스크립트에 포함합니다. 개발 중에는 /server-api 프록시로 서버를 호출해 CORS 문제를 피합니다.',
        files: 'vite.config.ts · src/lib/posts.ts',
      },
      {
        name: 'React Router (HashRouter)',
        what: '주소에 따라 보여줄 페이지를 바꿔 주는 라우터입니다. HashRouter는 주소의 # 뒤를 경로로 씁니다.',
        how: 'GitHub Pages는 서버 설정을 바꿀 수 없어서, 일반 주소에서 새로고침하면 404가 납니다. # 뒤는 서버로 전달되지 않기 때문에 어느 페이지에서 새로고침해도 괜찮습니다. 대신 글 안의 #목차 링크가 라우터와 충돌해서, 클릭을 가로채 해당 제목으로 스크롤시킵니다.',
        files: 'src/App.tsx · src/components/MarkdownBody.tsx',
      },
      {
        name: 'Tailwind CSS',
        what: '미리 만들어진 작은 클래스(예: px-6, text-muted)를 조합해 스타일을 쓰는 CSS 도구입니다.',
        how: '색을 CSS 변수(--color-*)로 정의하고, <html>의 dark 클래스에 따라 값만 바꿔서 다크/라이트 테마를 만듭니다. 공통 폭 규칙(.page-width)은 작은 화면에서는 전체 폭, 넓은 화면에서는 72rem으로 제한해 가운데 정렬합니다.',
        files: 'src/index.css · tailwind.config.js',
      },
    ],
  },
  {
    title: '글 시스템',
    items: [
      {
        name: 'Markdown 글 · marked',
        what: 'Markdown은 간단한 표기로 문서를 쓰는 형식이고, marked는 이를 HTML로 바꿔 주는 라이브러리입니다.',
        how: '글은 src/content/posts/*.md 파일이며, 맨 위 머리말(title, date)을 직접 만든 파서가 읽습니다. 변환한 HTML의 제목(h1~h6)에는 GitHub와 같은 규칙으로 id를 붙여서 목차 링크가 동작하게 했습니다.',
        files: 'src/lib/frontmatter.ts · src/lib/markdown.ts',
      },
      {
        name: 'HTML 글 · 격리된 iframe',
        what: 'iframe은 화면 속의 화면입니다. sandbox 속성을 주면 그 안의 페이지가 할 수 있는 일을 제한할 수 있습니다.',
        how: '업로드한 HTML은 .html 파일로 저장하고(맨 앞 주석에 제목과 날짜), 함께 올린 CSS는 <style>로 합칩니다. 보여줄 때는 sandbox에 allow-same-origin을 주지 않은 iframe에 넣어서, 스크립트는 돌지만 이 사이트의 저장소(로그인 토큰이 있는 곳)에는 접근하지 못하게 했습니다. iframe의 높이는 안쪽 페이지가 postMessage로 알려줍니다.',
        files: 'src/lib/htmlPost.ts · src/components/HtmlFrame.tsx',
      },
      {
        name: '블로그 검색',
        what: '서버 없이 브라우저에서 하는 문자열 검색입니다.',
        how: '빌드에 포함된 모든 글의 제목과 본문(HTML 글은 화면에 보이는 글자만)에서 입력한 구절이 들어 있는 글을 찾습니다. 제목이 맞은 글을 먼저 보여주고, 본문은 첫 일치 부분 앞뒤를 잘라 <mark>로 강조합니다. 검색어는 주소(?q=)에 반영해서 뒤로 가기 해도 결과가 유지되고, useDeferredValue로 입력이 끊기지 않게 했습니다.',
        files: 'src/lib/search.ts · src/pages/Blog.tsx',
      },
      {
        name: 'GitHub Contents API',
        what: 'GitHub 저장소의 파일을 HTTP 요청으로 읽고, 쓰고, 지우는 API입니다. 쓰기와 삭제는 커밋으로 남습니다.',
        how: '이 사이트에 서버가 없는데도 글을 관리할 수 있는 이유입니다. 브라우저가 GET, PUT, DELETE 요청을 직접 보내서 글 파일을 만들고 고치고 지웁니다(Write, Edit, Delete 화면).',
        files: 'src/lib/github.ts · src/pages/Write.tsx',
      },
      {
        name: 'ADMIN 로그인 (PAT)',
        what: 'PAT(Personal Access Token)는 비밀번호 대신 쓰는 GitHub 접근 토큰입니다. 이 저장소에만, 파일 읽기/쓰기 권한만 주도록 만듭니다.',
        how: 'ADMIN 패널에서 토큰을 입력하면 저장소 정보를 조회해서 토큰이 유효하고 쓰기 권한이 있는지 확인합니다. 통과하면 브라우저 localStorage에 저장하고, 로그인 상태를 Context로 공유해서 Admin 메뉴와 /write, /edit, /delete 접근을 열어 줍니다. 이 화면 잠금은 보이는 것만 가립니다. 실제 방어는 토큰이어서, 토큰이 없으면 누구도 글을 올리거나 지울 수 없습니다.',
        files: 'src/lib/admin.ts · src/components/AdminContext.tsx · src/components/RequireAdmin.tsx',
      },
    ],
  },
  {
    title: '서버 연동',
    items: [
      {
        name: 'Java 서블릿 · Tomcat',
        what: 'Tomcat은 Java 웹 애플리케이션을 실행하는 서버이고, 서블릿은 요청을 받아 응답을 만드는 Java 클래스입니다.',
        how: '작은 앱 하나(status)가 /status/api로 서버 상태를 JSON으로 돌려줍니다. JVM의 관리 빈(MXBean)과 Tomcat의 MBean에서 힙 메모리, 스레드, CPU, 요청 수를 읽고, 5초마다 값을 모아 최근 120개(10분)를 보관합니다. 요청이 몰려도 서버가 더 일하지 않도록 응답을 2초간 캐시합니다.',
        files: 'server/status',
      },
      {
        name: '라이브 서버 상태 카드',
        what: '위 서버가 알려주는 값을 사이트에서 보여주는 화면입니다.',
        how: 'fetch로 10초마다 서버를 호출하고(탭이 보일 때만, 5초 안에 응답이 없으면 중단), 응답을 검사한 뒤 숫자와 SVG 그래프로 그립니다. 서버가 꺼져 있으면 안내 문구만 보이고 사이트의 다른 기능에는 영향이 없습니다.',
        files: 'src/components/ServerStatusSection.tsx · src/components/Sparkline.tsx',
      },
      {
        name: 'CORS (Tomcat CorsFilter)',
        what: '브라우저는 보안을 위해 다른 도메인으로 보내는 요청을 기본으로 막습니다. CORS는 서버가 "이 출처는 허용한다"고 알려서 이를 푸는 규칙입니다.',
        how: '상태 앱의 web.xml에 Tomcat 내장 CorsFilter를 걸어 https://shinheeyoun.github.io만 허용하고, 다른 출처의 요청은 403으로 거절합니다. 이 앱에만 적용되어서 같은 Tomcat의 다른 앱에는 영향이 없습니다.',
        files: 'server/status/src/main/webapp/WEB-INF/web.xml',
      },
      {
        name: 'nginx · Let\'s Encrypt · DuckDNS',
        what: 'nginx는 앞에서 요청을 받아 뒤의 서버로 넘겨 주는 리버스 프록시입니다. Let\'s Encrypt는 무료 https 인증서를, DuckDNS는 무료 도메인 이름을 제공합니다.',
        how: 'https 사이트는 http 서버를 호출할 수 없어서(혼합 콘텐츠 차단) 서버에 https 주소가 필요했습니다. DuckDNS 이름에 인증서를 발급받아 자동 갱신하고, nginx가 허용한 경로만 Tomcat으로 전달합니다. 나머지 경로는 404이고, 상태 API는 초당 요청 수를 제한합니다.',
        files: 'server/nginx/shinheeyoun.conf · server/HTTPS.md',
      },
      {
        name: 'ERS 탭 (iframe)',
        what: '서버에 올라간 보고서 뷰어(Crownix HTML5 Viewer) 화면을 이 사이트 안에서 바로 쓰는 탭입니다.',
        how: '뷰어 주소를 iframe으로 띄웁니다. 직접 운영하는 서버라서 sandbox는 걸지 않았습니다. 서로 다른 사이트 사이의 iframe에서는 브라우저가 로그인 세션 쿠키를 막을 수 있어서, 동작이 이상하면 쓰도록 "새 탭에서 열기" 링크를 같이 둡니다.',
        files: 'src/pages/ERS.tsx · src/lib/ers.ts',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: '로직과 화면 분리 (controller)',
        what: '계산 규칙(로직)과 화면 그리기(뷰)를 나눠서 만드는 방식입니다.',
        how: '계산기, 공룡 게임, 사다리타기, 룰렛, Yacht Dice 모두 "현재 상태와 입력을 받아 새 상태를 돌려주는" 순수 함수를 controller.ts에 두고, 화면 컴포넌트는 그 결과를 그리기만 합니다. 화면 없이 규칙만 테스트할 수 있습니다.',
        files: 'src/tools/calculator · src/tools/dino · src/tools/ladder · src/tools/roulette · src/tools/yacht',
      },
      {
        name: '사다리타기 (SVG)',
        what: 'SVG는 선과 도형을 코드로 그리는 벡터 그래픽 형식입니다. 화면 크기에 맞춰 늘어나도 선명합니다.',
        how: '시작 버튼을 누를 때 브라우저의 보안 난수(crypto.getRandomValues)로 가로줄을 만듭니다. 시작 전에는 가로줄을 CSS로 가리는 게 아니라 아예 만들지 않아서 화면 요소로도 존재하지 않습니다. 같은 줄에서 가로줄이 붙지 않고, 이웃한 두 열은 반드시 하나 이상 이어지도록 만듭니다. 선택한 길은 순수 함수로 따라가서(위에서 아래, 아래에서 위 모두) 빨간 선으로 그리고, 같은 결과 텍스트는 같은 색으로 보여줍니다.',
        files: 'src/tools/ladder',
      },
      {
        name: '룰렛 (SVG와 CSS 회전)',
        what: '직접 적은 항목 중 하나를 돌려서 뽑는 도구입니다.',
        how: '당첨은 바퀴가 움직이기 전에 브라우저의 보안 난수로 먼저 정하고, 그 칸의 어느 지점에 멈출지까지 계산한 회전 각도로 CSS transition을 한 번 걸어 5초 동안 돌립니다. 그래서 애니메이션은 결과를 보여주기만 하고 확률에 영향을 주지 않으며, 어느 칸이든 확률이 같습니다. 칸은 SVG 부채꼴 경로로 그리고, 칸 경계에 멈추지 않도록 칸의 양 끝을 피해서 각도를 잡습니다. 모션 줄이기 설정을 켠 사람에게는 돌리지 않고 바로 결과를 보여줍니다. 각도 계산은 모든 칸 수와 당첨 칸 조합으로 "포인터 아래 칸이 당첨 칸인가"를 테스트합니다.',
        files: 'src/tools/roulette',
      },
      {
        name: 'Yacht Dice (타이머와 점수 저장소)',
        what: '주사위 5개를 최대 3번 굴려 12개 칸을 채우는 주사위 게임입니다.',
        how: '굴리기 버튼을 누르고 있는 동안 setInterval로 0.055초마다 주사위 눈과 그림(SVG)을 바꾸고, 떼는 순간 멈춥니다. 바뀌는 횟수는 누른 시간에 비례하지만(최소 24번, 최대 6초) 최종 눈은 멈추는 순간 보안 난수로 따로 뽑아서 확률은 누른 시간과 상관없이 같습니다. 점수 칸 12개의 계산은 순수 함수로 만들고, 가능한 모든 주사위 조합(7776가지)으로 검증합니다. 끝난 게임은 ScoreStore 인터페이스로 저장합니다. 내 기록은 브라우저에 두고, 닉네임을 붙여 순위에 등록하면 주사위와 선택 전체를 서버(Tomcat의 Java 서블릿)로 보냅니다. 서버는 점수를 처음부터 다시 계산해 맞지 않으면 거절하고, 같은 판을 두 번 보내도 한 번만 저장하며(id가 기본키), 한 주소에서 한 시간에 10판까지만 받습니다. 저장소는 Oracle Autonomous DB이고, 사이트의 검증 코드와 서버의 Java 코드가 같은 사례 파일(JSON)로 테스트되어 서로 어긋나지 않게 합니다.',
        files: 'src/tools/yacht · server/scores',
      },
      {
        name: 'Guestbook (방명록)',
        what: '누구나 아이디, 비밀번호, 댓글을 남길 수 있고 답글도 달 수 있는 방명록입니다.',
        how: '글은 같은 Java 서블릿 앱을 거쳐 Oracle DB에 저장됩니다. SQL에는 사용자가 쓴 값을 이어 붙이지 않고 모두 바인드 변수로만 넘겨서 SQL 인젝션이 불가능하고, 비밀번호는 원문 대신 솔트를 섞은 PBKDF2 해시로 저장합니다. 작성자 IP와 시간은 기록하되 화면에는 보내지 않고, 주소당 작성 횟수와 한 글에 대한 비밀번호 시도 횟수를 제한합니다. 내용은 Markdown으로 보여주는데, marked는 글을 토큰으로 나누는 데만 쓰고 화면은 그 토큰으로 React 요소를 직접 만들어서 사용자가 쓴 HTML은 글자로만 나오고 javascript: 링크와 이미지는 막습니다. 관리자로 로그인했으면 GitHub 토큰을 서버에 보내 저장소에 쓸 수 있는 사람인지 GitHub에 확인한 뒤 비밀번호 없이 지울 수 있습니다.',
        files: 'src/pages/Guestbook.tsx · src/guestbook · server/scores',
      },
      {
        name: '공룡 게임 (canvas)',
        what: 'canvas는 자바스크립트로 직접 그림을 그리는 HTML 요소입니다.',
        how: '게임 로직은 화면 주사율과 상관없이 초당 60번(고정 간격)만 진행해서 어떤 모니터에서도 같은 속도입니다. 공룡, 선인장, 새 그래픽은 Chromium 프로젝트(BSD 3-Clause)의 스프라이트를 잘라 쓰고, 나무, 불덩이, 하늘, 해와 달은 코드로 그립니다.',
        files: 'src/tools/dino',
      },
    ],
  },
  {
    title: '배포와 개발 방식',
    items: [
      {
        name: 'GitHub Pages · GitHub Actions',
        what: 'Pages는 저장소의 정적 파일을 웹사이트로 서빙하고, Actions는 push 같은 사건이 생기면 정해 둔 작업을 자동으로 실행합니다.',
        how: 'main에 push하면 의존성 설치, 테스트, 빌드를 순서대로 실행하고, 결과물을 gh-pages 브랜치에 올려 배포합니다. 테스트가 하나라도 실패하면 배포까지 가지 않고, 연달아 push하면 이전 실행은 취소합니다.',
        files: '.github/workflows/deploy.yml',
      },
      {
        name: 'Vitest',
        what: '자바스크립트용 단위 테스트 도구입니다. 함수가 기대한 값을 돌려주는지 자동으로 검사합니다.',
        how: '화면이 아니라 순수한 로직을 위주로 테스트합니다(node 환경). 계산기, 공룡 게임, 사다리, 룰렛, Yacht Dice 규칙, 글 머리말·HTML 글 파서, 마크다운 제목 id, 블로그 검색, 서버 응답 해석 등을 확인합니다.',
        files: '*.test.ts',
      },
      {
        name: 'Claude Code',
        what: 'Anthropic의 AI 코딩 도구입니다.',
        how: '이 사이트의 코드와 문서는 Claude와 함께 만들었습니다. 설계를 먼저 정하고, 테스트를 먼저 쓰고, 구현한 뒤, 브라우저에서 직접 확인하고, 마지막에 push하는 순서로 진행합니다.',
      },
    ],
  },
]

export default function About() {
  return (
    <main className="page-width py-12">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-6 leading-relaxed text-foreground/90">
          정적 사이트(GitHub Pages)에 서버 연동과 글 관리 기능까지 붙여 보는 개발 연습 프로젝트입니다. 이 문서는 어떤
          기술을 어디에, 어떻게 썼는지 정리합니다.
        </p>

        <h2 className="mt-10 text-lg font-semibold">전체 구조</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-foreground/90">
          {overview.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mt-10 text-lg font-semibold">{section.title}</h2>
            <ul className="mt-4 space-y-6">
              {section.items.map((item) => (
                <li key={item.name}>
                  <p className="font-mono text-accent">{item.name}</p>
                  <dl className="mt-1 space-y-1 leading-relaxed text-foreground/90">
                    <div>
                      <dt className="inline font-semibold">기능 </dt>
                      <dd className="inline">{item.what}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">적용 </dt>
                      <dd className="inline">{item.how}</dd>
                    </div>
                  </dl>
                  {item.files && <p className="mt-1 break-words font-mono text-xs text-muted">{item.files}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
