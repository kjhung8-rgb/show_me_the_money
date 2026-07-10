# 입금요정

입금요정은 앱을 켤 때마다 랜덤 입금 알림이 내려오고, 누적 자산이 계속 커지는 장난성 금융 웹앱입니다. 실제 금융 기능은 없고, 은행 앱 UI를 패러디한 재미용 프로젝트입니다.

## 무슨 웹앱인가요?

- 접속할 때마다 랜덤 입금이 발생합니다.
- 입금 금액은 현재 자산 등급에 따라 달라집니다.
- 총 자산, 오늘 입금액, 출금 실패 횟수, 입금 내역을 브라우저에 저장합니다.
- 입금 알림은 iPhone 알림처럼 화면 위에서 내려옵니다.
- 이체하기와 입금하기 버튼은 점검 안내를 보여줍니다.
- 입금 랭킹, 자산 등급, 금융상품, 고객센터 같은 패러디 기능이 있습니다.
- 금융상품 가입은 가능하지만 해지는 불가능한 콘셉트입니다.

## 주요 기능

- 랜덤 입금 알림
- 누적 총 자산 저장
- 오늘 입금 합산
- 전체 입금 내역 페이지
- 출금 실패 기록
- 자산 등급 시스템
- 입금 랭킹 TOP 3
- 가짜 금융상품 추천
- 고객센터 대기 인원 랜덤 표시
- 모바일 홈화면 앱처럼 사용할 수 있는 정적 웹앱 구조

## 기술 스택

- HTML
- CSS
- JavaScript
- Firebase Hosting

별도의 빌드 과정이 없는 정적 웹앱입니다.

## 로컬 실행 방법

이 프로젝트는 정적 파일만 사용하므로 `index.html`을 브라우저에서 직접 열어도 동작합니다.

간단한 로컬 서버로 확인하려면 아래 명령어를 사용할 수 있습니다.

```bash
npx serve .
```

또는 Python이 설치되어 있다면:

```bash
python -m http.server 5173
```

그 다음 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:5173
```

## Firebase 배포 방법

Firebase CLI가 설치되어 있어야 합니다.

```bash
npm install -g firebase-tools
```

Firebase에 로그인합니다.

```bash
firebase login
```

프로젝트 설정은 `.firebaserc`에 들어 있습니다.

```json
{
  "projects": {
    "default": "show-me-the-money-9d983"
  }
}
```

배포 명령어는 아래와 같습니다.

```bash
firebase deploy --only hosting --project show-me-the-money-9d983
```

배포가 완료되면 Firebase Hosting URL에서 앱을 확인할 수 있습니다.

```text
https://show-me-the-money-9d983.web.app
```

## 캐시 관련 참고

`index.html`에서 CSS와 JavaScript 파일 뒤에 버전 쿼리를 붙여 캐시를 갱신합니다.

```html
<link rel="stylesheet" href="./style.css?v=20260710-2010" />
<script src="./script.js?v=20260710-2010"></script>
```

수정했는데 모바일에서 바로 반영되지 않으면 버전 값을 올리고 다시 배포하면 됩니다. 홈화면에 추가한 앱 아이콘이나 PWA 아이콘은 브라우저 캐시와 별개로 오래 남을 수 있어, 필요하면 홈화면 아이콘을 삭제한 뒤 다시 추가해야 합니다.

## 주의사항

이 앱은 실제 은행, 금융기관, 송금 서비스와 관련이 없습니다. 표시되는 입금액, 자산, 랭킹, 금융상품은 모두 재미를 위한 가짜 데이터입니다.

---

# English

Deposit Fairy is a playful fake banking web app. Every time the app opens, it shows a random deposit notification and increases the saved asset total.

## What It Does

- Shows random deposit notifications
- Saves total assets in the browser
- Tracks today's deposits
- Shows full deposit history
- Tracks failed withdrawal attempts
- Provides asset grades, rankings, fake financial products, and a customer center screen

## Tech Stack

- HTML
- CSS
- JavaScript
- Firebase Hosting

This is a static web app with no build step.

## Run Locally

Open `index.html` directly in a browser, or run a simple static server:

```bash
npx serve .
```

You can also use Python:

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## Deploy to Firebase

Install Firebase CLI:

```bash
npm install -g firebase-tools
```

Log in:

```bash
firebase login
```

Deploy:

```bash
firebase deploy --only hosting --project show-me-the-money-9d983
```

Live URL:

```text
https://show-me-the-money-9d983.web.app
```

## Note

This app is not connected to any real bank or financial service. All deposits, assets, rankings, and products are fake and made for fun.
