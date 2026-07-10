const APP_VERSION = "20260710-2110";

const STORAGE_KEYS = {
  totalAsset: "smtm_total_asset",
  accountNumber: "smtm_account_number",
  withdrawAttempts: "smtm_withdraw_attempts",
  todayDepositDate: "smtm_today_deposit_date",
  todayDepositTotal: "smtm_today_deposit_total",
  rankingDate: "smtm_ranking_date",
  rankingRecords: "smtm_ranking_records",
  joinedProducts: "smtm_joined_products",
  depositHistory: "smtm_deposit_history",
  customerName: "smtm_customer_name",
};

const DEPOSIT_COOLDOWN_MS = {
  min: 60_000,
  max: 300_000,
};

const MAX_DEPOSIT_HISTORY_ENTRIES = 500;
const RECENT_DEPOSIT_HISTORY_LIMIT = 20;

const CEO_MERCHANTS = [
  "삼성 이재용 회장",
  "현대차 정의선 회장",
  "SK 최태원 회장",
  "LG 구광모 회장",
  "롯데 신동빈 회장",
  "카카오 김범수 의장",
  "쿠팡 김범석 의장",
  "셀트리온 서정진 회장",
  "배달의민족 김봉진 의장",
  "토스 이승건 대표",
  "네이버 최수연 대표",
  "카카오 정신아 대표",
  "테슬라 일론 머스크 CEO",
  "애플 팀 쿡 CEO",
  "엔비디아 젠슨 황 CEO",
  "마이크로소프트 사티아 나델라 CEO",
  "구글 순다르 피차이 CEO",
  "메타 마크 저커버그 CEO",
  "아마존 앤디 재시 CEO",
  "오픈AI 샘 알트먼 CEO",
  "넷플릭스 테드 서랜도스 CEO",
  "넷플릭스 그렉 피터스 CEO",
  "어도비 샨타누 나라옌 CEO",
  "AMD 리사 수 CEO",
  "오라클 사프라 캐츠 CEO",
  "세일즈포스 마크 베니오프 CEO",
  "우버 다라 코스로샤히 CEO",
  "에어비앤비 브라이언 체스키 CEO",
  "스포티파이 다니엘 에크 CEO",
  "쇼피파이 토비 뤼트케 CEO",
  "로블록스 데이비드 바수츠키 CEO",
  "디즈니 밥 아이거 CEO",
  "버크셔 해서웨이 워런 버핏 회장",
  "소프트뱅크 손정의 회장",
  "브리지워터 레이 달리오",
  "블랙록 래리 핑크 CEO",
  "버진그룹 리처드 브랜슨 회장",
  "마이크로소프트 빌 게이츠",
  "아마존 제프 베이조스",
  "알리바바 마윈",
  "줌 에릭 위안 창업자",
  "트위터 잭 도시 창업자",
  "한국은행 익명의 관계자",
  "기획재정부 긴급예산팀",
  "월가의 수상한 큰손",
  "나스닥 지나가던 고래",
  "실리콘밸리 비밀 투자자",
  "강남 테헤란로 현금왕",
  "여의도 이름 모를 자산가",
  "재벌가 셋째 아들",
  "AI가 추천한 부자",
  "금융감독원도 모르는 입금자"
];

const DEPOSIT_REASONS = [
  "FBS 입금",
  "감사의 마음 입금",
  "비상장 주식 배당",
  "AI 수익 정산",
  "우주사업 수익금",
  "반도체 성과급",
  "회장님 용돈",
  "알 수 없는 투자수익",
  "자산증식 이벤트",
  "초과수익 정산",
  "특별 배당금",
  "프리미엄 고객 감사금",
  "VIP 우대 입금",
  "미래가치 선반영 입금",
  "복리 효과 실시간 반영",
  "장기투자 보상금",
  "잔고 성장 지원금",
  "자산관리 리워드",
  "고객등급 상승 보너스",
  "기준금리 위로금",
  "물가상승 대응 입금",
  "경제성장 참여 보상",
  "금융시장 안정지원금",
  "통화량 증가분 배정",
  "예상 밖 현금흐름",
  "잊고 있던 배당금",
  "수익률 기분전환금",
  "오늘의 운세 적중금",
  "잔액 미화 지원금",
  "나스닥 고래 보너스",
  "테헤란로 현금흐름",
  "여의도 큰손 정산",
  "실리콘밸리 축하금",
  "월가 비밀 리워드",
  "국제 자산 이동",
  "글로벌 유동성 유입",
  "해외 큰손 감사금",
  "우연한 투자 성공금",
  "지나가던 재벌 입금",
  "회장님 기분 좋아짐",
  "CEO 긴급 송금",
  "대표님 랜덤 후원",
  "재벌가 용돈 분배",
  "상속세 계산 전 입금",
  "부자 체험권 환급",
  "경제 뉴스 출연료",
  "금융권 관심 보상",
  "은행원 말투 변경비",
  "VIP 라운지 이용료 환급",
  "출금불가 위로금",
  "점검시간 보상금",
  "은행점검 장기고객 혜택",
  "이체 실패 리워드",
  "입금만 가능 보너스",
  "출금 버튼 관상료",
  "정기점검 참여 수당",
  "24시간 점검 특별금",
  "해지불가 상품 가입축하금",
  "대기시간 인내 보상금",
  "AI가 몰래 벌어옴",
  "로봇 자동매매 정산",
  "알고리즘 기분전환 수익",
  "서버가 심심해서 입금",
  "버그성 자산 증가",
  "캐시 초기화 실패 보상",
  "데이터베이스 감동 입금",
  "클라우드 수익 공유",
  "코드가 알아서 벌어옴",
  "로컬스토리지 효도금",
  "우주 채굴 수익",
  "화성 부동산 배당",
  "달나라 임대수익",
  "위성광고 정산금",
  "외계 투자자 후원금",
  "은하계 유동성 공급",
  "블랙홀 이자수익",
  "우주선 보험 환급",
  "행성 개발 배당금",
  "지구 대표 보상금",
  "현실감 상실 입금",
  "행복지수 연동 보너스",
  "자존감 상승 지원금",
  "기분 좋은 착각 정산",
  "월요일 생존 수당",
  "퇴근 장려금",
  "커피값 100년치 환급",
  "숨만 쉬어도 들어온 돈",
  "아무튼 입금",
  "설명 불가 입금"
];

