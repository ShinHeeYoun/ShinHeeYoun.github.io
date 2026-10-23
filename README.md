# ShinHeeYoun.github.io

**https://shinheeyoun.github.io/#/**

Claude와 함께 만든 개발 연습 페이지입니다. 터미널 느낌의 포트폴리오, 블로그, 작은 도구 모음을 정적 파일만으로 만들어 GitHub Pages에 올렸습니다.

## 들어 있는 것

- **Blog**: 마크다운으로 쓴 글, 제목과 본문 검색(찾은 부분을 빨간 글씨로 표시), 글 안의 목차 링크
- **Tools**: 계산기, 크롬 오프라인 공룡 게임을 본뜬 점프 게임, 사다리타기(2~20열, 시작 전에는 가로줄이 만들어지지 않고 결과는 눌러서 확인), Yacht Dice(굴리기 버튼을 누르고 있는 동안 주사위 눈이 바뀌다가 떼는 순간 결정, 내 기록은 이 브라우저에 저장, 게임이 끝나면 닉네임으로 전체 순위에 등록)
- **라이브 서버 상태**: 따로 운영하는 서버의 힙 메모리, 스레드, CPU 같은 값을 10초마다 보여주는 카드
- **ERS**: 서버에 올린 보고서 뷰어(Crownix)를 사이트 안의 iframe으로 바로 쓰는 탭
- **글 관리(관리자 전용)**: 작성·수정·삭제 화면과 미리보기. GitHub 토큰으로 로그인하면 브라우저에서 저장소에 직접 글을 올립니다. 글은 Markdown으로 쓰거나, HTML 파일(과 CSS 파일)을 올려서 만들 수 있고 HTML 글은 격리된 틀 안에서 보여줍니다.
- 다크/라이트 테마

## 만든 방법

React 18, TypeScript, Vite, Tailwind CSS, React Router(HashRouter), 테스트는 Vitest를 씁니다. 글은 `src/content/posts/` 안의 `.md` 또는 `.html` 파일이고, 서버 없이 빌드할 때 읽어 들입니다. `main` 브랜치에 push하면 GitHub Actions가 테스트, 빌드, 배포를 차례로 실행합니다.

## 직접 실행하기

```bash
npm install
npm run dev     # 개발 서버
npm test        # 단위 테스트
npm run build   # 배포용 빌드
```

## 폴더

| 폴더 | 내용 |
|---|---|
| `src/` | 사이트 코드와 글(`src/content/posts`) |
| `server/status/` | 라이브 서버 상태 카드가 읽는 작은 서블릿 앱 (Tomcat) |
| `server/scores/` | Yacht Dice 순위 서버: Tomcat 서블릿 앱(Java), Oracle DB용 SQL, 테스트, war 빌드 스크립트, 사이트와 공유하는 검증 사례 |
| `docs/` | 설계 문서와 구현 계획 |

공룡 게임의 그래픽은 Chromium 프로젝트(BSD 3-Clause)의 스프라이트를 사용합니다. 라이선스는 `src/tools/dino/CHROMIUM-LICENSE.txt`에 있습니다.
