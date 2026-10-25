# ShinHeeYoun.github.io

**https://shinheeyoun.github.io/#/**

Claude와 함께 만든 개발 연습 페이지입니다. 포트폴리오, 블로그, 작은 도구 모음을 정적 파일만으로 만들어 GitHub Pages에 올렸습니다.

## 들어 있는 것

- **Home**: 맨 위에 라이브 서버 상태, 그 아래에 Blog·Tools·Guestbook 바로가기와 최근 글 3개. 위쪽 바에서 모든 메뉴로 갈 수 있고, 좁은 화면에서는 메뉴가 옆에서 열립니다.
- **Blog**: 마크다운으로 쓴 글과 YouTube 영상(목록에는 썸네일, 글 안에서는 사이트 안에서 재생하고 "새 탭에서 열기" 버튼 제공), 제목과 본문(영상은 설명) 검색(찾은 부분을 빨간 글씨로 표시), 글 안의 목차 링크
- **Tools**: 계산기, 크롬 오프라인 공룡 게임을 본뜬 점프 게임, 사다리타기(2~20열, 시작 전에는 가로줄이 만들어지지 않고 결과는 눌러서 확인), 룰렛(항목 2~20개를 직접 적고 돌리기, 모든 항목의 확률이 같음), 세계 지도(Google Maps: 확대·이동, 일반/위성 전환, 눌러서 좌표와 현지 시각·날씨 확인, 거리·면적 재기, 내 위치, 화면 링크 공유, 도시 위치 맞히기 퀴즈), Yacht Dice(굴리기 버튼을 누르고 있는 동안 주사위 눈이 바뀌다가 떼는 순간 결정, 내 기록은 이 브라우저에 저장, 게임이 끝나면 닉네임으로 전체 순위에 등록)
- **Guestbook**: 누구나 아이디·비밀번호·댓글(최대 300자, Markdown 적용)을 남기고, 비밀번호로 삭제하고, 답글을 달 수 있는 방명록. Oracle DB에 저장하며 작성자 IP와 시간을 기록하고, 관리자는 비밀번호 없이 삭제
- **라이브 서버 상태**: Oracle Cloud에서 따로 운영하는 서버(Tomcat)의 힙 메모리, 스레드, CPU 같은 값을 10초마다 보여주는 카드. 홈 맨 위에 있고, 서버가 꺼져 있어도 다른 기능에는 영향이 없습니다.
- **ERS**: 서버에 올린 보고서 뷰어(Crownix)를 사이트 안의 iframe으로 바로 쓰는 탭
- **글 관리(관리자 전용)**: 작성·수정·삭제 화면과 미리보기. GitHub 토큰으로 로그인하면 브라우저에서 저장소에 직접 글을 올립니다. 글은 Markdown으로 쓰거나, HTML 파일(과 CSS 파일)을 올려서 만들 수 있고 HTML 글은 격리된 틀 안에서 보여줍니다. **영상** 탭에서는 YouTube 주소, 제목, 설명을 적어 영상 글을 올립니다(영상 글은 글 머리말의 `video:` 한 줄과 설명 본문으로 저장됩니다).
- 다크/라이트 테마 (처음에는 기기의 설정을 따르고, 고른 뒤에는 그 선택을 기억합니다)

## 만든 방법

React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui(Radix UI), React Router(HashRouter), 영상은 YouTube IFrame Player API, 테스트는 Vitest를 씁니다. 글은 `src/content/posts/` 안의 `.md` 또는 `.html` 파일이고, 서버 없이 빌드할 때 읽어 들입니다. `main` 브랜치에 push하면 GitHub Actions가 테스트, 빌드, 배포를 차례로 실행합니다.

## 디자인

화면 부품은 [shadcn/ui](https://ui.shadcn.com/)입니다. 부품의 코드가 `src/components/ui`에 들어 있어서 필요하면 직접 고칩니다(`components.json`이 설정이고, 새 부품은 `npx shadcn@latest add 이름`으로 추가합니다). 색은 Coolors 팔레트 [000814-001d3d-003566-ffc300-ffd60a](https://coolors.co/palette/000814-001d3d-003566-ffc300-ffd60a)에서 골랐습니다. 밝은 테마는 남색(#003566), 어두운 테마는 금색(#ffc300)을 주 색으로 쓰고, 색 값은 `src/index.css`의 CSS 변수 한 곳에 있습니다. 글자와 배경의 대비(WCAG AA, 4.5:1)는 `src/lib/palette.test.ts`가 그 파일을 읽어서 확인하므로, 색을 바꿔서 읽기 어려워지면 테스트가 실패합니다. 글꼴은 npm 패키지 `pretendard`를 사이트에 포함합니다.

## 직접 실행하기

```bash
npm install
npm run dev     # 개발 서버
npm test        # 단위 테스트
npm run build   # 배포용 빌드
```

## Google Maps 키

세계 지도(Tools)는 Google Maps JavaScript API를 씁니다. 이 API의 키는 브라우저가 Google에 직접 보내야 해서 비밀로 둘 수 없습니다. 대신 Google Cloud 콘솔에서 키에 제한을 겁니다: 허용 사이트를 `https://shinheeyoun.github.io/*`로, 사용할 API를 Maps JavaScript API 하나로 제한하고, 일일 지도 로드 상한을 걸어 둡니다.

- **개발할 때**: 프로젝트 폴더에 `.env.local` 파일을 만들고 `VITE_GOOGLE_MAPS_KEY=키` 한 줄을 넣습니다. 이 파일은 커밋되지 않습니다. Maps Demo Key(결제 정보 없이 받는 테스트용 키)도 여기에 넣어 쓸 수 있습니다. 데모 키는 공개용이 아니라서 저장소에는 넣지 않습니다.
- **배포할 때**: 위 제한을 건 정식 키를 `src/tools/map/config.ts`의 `PUBLISHED_KEY`에 넣고 푸시합니다. 키가 없으면 지도 페이지에는 키가 필요하다는 안내만 나옵니다.

## 폴더

| 폴더 | 내용 |
|---|---|
| `src/` | 사이트 코드와 글(`src/content/posts`) |
| `server/status/` | 라이브 서버 상태 카드가 읽는 작은 서블릿 앱 (Tomcat) |
| `server/scores/` | Yacht Dice 순위와 방명록 서버: Tomcat 서블릿 앱(Java), Oracle DB용 SQL, 테스트, war 빌드 스크립트, 사이트와 공유하는 검증 사례 |
| `docs/` | 설계 문서와 구현 계획 |

공룡 게임의 그래픽은 Chromium 프로젝트(BSD 3-Clause)의 스프라이트를 사용합니다. 라이선스는 `src/tools/dino/CHROMIUM-LICENSE.txt`에 있습니다.