const BANK_INITIALS = [
  "KB",
  "OW",
  "JI",
  "NS",
  "SM",
  "HY",
  "AI",
  "FB",
  "MT",
  "TS",
  "NV",
  "MS",
  "KR",
  "IM",
  "VP",
];

const FINANCIAL_PRODUCTS = [
  {
    name: "출금 불가 정기예금",
    desc: "입금은 자유롭지만 출금은 정기점검 중입니다.",
  },
  {
    name: "매일 입금 적금",
    desc: "앱을 켤 때마다 기분상 부자가 됩니다.",
  },
  {
    name: "점검시간 우대예금",
    desc: "점검시간이 길수록 마음의 이자가 쌓입니다.",
  },
  {
    name: "한국은행 긴장 채권",
    desc: "잔고가 커질수록 통화정책이 흔들리는 기분입니다.",
  },
  {
    name: "잔고폭발 CMA",
    desc: "수익률은 알 수 없지만 숫자는 커집니다.",
  },
  {
    name: "무한복리 행복적금",
    desc: "계산은 복잡하지만 행복은 단순합니다.",
  },
  {
    name: "월급보다 빠른 입금통장",
    desc: "월급은 느리지만 랜덤 입금은 빠릅니다.",
  },
  {
    name: "출금 버튼 관상용 통장",
    desc: "버튼은 예쁘지만 기능은 없습니다.",
  },
  {
    name: "FBS 프리미엄 입금 플랜",
    desc: "FBS 입금 알림을 더 진지하게 즐기는 상품입니다.",
  },
  {
    name: "재벌 0.5세 성장펀드",
    desc: "재벌은 아니지만 기분만큼은 반쯤 도착했습니다.",
  },
  {
    name: "GDP 추월 적립식 펀드",
    desc: "국가경제와 어깨를 나란히 하는 상상형 상품입니다.",
  },
  {
    name: "나스닥 고래 추종펀드",
    desc: "지나가던 고래의 기분을 추종합니다.",
  },
  {
    name: "회장님 용돈 자동수령 서비스",
    desc: "누군가의 용돈이 내 자산이 되는 환상적인 서비스입니다.",
  },
  {
    name: "비상장 상상수익 펀드",
    desc: "상장도 안 됐고 실체도 없지만 기대감은 큽니다.",
  },
  {
    name: "기준금리 눈치보기 예금",
    desc: "금리는 당신을 의식하고 있습니다.",
  },
  {
    name: "잔액만 커지는 마이너스통장",
    desc: "마이너스의 개념을 은행이 포기했습니다.",
  },
  {
    name: "출금 심사 999년 대기 상품",
    desc: "장기투자의 새로운 기준입니다.",
  },
  {
    name: "노력형 AI 펀드",
    desc: "AI는 열심히 하는 척하고 잔고는 커지는 척합니다.",
  },
  {
    name: "반도체 성과급 연동예금",
    desc: "칩이 잘 팔리면 괜히 내 잔고도 웃습니다.",
  },
  {
    name: "우주사업 배당 적금",
    desc: "지구 밖 수익을 지구 안 잔고에 반영한 듯합니다.",
  },
  {
    name: "테헤란로 현금흐름 펀드",
    desc: "점심시간 직장인들의 기운을 수익률로 환산합니다.",
  },
  {
    name: "여의도 수상한 큰손 신탁",
    desc: "누가 넣었는지는 모르지만 아무튼 입금됩니다.",
  },
  {
    name: "매수만 가능한 주식계좌",
    desc: "팔 수 없으니 손실도 확정되지 않습니다.",
  },
  {
    name: "손실 없는 척 ETF",
    desc: "차트를 안 보면 언제나 우상향입니다.",
  },
  {
    name: "내일의 억만장자 통장",
    desc: "오늘은 아니지만 내일은 왠지 가능할 것 같습니다.",
  },
  {
    name: "입금 알림 무제한 패키지",
    desc: "돈보다 알림이 더 자주 옵니다.",
  },
  {
    name: "은행원 말투 변경 VIP 예금",
    desc: "잔고가 커질수록 앱이 더 공손해집니다.",
  },
  {
    name: "출금 가능성 0% 고정금리 상품",
    desc: "변하지 않는 안정감. 영원한 점검.",
  },
  {
    name: "세계경제 버그 의심 자산관리랩",
    desc: "IMF가 새벽에 알림을 보낼 수 있습니다.",
  },
];

