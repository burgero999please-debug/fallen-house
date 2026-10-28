# Fallen House 1차 완성본 (v1)

## 들어 있는 것

| 폴더 / 파일 | 쓰는 곳 |
|---|---|
| `배포용/index.html` | 게임 본체 (효과음 포함) |
| `배포용/claude-shim.js` | 저장·채팅·동행을 Supabase로 연결 |
| `배포용/config.js` | **본 서버 주소와 공개 키를 넣는 곳** (지금은 빈칸) |
| `배포용/supabase.sql` | 본 서버 Supabase에 한 번 붙여 넣을 설정 (관리자 이메일 6967894@naver.com 자동 등록 포함) |
| `테스트서버_백업/config.js` | 지금 테스트 서버(fallenhouse_test) 설정 백업. 테스트 서버에는 손대지 않아도 돼요 |

## 테스트 서버는 그대로 두기

테스트 서버 GitHub 저장소에는 **`index.html`만** 이 버전으로 바꿔 올리면 끝이에요. `config.js`는 그대로 두세요.

## 본 서버 새로 열기 (테스트 서버와 데이터를 나누는 방법)

1. **Supabase** → New project (예: `fallenhouse`) → SQL Editor → `배포용/supabase.sql` 통째로 붙여 넣고 Run
   - Authentication → Sign In / Providers: Email 켜기, Confirm email은 원하는 대로 (끄면 가입이 바로 됨)
   - Project Settings → API Keys → anon public 키 복사
2. `배포용/config.js`의 주소와 키 두 줄을 새 프로젝트 것으로 바꾸기
3. **GitHub** → New repository (예: `fallen-house`) → `배포용` 폴더 안의 파일 4개를 끌어다 올리기
4. **Vercel** → Add New → Project → 그 저장소 Import → Framework: Other → Deploy
5. 나온 주소를 Supabase **Authentication → URL Configuration → Site URL**에 넣기
6. 본 서버 주소에서 `6967894@naver.com`으로 가입하면 자동으로 관리자가 돼요 (설정 맨 위에 「이벤트 편집기」)

## 테스트 서버에서 만든 이벤트 옮기기

1. 테스트 서버 → 이벤트 편집기 → 맨 위 **「📦 이벤트 옮기기」** → 「1. 전부 내보내기」 → 나온 글자를 메모장/카톡 나에게 보내기에 저장
2. 본 서버 → 이벤트 편집기 → 「📦 이벤트 옮기기」 → 칸에 붙여 넣기 → 미리보기 확인 → 「2. 가져오기」
   - 알바 게시판 의뢰의 보상·조건도 함께 옮겨져요. 공지 메시지는 옮겨지지 않아요.

## 앞으로 업데이트할 때

- 바뀐 `index.html`만 각 서버의 GitHub 저장소에 다시 올리면 Vercel이 자동으로 다시 배포해요.
- 플레이어 저장·이벤트는 Supabase에 있어서 업데이트해도 그대로예요.
- `supabase.sql`이 바뀐 경우에만 SQL Editor에서 다시 Run (여러 번 실행해도 안전).

## 플레이어 데이터는 서버마다 따로예요

테스트 서버와 본 서버는 Supabase 프로젝트가 달라서 계정·진행 상황이 섞이지 않아요. 본 서버에서는 모두 새로 가입해서 처음부터 시작해요.