const AGENCY_ALERTS = [
  {
    title: "국세청",
    message: "고객님의 입금 패턴을 흥미롭게 지켜보고 있습니다.",
  },
  {
    title: "금융감독원",
    message: "이 앱은 너무 행복해 보여 점검 대상입니다.",
  },
  {
    title: "한국은행",
    message: "잔액 증가 속도가 기준금리를 앞질렀습니다.",
  },
  {
    title: "기획재정부",
    message: "고객님의 잔고가 국가 예산안 검토 회의에 언급되었습니다.",
  },
  {
    title: "통계청",
    message: "고객님의 자산 증가율이 기존 통계 범위를 벗어났습니다.",
  },
  {
    title: "공정거래위원회",
    message: "고객님의 잔고가 시장 질서를 혼자 재편하고 있습니다.",
  },
  {
    title: "예금보험공사",
    message: "보호 한도를 설명하기엔 고객님의 잔액이 너무 멀리 갔습니다.",
  },
  {
    title: "금융결제원",
    message: "입금 속도가 시스템의 상식보다 빠릅니다.",
  },
  {
    title: "한국거래소",
    message: "고객님의 잔고 차트가 코스피보다 안정적입니다.",
  },
  {
    title: "산업통상자원부",
    message: "고객님의 현금흐름이 신성장동력으로 검토되고 있습니다.",
  },
  {
    title: "중소벤처기업부",
    message: "고객님의 통장은 이미 유니콘을 넘어 신화 속 동물이 되었습니다.",
  },
  {
    title: "과학기술정보통신부",
    message: "해당 자산 증가 현상은 신기술로 분류될 가능성이 있습니다.",
  },
  {
    title: "행정안전부",
    message: "고객님의 잔액으로 인해 재난문자 발송을 검토했습니다.",
  },
  {
    title: "관세청",
    message: "해외에서 들어온 돈은 아닌데 규모가 수상합니다.",
  },
  {
    title: "조달청",
    message: "고객님의 잔고로 국가 물품 구매가 가능해 보입니다.",
  },
  {
    title: "국토교통부",
    message: "고객님의 자산으로 인해 일부 부동산 지도가 다시 계산되고 있습니다.",
  },
  {
    title: "고용노동부",
    message: "이 정도 수익률이면 근로의욕 저하가 우려됩니다.",
  },
  {
    title: "방송통신위원회",
    message: "해당 입금 알림은 지나치게 자극적일 수 있습니다.",
  },
  {
    title: "개인정보보호위원회",
    message: "고객님의 잔액이 너무 커서 화면 밖으로 유출될 뻔했습니다.",
  },
  {
    title: "한국인터넷진흥원",
    message: "비정상적으로 행복한 금융 패턴이 감지되었습니다.",
  },
  {
    title: "한국소비자원",
    message: "출금이 안 되지만 만족도가 이상하게 높습니다.",
  },
  {
    title: "서울시",
    message: "고객님의 잔고로 한강뷰가 긴장하고 있습니다.",
  },
  {
    title: "강남구청",
    message: "고객님의 자산 등급이 지역 분위기에 영향을 주고 있습니다.",
  },
  {
    title: "여의도 긴급회의",
    message: "방금 고객님의 잔고 때문에 회의실 불이 켜졌습니다.",
  },
  {
    title: "월가 감시센터",
    message: "고객님의 입금 그래프가 너무 아름다워 의심받고 있습니다.",
  },
  {
    title: "IMF",
    message: "고객님의 자산 단위가 국제 기준을 흔들고 있습니다.",
  },
  {
    title: "세계은행",
    message: "고객님의 통장이 개발도상국이 아니라 개발완료국으로 분류되었습니다.",
  },
  {
    title: "나스닥",
    message: "고객님의 잔고가 일부 빅테크 시총을 힐끔 보고 있습니다.",
  },
  {
    title: "한국은행 비상대책반",
    message: "고객님의 앱 실행 횟수와 통화량 증가 사이의 관계를 조사 중입니다.",
  },
  {
    title: "금융우주국",
    message: "고객님의 자산은 이제 지구 금융권 밖에서 관측되고 있습니다.",
  },
];

const ASSET_GRADES = [
  { min: 10_000_000_000_000_000n, range: "1경원 이상", name: "세계경제 버그 의심", message: "IMF가 새벽에 전화를 걸었습니다" },
  { min: 1_000_000_000_000_000n, range: "1,000조원 이상", name: "GDP랑 맞짱 가능", message: "이제 단위가 경제학입니다" },
  { min: 100_000_000_000_000n, range: "100조원 ~ 1,000조원", name: "기획재정부 비상회의", message: "나라 살림이 당신 눈치를 봅니다" },
  { min: 10_000_000_000_000n, range: "10조원 ~ 100조원", name: "한국은행이 긴장함", message: "기준금리가 당신을 의식합니다" },
  { min: 1_000_000_000_000n, range: "1조원 ~ 10조원", name: "한국은행이 힐끔 봄", message: "통화정책 회의 안건에 오를 수도 있습니다" },
  { min: 100_000_000_000n, range: "1,000억원 ~ 1조원", name: "뉴스에 나올 뻔한 사람", message: "경제지가 관심을 보입니다" },
  { min: 10_000_000_000n, range: "100억원 ~ 1,000억원", name: "재벌 0.5세", message: "자산이 현실감을 잃기 시작했습니다" },
  { min: 1_000_000_000n, range: "10억원 ~ 100억원", name: "준재벌", message: "은행원이 말투를 바꿉니다" },
  { min: 100_000_000n, range: "1억원 ~ 10억원", name: "강남 공기 체험권", message: "이제 숫자가 제법 건방집니다" },
  { min: 10_000_000n, range: "1,000만원 ~ 1억원", name: "동네 현금왕", message: "편의점 앞에서 자신감 상승" },
  { min: 1_000_000n, range: "100만원 ~ 1,000만원", name: "소소한 부자", message: "잔고가 웃기 시작했습니다" },
  { min: 0n, range: "0원 ~ 100만원", name: "씨앗 자산가", message: "입금의 기운이 느껴집니다" },
];

const dom = {
  notification: document.querySelector("#depositNotification"),
  soundBubble: document.querySelector("#soundBubble"),
  bankInitials: document.querySelector("#bankInitials"),
  noticeAmountTop: document.querySelector("#noticeAmountTop"),
  noticeLineOne: document.querySelector("#noticeLineOne"),
  noticeLineTwo: document.querySelector("#noticeLineTwo"),
  noticeLineThree: document.querySelector("#noticeLineThree"),
  noticeLineFour: document.querySelector("#noticeLineFour"),
  accountNumber: document.querySelector("#accountNumber"),
  totalAsset: document.querySelector("#totalAsset"),
  assetGradeName: document.querySelector("#assetGradeName"),
  assetGradeMessage: document.querySelector("#assetGradeMessage"),
  merchantName: document.querySelector("#merchantName"),
  depositAmount: document.querySelector("#depositAmount"),
  todayDeposit: document.querySelector("#todayDeposit"),
  quickAttemptCount: document.querySelector("#quickAttemptCount"),
  rankingList: document.querySelector("#rankingList"),
  gradeViewTitle: document.querySelector("#gradeViewTitle"),
  gradeViewMessage: document.querySelector("#gradeViewMessage"),
  gradeList: document.querySelector("#gradeList"),
  productList: document.querySelector("#productList"),
  depositHistoryList: document.querySelector("#depositHistoryList"),
  waitingPeople: document.querySelector("#waitingPeople"),
  waitingYears: document.querySelector("#waitingYears"),
  modal: document.querySelector("#appModal"),
  modalTitle: document.querySelector("#modalTitle"),
  modalMessage: document.querySelector("#modalMessage"),
  closeModal: document.querySelector("#closeModal"),
  secondaryModalButton: document.querySelector("#secondaryModalButton"),
  customerNameField: document.querySelector("#customerNameField"),
  customerNameInput: document.querySelector("#customerNameInput"),
  customerNameError: document.querySelector("#customerNameError"),
  transferButton: document.querySelector("#transferButton"),
  depositButton: document.querySelector("#depositButton"),
  todayDepositButton: document.querySelector("#todayDepositButton"),
  historyBackButton: document.querySelector("#historyBackButton"),
  attemptSummaryButton: document.querySelector("#attemptSummaryButton"),
  replayNotice: document.querySelector("#replayNotice"),
  refreshCenter: document.querySelector("#refreshCenter"),
  tabs: document.querySelectorAll(".feature-tabs button"),
  panels: document.querySelectorAll("[data-view-panel]"),
};

const appState = {
  depositAmount: 0n,
  todayDepositTotal: 0n,
  totalAsset: 0n,
  merchantName: "",
  depositReason: "",
  accountNumber: "",
  withdrawAttempts: 0,
  joinedProducts: new Set(),
  currentGrade: ASSET_GRADES[ASSET_GRADES.length - 1],
  customerName: "",
};

const modalState = {
  primaryAction: null,
  dismissible: true,
};

let audioContext;
let depositTimerId;
let appStarted = false;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBigInt(min, max) {
  if (max < min) {
    return min;
  }

  const range = max - min + 1n;

  if (range <= BigInt(Number.MAX_SAFE_INTEGER)) {
    return min + BigInt(Math.floor(Math.random() * Number(range)));
  }

  const digits = range.toString().length;
  let candidate = 0n;

  do {
    const raw = Array.from({ length: digits }, () => randomInt(0, 9)).join("");
    candidate = BigInt(raw.replace(/^0+/, "") || "0");
  } while (candidate >= range);

  return min + candidate;
}

function normalizeMoneyString(value) {
  if (typeof value === "bigint" && value >= 0n) {
    return value.toString();
  }

  if (typeof value === "number" && Number.isSafeInteger(value) && value >= 0) {
    return String(value);
  }

  if (typeof value === "string" && /^\d+$/.test(value)) {
    return value;
  }

  return null;
}

function safeBigInt(value, fallback = 0n) {
  const normalized = normalizeMoneyString(value);

  return normalized === null ? fallback : BigInt(normalized);
}

function safeText(value, fallback) {
  const text = typeof value === "string" ? value.trim() : "";

  return text ? text.slice(0, 80) : fallback;
}

function createTextElement(tagName, textContent, className) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  element.textContent = textContent;
  return element;
}

function randomDigits(length) {
  return Array.from({ length }, () => randomInt(0, 9)).join("");
}

function createAccountNumber() {
  return `${randomDigits(7)}-${randomDigits(2)}-${randomDigits(6)}`;
}

function getTodayKey() {
  const now = new Date();
  const two = (value) => String(value).padStart(2, "0");

  return `${now.getFullYear()}-${two(now.getMonth() + 1)}-${two(now.getDate())}`;
}

function readJsonArray(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function writeJsonArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeCustomerName(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 16);
}

function getSavedCustomerName() {
  return normalizeCustomerName(localStorage.getItem(STORAGE_KEYS.customerName) || "");
}

function saveCustomerName(name) {
  localStorage.setItem(STORAGE_KEYS.customerName, name);
  appState.customerName = name;
}

function getCustomerNoticeName() {
  const name = appState.customerName || getSavedCustomerName() || "고객";
  return name.endsWith("님") ? name : `${name}님`;
}
function getOrCreateAccountNumber() {
  const saved = localStorage.getItem(STORAGE_KEYS.accountNumber);

  if (saved) {
    return saved;
  }

  const accountNumber = createAccountNumber();
  localStorage.setItem(STORAGE_KEYS.accountNumber, accountNumber);
  return accountNumber;
}

function getSavedBigInt(key) {
  const saved = localStorage.getItem(key);

  return safeBigInt(saved);
}

function getSavedNumber(key) {
  const saved = Number(localStorage.getItem(key));

  return Number.isFinite(saved) && saved > 0 ? saved : 0;
}

function formatWon(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function formatNumber(value) {
  return value.toLocaleString("ko-KR");
}

function maskAccountNumber(accountNumber) {
  const digits = accountNumber.replace(/\D/g, "");
  const head = digits.slice(0, 7).padEnd(7, "0");
  const tail = digits.slice(-3).padStart(3, "0");

  return `${head}-**-**${tail}`;
}

function getDateTimeParts(date = new Date()) {
  const two = (value) => String(value).padStart(2, "0");

  return {
    date: `${two(date.getMonth() + 1)}/${two(date.getDate())}`,
    time: `${two(date.getHours())}:${two(date.getMinutes())}`,
  };
}

function pickMerchantName() {
  return CEO_MERCHANTS[randomInt(0, CEO_MERCHANTS.length - 1)];
}

function pickDepositReason() {
  return DEPOSIT_REASONS[randomInt(0, DEPOSIT_REASONS.length - 1)];
}

function pickBankInitials() {
  return BANK_INITIALS[randomInt(0, BANK_INITIALS.length - 1)];
}

function setRandomBankInitials() {
  dom.bankInitials.textContent = pickBankInitials();
}

function getCurrentGrade(totalAsset) {
  return ASSET_GRADES.find((grade) => totalAsset >= grade.min) ?? ASSET_GRADES[ASSET_GRADES.length - 1];
}

function getGradeMaxAsset(grade) {
  const gradeIndex = ASSET_GRADES.findIndex((item) => item.name === grade.name);

  if (gradeIndex > 0) {
    return ASSET_GRADES[gradeIndex - 1].min;
  }

  return grade.min * 10n;
}

function getRandomDepositAmountByGrade(totalAsset) {
  const grade = getCurrentGrade(totalAsset);
  const gradeMaxAsset = getGradeMaxAsset(grade);
  const depositMax = gradeMaxAsset / 10n;

  return randomBigInt(0n, depositMax);
}

function getNextDepositDelay() {
  return randomInt(DEPOSIT_COOLDOWN_MS.min, DEPOSIT_COOLDOWN_MS.max);
}

function updateTodayDepositTotal(depositAmount) {
  const todayKey = getTodayKey();
  const savedDate = localStorage.getItem(STORAGE_KEYS.todayDepositDate);
  const savedTotal = savedDate === todayKey ? getSavedBigInt(STORAGE_KEYS.todayDepositTotal) : 0n;
  const nextTotal = savedTotal + depositAmount;

  localStorage.setItem(STORAGE_KEYS.todayDepositDate, todayKey);
  localStorage.setItem(STORAGE_KEYS.todayDepositTotal, nextTotal.toString());

  return nextTotal;
}

function appendDepositHistory(entry) {
  const history = readDepositHistory();
  const normalizedEntry = normalizeDepositHistoryEntry(entry);

  if (!normalizedEntry) {
    return;
  }

  const nextHistory = [...history, normalizedEntry].slice(-MAX_DEPOSIT_HISTORY_ENTRIES);
  writeJsonArray(STORAGE_KEYS.depositHistory, nextHistory);
}

function readDepositHistory() {
  const history = readJsonArray(STORAGE_KEYS.depositHistory)
    .map(normalizeDepositHistoryEntry)
    .filter(Boolean)
    .slice(-MAX_DEPOSIT_HISTORY_ENTRIES);

  writeJsonArray(STORAGE_KEYS.depositHistory, history);
  return history;
}

function normalizeDepositHistoryEntry(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const amount = normalizeMoneyString(entry.amount);
  const totalAsset = normalizeMoneyString(entry.totalAsset);

  if (amount === null || totalAsset === null) {
    return null;
  }

  return {
    createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date().toISOString(),
    merchantName: safeText(entry.merchantName, "알 수 없는 입금자"),
    depositReason: safeText(entry.depositReason, "알 수 없는 입금"),
    amount,
    totalAsset,
  };
}

function getInitialRankingRecords() {
  return CEO_MERCHANTS.map((name) => ({
    name,
    amount: randomBigInt(40_000_000n, 850_000_000n).toString(),
  }));
}

function resetRankingRecords() {
  const initialRecords = getInitialRankingRecords();

  localStorage.setItem(STORAGE_KEYS.rankingDate, getTodayKey());
  localStorage.setItem(STORAGE_KEYS.rankingRecords, JSON.stringify(initialRecords));
  return initialRecords;
}

function normalizeRankingRecords(records) {
  if (!Array.isArray(records)) {
    return [];
  }

  return records
    .map((record) => {
      if (!record || typeof record !== "object") {
        return null;
      }

      const name = safeText(record.name, "");
      const amount = normalizeMoneyString(record.amount);

      return name && amount !== null ? { name, amount } : null;
    })
    .filter(Boolean);
}

function readRankingRecords() {
  const todayKey = getTodayKey();
  const savedDate = localStorage.getItem(STORAGE_KEYS.rankingDate);
  const savedRecords = localStorage.getItem(STORAGE_KEYS.rankingRecords);

  if (savedDate !== todayKey || !savedRecords) {
    return resetRankingRecords();
  }

  try {
    const parsedRecords = JSON.parse(savedRecords);
    const records = normalizeRankingRecords(parsedRecords);

    if (records.length === 0) {
      return resetRankingRecords();
    }

    if (records.length !== parsedRecords.length) {
      writeRankingRecords(records);
    }

    return records;
  } catch {
    return resetRankingRecords();
  }
}

function writeRankingRecords(records) {
  localStorage.setItem(STORAGE_KEYS.rankingRecords, JSON.stringify(records));
}

function updateRankingWithDeposit(merchantName, depositAmount) {
  const records = readRankingRecords();
  const target = records.find((record) => record.name === merchantName);

  if (target) {
    target.amount = (BigInt(target.amount) + depositAmount).toString();
  } else {
    records.push({ name: merchantName, amount: depositAmount.toString() });
  }

  writeRankingRecords(records);
}

function getTopRankingRecords() {
  return readRankingRecords()
    .map((record) => ({ ...record, amountValue: safeBigInt(record.amount) }))
    .sort((a, b) => {
      if (a.amountValue === b.amountValue) {
        return 0;
      }

      return a.amountValue > b.amountValue ? -1 : 1;
    })
    .slice(0, 3);
}

function readJoinedProducts() {
  return new Set(readJsonArray(STORAGE_KEYS.joinedProducts));
}

function saveJoinedProducts() {
  writeJsonArray(STORAGE_KEYS.joinedProducts, Array.from(appState.joinedProducts));
}

function persistDeposit() {
  const accountNumber = getOrCreateAccountNumber();
  const previousTotal = getSavedBigInt(STORAGE_KEYS.totalAsset);
  const depositAmount = getRandomDepositAmountByGrade(previousTotal);
  const todayDepositTotal = updateTodayDepositTotal(depositAmount);
  const totalAsset = previousTotal + depositAmount;
  const merchantName = pickMerchantName();
  const depositReason = pickDepositReason();
  const withdrawAttempts = getSavedNumber(STORAGE_KEYS.withdrawAttempts);
  const customerName = getSavedCustomerName();

  localStorage.setItem(STORAGE_KEYS.totalAsset, totalAsset.toString());
  updateRankingWithDeposit(merchantName, depositAmount);
  appendDepositHistory({
    createdAt: new Date().toISOString(),
    merchantName,
    depositReason,
    amount: depositAmount.toString(),
    totalAsset: totalAsset.toString(),
  });

  appState.accountNumber = accountNumber;
  appState.depositAmount = depositAmount;
  appState.todayDepositTotal = todayDepositTotal;
  appState.totalAsset = totalAsset;
  appState.merchantName = merchantName;
  appState.depositReason = depositReason;
  appState.withdrawAttempts = withdrawAttempts;
  appState.joinedProducts = readJoinedProducts();
  appState.currentGrade = getCurrentGrade(totalAsset);
  appState.customerName = customerName;
}
function fitTotalAssetText() {
  const container = dom.totalAsset.parentElement;

  if (!container) {
    return;
  }

  const availableWidth = container.clientWidth;
  let fontSize = Math.min(54, Math.max(28, availableWidth * 0.13));

  dom.totalAsset.style.setProperty("--total-asset-font-size", `${fontSize}px`);

  while (dom.totalAsset.scrollWidth > availableWidth && fontSize > 16) {
    fontSize -= 1;
    dom.totalAsset.style.setProperty("--total-asset-font-size", `${fontSize}px`);
  }

  if (dom.totalAsset.scrollWidth > availableWidth) {
    const ratio = availableWidth / dom.totalAsset.scrollWidth;
    fontSize = Math.max(10, Math.floor(fontSize * ratio));
    dom.totalAsset.style.setProperty("--total-asset-font-size", `${fontSize}px`);
  }
}

function renderMainScreen() {
  dom.accountNumber.textContent = appState.accountNumber;
  dom.totalAsset.textContent = formatWon(appState.totalAsset);
  dom.depositAmount.textContent = formatWon(appState.depositAmount);
  dom.todayDeposit.textContent = formatWon(appState.todayDepositTotal);
  dom.merchantName.textContent = appState.merchantName;
  dom.quickAttemptCount.textContent = `${formatNumber(appState.withdrawAttempts)}회`;
  dom.assetGradeName.textContent = appState.currentGrade.name;
  dom.assetGradeMessage.textContent = appState.currentGrade.message;

  window.requestAnimationFrame(fitTotalAssetText);
}

function renderNotification() {
  const { date, time } = getDateTimeParts();
  const maskedAccount = maskAccountNumber(appState.accountNumber);
  const depositText = formatWon(appState.depositAmount);
  const totalText = formatWon(appState.totalAsset);

  setRandomBankInitials();
  dom.noticeAmountTop.textContent = depositText;
  dom.noticeLineOne.textContent = `${getCustomerNoticeName()} ${date} ${time} ${maskedAccount}`;
  dom.noticeLineTwo.textContent = `${appState.merchantName} ${appState.depositReason}`;
  dom.noticeLineThree.textContent = `입금 ${depositText}`;
  dom.noticeLineFour.textContent = `잔금 ${totalText}`;
}

function renderRanking() {
  dom.rankingList.replaceChildren();

  getTopRankingRecords().forEach((record, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const copy = document.createElement("div");
    const amount = createTextElement("em", `+${formatWon(record.amountValue)}`);

    button.className = "ranking-row";
    button.type = "button";
    button.dataset.rankingAlert = "true";
    copy.append(createTextElement("span", `${index + 1}위`), createTextElement("strong", record.name));
    button.append(copy, amount);
    item.append(button);
    dom.rankingList.append(item);
  });
}

function renderDepositHistoryPage() {
  const history = readDepositHistory().slice().reverse().slice(0, RECENT_DEPOSIT_HISTORY_LIMIT);
  dom.depositHistoryList.replaceChildren();

  if (history.length === 0) {
    dom.depositHistoryList.append(createTextElement("div", "아직 기록된 입금이 없습니다.", "empty-state"));
    return;
  }

  history.forEach((entry) => {
    const createdAt = new Date(entry.createdAt);
    const date = Number.isNaN(createdAt.getTime()) ? new Date() : createdAt;
    const { date: dateText, time } = getDateTimeParts(date);
    const row = document.createElement("article");

    row.className = "history-row";
    row.append(
      createTextElement("span", `${dateText} ${time}`, "label"),
      createTextElement("strong", `${entry.merchantName} ${entry.depositReason}`),
      createTextElement("p", `계좌 ${maskAccountNumber(appState.accountNumber)}`),
      createTextElement("em", `입금 ${formatWon(safeBigInt(entry.amount))}`),
      createTextElement("small", `잔금 ${formatWon(safeBigInt(entry.totalAsset))}`),
    );
    dom.depositHistoryList.append(row);
  });
}

function renderGrades() {
  dom.gradeViewTitle.textContent = appState.currentGrade.name;
  dom.gradeViewMessage.textContent = appState.currentGrade.message;
  dom.gradeList.replaceChildren();

  ASSET_GRADES.slice()
    .reverse()
    .forEach((grade) => {
      const isCurrent = grade.name === appState.currentGrade.name;
      const item = document.createElement("div");

      item.className = `grade-item${isCurrent ? " current" : ""}`;
      item.append(createTextElement("strong", grade.name), createTextElement("span", `${grade.range} · ${grade.message}`));
      dom.gradeList.append(item);
    });
}

function renderProducts() {
  dom.productList.replaceChildren();

  FINANCIAL_PRODUCTS.forEach((product, index) => {
    const joined = appState.joinedProducts.has(product.name);
    const row = document.createElement("div");
    const copy = document.createElement("div");
    const button = document.createElement("button");

    row.className = "product-row";
    copy.className = "product-copy";
    copy.append(createTextElement("strong", product.name), createTextElement("p", product.desc));
    button.className = joined ? "danger" : "";
    button.type = "button";
    button.dataset.productIndex = String(index);
    button.textContent = joined ? "해지 불가능" : "가입";
    row.append(copy, button);
    dom.productList.append(row);
  });
}

function renderCustomerCenter() {
  dom.waitingPeople.textContent = `${formatNumber(randomInt(5_000_000, 100_000_000))}명`;
  dom.waitingYears.textContent = `${formatNumber(randomInt(100, 999))}년`;
}

function renderAll() {
  renderMainScreen();
  renderNotification();
  renderRanking();
  renderDepositHistoryPage();
  renderGrades();
  renderProducts();
  renderCustomerCenter();
}

function showNotification() {
  setRandomBankInitials();
  dom.notification.classList.remove("show");
  void dom.notification.offsetWidth;
  dom.notification.classList.add("show");
  playDepositSound();
}

function showSoundBubble(message = "띵동 💸") {
  dom.soundBubble.textContent = message;
  dom.soundBubble.classList.toggle("long", message.length > 8);
  dom.soundBubble.classList.remove("show");
  void dom.soundBubble.offsetWidth;
  dom.soundBubble.classList.add("show");
}

function playDepositSound() {
  const soundMessage = Math.random() < 0.12 ? "입금액이 너무 커서 알림음이 떨렸습니다." : "띵동 💸";
  showSoundBubble(soundMessage);

  try {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextConstructor) {
      return;
    }

    audioContext = audioContext || new AudioContextConstructor();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const now = audioContext.currentTime;
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    gain.connect(audioContext.destination);

    [880, 1174].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now + index * 0.13);
      oscillator.connect(gain);
      oscillator.start(now + index * 0.13);
      oscillator.stop(now + index * 0.13 + 0.18);
    });
  } catch {
    // 브라우저가 사용자 동작 전 자동 재생을 막으면 시각 알림만 보여준다.
  }
}

function maybeShowAgencyAlert() {
  const shouldShow = appState.totalAsset >= 100_000_000n || Math.random() < 0.4;

  if (!shouldShow) {
    return;
  }

  window.setTimeout(() => {
    const alert = AGENCY_ALERTS[randomInt(0, AGENCY_ALERTS.length - 1)];
    openModal(alert.title, alert.message);
  }, 1800);
}

function setCustomerNameFieldVisible(isVisible) {
  dom.customerNameField.hidden = !isVisible;
  dom.customerNameError.hidden = true;
}

function openModal(title, message, options = {}) {
  modalState.primaryAction = options.onPrimary || null;
  modalState.dismissible = options.dismissible !== false;
  setCustomerNameFieldVisible(false);
  dom.modalTitle.textContent = title;
  dom.modalMessage.textContent = message;
  dom.modalMessage.classList.toggle("long", message.length > 180);
  dom.closeModal.textContent = options.primaryText || "확인";
  dom.closeModal.classList.toggle("danger", options.primaryTone === "danger");
  dom.secondaryModalButton.hidden = !options.secondaryText;
  dom.secondaryModalButton.textContent = options.secondaryText || "뒤로가기";
  dom.modal.classList.add("open");
}

function openCustomerNameModal() {
  openModal("이름/닉네임 입력", "입금 알림에 표시할 이름입니다.", {
    primaryText: "확인",
    dismissible: false,
    onPrimary: handleCustomerNameSubmit,
  });
  setCustomerNameFieldVisible(true);
  dom.customerNameInput.value = getSavedCustomerName();

  window.setTimeout(() => {
    dom.customerNameInput.focus();
  }, 50);
}

function openAccountCreatedModal() {
  openModal("계좌가 개설되었습니다!", `${getCustomerNoticeName()} 입금요정 계좌가 준비되었습니다.`, {
    primaryText: "확인",
    dismissible: false,
    onPrimary: startApp,
  });
}

function handleCustomerNameSubmit() {
  const customerName = normalizeCustomerName(dom.customerNameInput.value);

  if (!customerName) {
    dom.customerNameError.hidden = false;
    dom.customerNameInput.focus();
    return;
  }

  saveCustomerName(customerName);
  appState.accountNumber = getOrCreateAccountNumber();
  dom.accountNumber.textContent = appState.accountNumber;
  openAccountCreatedModal();
}

function startApp() {
  if (appStarted) {
    closeModal();
    return;
  }

  appStarted = true;
  closeModal();
  persistDeposit();
  renderAll();

  window.setTimeout(showNotification, 350);
  scheduleNextDeposit();
  maybeShowAgencyAlert();
}
function openMaintenanceModal() {
  openModal("은행점검 시간입니다.", "정기 점검시간 : 00:00~23:59");
}

function openWithdrawAttemptModal() {
  const count = formatNumber(appState.withdrawAttempts);
  openModal(
    `출금 시도 ${count}회`,
    `은행점검으로 인해 모두 실패했습니다.\n\n현재까지 출금 실패 횟수: ${count}회`,
  );
}

function openDepositHistoryPage() {
  renderDepositHistoryPage();
  activateView("history");
}

function openCancelProductModal(product) {
  openModal("해지 불가능합니다.", `${product.name} 상품은\n현재 정기점검 중입니다.\n정기 점검시간 : 00:00~23:59`);
}

function closeModal() {
  modalState.primaryAction = null;
  modalState.dismissible = true;
  setCustomerNameFieldVisible(false);
  dom.modal.classList.remove("open");
}

function handleModalPrimary() {
  const action = modalState.primaryAction;

  if (action) {
    action();
    return;
  }

  closeModal();
}

function incrementWithdrawAttempt() {
  appState.withdrawAttempts += 1;
  localStorage.setItem(STORAGE_KEYS.withdrawAttempts, String(appState.withdrawAttempts));
  renderMainScreen();
}

function activateView(viewName) {
  dom.tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  dom.panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === viewName);
  });
}

function handleProductClick(event) {
  const button = event.target.closest("[data-product-index]");

  if (!button) {
    return;
  }

  const product = FINANCIAL_PRODUCTS[Number(button.dataset.productIndex)];

  if (!product) {
    return;
  }

  if (appState.joinedProducts.has(product.name)) {
    openCancelProductModal(product);
    return;
  }

  appState.joinedProducts.add(product.name);
  saveJoinedProducts();
  renderProducts();
  openModal("가입이 완료되었습니다.", "해지는 불가능합니다.");
}

function processAutomaticDeposit() {
  persistDeposit();
  renderAll();
  showNotification();
  scheduleNextDeposit();
}

function scheduleNextDeposit() {
  if (depositTimerId) {
    window.clearTimeout(depositTimerId);
  }

  depositTimerId = window.setTimeout(processAutomaticDeposit, getNextDepositDelay());
}
function preventDoubleTapZoom() {
  let lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    (event) => {
      const now = Date.now();

      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }

      lastTouchEnd = now;
    },
    { passive: false },
  );
}
function bindEvents() {
  dom.transferButton.addEventListener("click", () => {
    incrementWithdrawAttempt();
    openMaintenanceModal();
  });

  dom.depositButton.addEventListener("click", openMaintenanceModal);
  dom.todayDepositButton.addEventListener("click", openDepositHistoryPage);
  dom.historyBackButton.addEventListener("click", () => activateView("ranking"));
  dom.attemptSummaryButton.addEventListener("click", openWithdrawAttemptModal);
  dom.closeModal.addEventListener("click", handleModalPrimary);
  dom.secondaryModalButton.addEventListener("click", closeModal);
  dom.customerNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleModalPrimary();
    }
  });
  dom.replayNotice.addEventListener("click", showNotification);
  dom.refreshCenter.addEventListener("click", renderCustomerCenter);
  window.addEventListener("resize", fitTotalAssetText);

  dom.tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateView(tab.dataset.view));
  });

  dom.rankingList.addEventListener("click", (event) => {
    if (event.target.closest("[data-ranking-alert]")) {
      openModal("랭킹 조작 의심으로\n점검 중입니다.", "정기 점검시간 : 00:00~23:59");
    }
  });

  dom.productList.addEventListener("click", handleProductClick);

  dom.modal.addEventListener("click", (event) => {
    if (event.target === dom.modal && modalState.dismissible) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalState.dismissible) {
      closeModal();
    }
  });
}

function init() {
  registerAppServiceWorker();
  bindEvents();
  preventDoubleTapZoom();

  const savedCustomerName = getSavedCustomerName();

  if (!savedCustomerName) {
    openCustomerNameModal();
    return;
  }

  appState.customerName = savedCustomerName;
  startApp();
}

function registerAppServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  let reloadingForUpdate = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForUpdate) {
      return;
    }

    reloadingForUpdate = true;
    window.location.reload();
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`./sw.js?v=${APP_VERSION}`)
      .then((registration) => registration.update())
      .catch(() => {});
  });
}
init();










