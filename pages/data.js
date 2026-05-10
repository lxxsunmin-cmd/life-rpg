// 수저별 챕터 데이터
// 각 챕터: { stage, age, location, weather, emoji, choices, events }
// choices: [{ text, delta }] — 미리 고정된 선택지
// events: 랜덤으로 끼어드는 미니 이벤트 (선택 가능)

export const CHAPTER_DATA = {
  gold: [
    {
      stage: "유년기 (5~7세)", age: "6세", location: "강남 고급 아파트 놀이방", weather: "sunny", emoji: "🏠✨🧸",
      choices: [
        { text: "피아노 레슨을 열심히 한다", delta: { happiness: 5, money: 0, relation: 3, pride: 8 } },
        { text: "레슨보다 친구들과 논다", delta: { happiness: 10, money: 0, relation: 8, pride: -3 } },
        { text: "혼자 책 읽는 걸 좋아한다", delta: { happiness: 5, money: 0, relation: -2, pride: 6 } },
      ]
    },
    {
      stage: "초등학교 저학년 (8~9세)", age: "8세", location: "강남 사립초등학교", weather: "sunny", emoji: "🏫🌟📚",
      choices: [
        { text: "반장 선거에 나간다", delta: { happiness: 5, money: 0, relation: 10, pride: 10 } },
        { text: "공부에만 집중한다", delta: { happiness: -3, money: 0, relation: -3, pride: 8 } },
        { text: "운동부에 들어간다", delta: { happiness: 8, money: 0, relation: 8, pride: 5 } },
      ]
    },
    {
      stage: "초등학교 고학년 (11~12세)", age: "11세", location: "해외여행 중 (일본 도쿄)", weather: "sunny", emoji: "✈️🗼🌏",
      choices: [
        { text: "부모님과 함께 즐긴다", delta: { happiness: 10, money: 0, relation: 10, pride: 3 } },
        { text: "혼자 돌아다니며 탐험한다", delta: { happiness: 12, money: -5, relation: 0, pride: 8 } },
        { text: "호텔에서 유튜브만 본다", delta: { happiness: 3, money: 0, relation: -5, pride: -3 } },
      ]
    },
    {
      stage: "중학교 (14~15세)", age: "14세", location: "강남 대형 학원가", weather: "night", emoji: "📖🌙💡",
      choices: [
        { text: "명문고 진학을 목표로 달린다", delta: { happiness: -5, money: 0, relation: -3, pride: 12 } },
        { text: "친구들과 어울리며 적당히 한다", delta: { happiness: 8, money: 0, relation: 10, pride: 0 } },
        { text: "유학을 준비하기 시작한다", delta: { happiness: 3, money: -10, relation: -5, pride: 8 } },
      ]
    },
    {
      stage: "고등학교 (17~18세)", age: "17세", location: "강남 특목고", weather: "cloudy", emoji: "📝🏆😤",
      choices: [
        { text: "SKY 입시에 올인한다", delta: { happiness: -8, money: 0, relation: -5, pride: 15 } },
        { text: "미국 유학을 결정한다", delta: { happiness: 5, money: -15, relation: -8, pride: 10 } },
        { text: "예체능 특기를 살린다", delta: { happiness: 8, money: -5, relation: 5, pride: 8 } },
      ]
    },
    {
      stage: "대학 / 취업 준비 (19세)", age: "19세", location: "아이비리그 or 서울대 캠퍼스", weather: "sunny", emoji: "🎓🌸🏛️",
      choices: [
        { text: "학업에 집중해 성적을 높인다", delta: { happiness: -3, money: 0, relation: -3, pride: 15 } },
        { text: "다양한 대외활동을 한다", delta: { happiness: 8, money: -5, relation: 12, pride: 8 } },
        { text: "창업 아이디어를 구상한다", delta: { happiness: 10, money: -8, relation: 5, pride: 10 } },
      ]
    },
    {
      stage: "스무살의 봄 (20~22세)", age: "21세", location: "강남 카페 / 해외 교환학생", weather: "sunny", emoji: "☕🌍💫",
      choices: [
        { text: "교환학생을 간다", delta: { happiness: 12, money: -15, relation: 8, pride: 8 } },
        { text: "인턴십을 시작한다", delta: { happiness: 3, money: 10, relation: 5, pride: 10 } },
        { text: "연애에 집중한다", delta: { happiness: 15, money: -5, relation: 15, pride: 3 } },
      ]
    },
    {
      stage: "첫 사회생활 (24~26세)", age: "25세", location: "대기업 본사 or 외국계 회사", weather: "sunny", emoji: "💼🏙️✨",
      choices: [
        { text: "대기업에 입사한다", delta: { happiness: 5, money: 15, relation: 5, pride: 12 } },
        { text: "가업을 이어받는다", delta: { happiness: -5, money: 20, relation: 3, pride: 8 } },
        { text: "스타트업을 창업한다", delta: { happiness: 10, money: -10, relation: 8, pride: 15 } },
      ]
    },
    {
      stage: "연애와 결혼 기로 (28~30세)", age: "29세", location: "고급 레스토랑 / 결혼 준비", weather: "sunset", emoji: "💑🥂💍",
      choices: [
        { text: "비슷한 집안과 결혼한다", delta: { happiness: 8, money: 10, relation: 10, pride: 5 } },
        { text: "사랑하는 사람과 결혼한다", delta: { happiness: 15, money: -5, relation: 15, pride: 8 } },
        { text: "결혼보다 커리어를 선택한다", delta: { happiness: 3, money: 10, relation: -5, pride: 12 } },
      ]
    },
    {
      stage: "내 집 마련 / 독립 (32~35세)", age: "33세", location: "강남 신축 아파트", weather: "sunny", emoji: "🏠💎🌆",
      choices: [
        { text: "부모님 도움으로 좋은 집을 산다", delta: { happiness: 10, money: 15, relation: 5, pride: -5 } },
        { text: "직접 번 돈으로 집을 마련한다", delta: { happiness: 8, money: -10, relation: 3, pride: 20 } },
        { text: "해외 이민을 고려한다", delta: { happiness: 5, money: -5, relation: -8, pride: 8 } },
      ]
    },
    {
      stage: "아이 또는 나 (36~38세)", age: "37세", location: "넓은 집, 육아 or 업무", weather: "sunny", emoji: "👶💼🌿",
      choices: [
        { text: "아이를 낳고 가정에 집중한다", delta: { happiness: 12, money: -8, relation: 15, pride: 5 } },
        { text: "커리어를 이어가며 아이도 키운다", delta: { happiness: -5, money: 5, relation: 5, pride: 10 } },
        { text: "아이 없이 둘만의 삶을 선택한다", delta: { happiness: 8, money: 10, relation: 8, pride: 5 } },
      ]
    },
    {
      stage: "중년의 위기 (42~45세)", age: "43세", location: "회사 임원실 / 골프장", weather: "cloudy", emoji: "🏌️‍♂️😮‍💨💼",
      choices: [
        { text: "더 높은 자리를 향해 달린다", delta: { happiness: -8, money: 15, relation: -10, pride: 12 } },
        { text: "삶의 균형을 찾기 시작한다", delta: { happiness: 10, money: -5, relation: 10, pride: 8 } },
        { text: "사회 환원 활동을 시작한다", delta: { happiness: 8, money: -10, relation: 8, pride: 15 } },
      ]
    },
    {
      stage: "나이듦과 마주하다 (50~52세)", age: "51세", location: "건강검진센터 / 제주도 별장", weather: "sunset", emoji: "🌅🪞🌿",
      choices: [
        { text: "건강 관리에 투자한다", delta: { happiness: 8, money: -10, relation: 5, pride: 8 } },
        { text: "그간 못한 취미를 시작한다", delta: { happiness: 12, money: -5, relation: 8, pride: 10 } },
        { text: "사업 확장에 계속 집중한다", delta: { happiness: -5, money: 15, relation: -5, pride: 8 } },
      ]
    },
    {
      stage: "부모님의 황혼 (56~58세)", age: "57세", location: "부모님 저택 / 요양원", weather: "cloudy", emoji: "👴👵🌿",
      choices: [
        { text: "최고급 요양 시설을 마련해 드린다", delta: { happiness: 5, money: -15, relation: 10, pride: 8 } },
        { text: "직접 곁에서 모신다", delta: { happiness: 8, money: 0, relation: 15, pride: 12 } },
        { text: "바빠서 자주 찾아뵙지 못한다", delta: { happiness: -10, money: 5, relation: -12, pride: -8 } },
      ]
    },
    {
      stage: "은퇴와 노년 (63~65세)", age: "64세", location: "해외 여행지 / 별장", weather: "sunset", emoji: "🌍🛋️🥂",
      choices: [
        { text: "세계 여행을 즐긴다", delta: { happiness: 15, money: -10, relation: 8, pride: 8 } },
        { text: "후배 양성과 사회 기여를 한다", delta: { happiness: 10, money: -5, relation: 12, pride: 15 } },
        { text: "조용히 가족과 시간을 보낸다", delta: { happiness: 12, money: 0, relation: 15, pride: 5 } },
      ]
    },
    {
      stage: "삶의 마지막 챕터 (72세~)", age: "74세", location: "따뜻한 저택 거실", weather: "sunset", emoji: "🕯️🌅👨‍👩‍👧‍👦",
      choices: [
        { text: "재산을 사회에 기부한다", delta: { happiness: 10, money: -20, relation: 10, pride: 20 } },
        { text: "가족에게 모두 물려준다", delta: { happiness: 8, money: 0, relation: 15, pride: 8 } },
        { text: "마지막까지 현역으로 일한다", delta: { happiness: 5, money: 10, relation: -5, pride: 12 } },
      ]
    },
  ],

  silver: [
    {
      stage: "유년기 (5~7세)", age: "6세", location: "아파트 단지 놀이터", weather: "sunny", emoji: "🌸🏠🧒",
      choices: [
        { text: "태권도를 배운다", delta: { happiness: 8, money: 0, relation: 5, pride: 6 } },
        { text: "동네 친구들과 어울린다", delta: { happiness: 10, money: 0, relation: 10, pride: 2 } },
        { text: "집에서 그림 그리기를 좋아한다", delta: { happiness: 6, money: 0, relation: -2, pride: 8 } },
      ]
    },
    {
      stage: "초등학교 저학년 (8~9세)", age: "8세", location: "동네 초등학교", weather: "sunny", emoji: "🏫📚😊",
      choices: [
        { text: "공부를 열심히 해 성적을 올린다", delta: { happiness: 3, money: 0, relation: 3, pride: 10 } },
        { text: "친구들과 축구를 즐긴다", delta: { happiness: 12, money: 0, relation: 12, pride: 3 } },
        { text: "독서에 빠진다", delta: { happiness: 5, money: 0, relation: -3, pride: 8 } },
      ]
    },
    {
      stage: "초등학교 고학년 (11~12세)", age: "11세", location: "가족 국내 여행 (제주도)", weather: "sunny", emoji: "🌊🏝️👨‍👩‍👧",
      choices: [
        { text: "가족과 함께 즐긴다", delta: { happiness: 12, money: 0, relation: 12, pride: 3 } },
        { text: "새로운 친구를 사귄다", delta: { happiness: 8, money: 0, relation: 8, pride: 3 } },
        { text: "여행보다 공부가 걱정된다", delta: { happiness: -3, money: 0, relation: -3, pride: 5 } },
      ]
    },
    {
      stage: "중학교 (14~15세)", age: "14세", location: "학원 + 집", weather: "night", emoji: "📖💡🌙",
      choices: [
        { text: "좋은 고등학교를 목표로 공부한다", delta: { happiness: -5, money: 0, relation: -3, pride: 12 } },
        { text: "학교 동아리 활동에 집중한다", delta: { happiness: 8, money: 0, relation: 10, pride: 5 } },
        { text: "게임에 빠져 공부를 소홀히 한다", delta: { happiness: 10, money: 0, relation: 5, pride: -8 } },
      ]
    },
    {
      stage: "고등학교 (17~18세)", age: "17세", location: "일반고 자습실", weather: "night", emoji: "📝😤🌙",
      choices: [
        { text: "수능에 올인한다", delta: { happiness: -8, money: 0, relation: -5, pride: 15 } },
        { text: "내신과 수능을 균형 있게 한다", delta: { happiness: 3, money: 0, relation: 3, pride: 10 } },
        { text: "예체능 진로를 고민한다", delta: { happiness: 5, money: -5, relation: 3, pride: 8 } },
      ]
    },
    {
      stage: "대학 / 취업 준비 (19세)", age: "19세", location: "지방 or 서울 중위권 대학교", weather: "sunny", emoji: "🎓🌸📚",
      choices: [
        { text: "장학금을 목표로 공부한다", delta: { happiness: -3, money: 10, relation: -3, pride: 12 } },
        { text: "아르바이트와 학업을 병행한다", delta: { happiness: 3, money: 8, relation: 5, pride: 8 } },
        { text: "대학 생활을 만끽한다", delta: { happiness: 12, money: -5, relation: 12, pride: 3 } },
      ]
    },
    {
      stage: "스무살의 봄 (20~22세)", age: "21세", location: "대학교 캠퍼스 / 카페", weather: "sunny", emoji: "☕🌼💛",
      choices: [
        { text: "스펙 쌓기에 집중한다", delta: { happiness: -3, money: 5, relation: -3, pride: 12 } },
        { text: "연애와 우정을 쌓는다", delta: { happiness: 12, money: -3, relation: 15, pride: 3 } },
        { text: "창업 동아리에 들어간다", delta: { happiness: 8, money: -3, relation: 8, pride: 10 } },
      ]
    },
    {
      stage: "첫 사회생활 (24~26세)", age: "25세", location: "중견기업 사무실", weather: "cloudy", emoji: "💼🏢☕",
      choices: [
        { text: "성실하게 일해 인정받는다", delta: { happiness: 5, money: 10, relation: 8, pride: 12 } },
        { text: "이직 준비를 병행한다", delta: { happiness: 3, money: 5, relation: -3, pride: 8 } },
        { text: "퇴근 후 부업을 시작한다", delta: { happiness: -3, money: 12, relation: -3, pride: 8 } },
      ]
    },
    {
      stage: "연애와 결혼 기로 (28~30세)", age: "29세", location: "카페 / 결혼 준비", weather: "sunset", emoji: "💑🌸💍",
      choices: [
        { text: "연인과 결혼을 결심한다", delta: { happiness: 12, money: -8, relation: 15, pride: 5 } },
        { text: "좀 더 여유가 생기면 결혼하자", delta: { happiness: 3, money: 8, relation: 3, pride: 5 } },
        { text: "비혼을 선택한다", delta: { happiness: 5, money: 10, relation: -5, pride: 10 } },
      ]
    },
    {
      stage: "내 집 마련 / 독립 (32~35세)", age: "33세", location: "수도권 아파트 청약", weather: "cloudy", emoji: "🏠📋💰",
      choices: [
        { text: "부모님 도움으로 집을 마련한다", delta: { happiness: 8, money: 10, relation: 5, pride: -3 } },
        { text: "전세로 시작해 차근차근 모은다", delta: { happiness: 5, money: 5, relation: 3, pride: 10 } },
        { text: "대출을 끌어 집을 산다", delta: { happiness: 5, money: -8, relation: 3, pride: 12 } },
      ]
    },
    {
      stage: "아이 또는 나 (36~38세)", age: "37세", location: "집 / 어린이집", weather: "sunny", emoji: "👶🌿🏠",
      choices: [
        { text: "아이를 낳고 육아에 집중한다", delta: { happiness: 10, money: -10, relation: 12, pride: 5 } },
        { text: "맞벌이로 아이를 키운다", delta: { happiness: -5, money: 8, relation: 5, pride: 8 } },
        { text: "아이 없이 둘만의 삶을 선택한다", delta: { happiness: 8, money: 8, relation: 5, pride: 5 } },
      ]
    },
    {
      stage: "중년의 위기 (42~45세)", age: "43세", location: "회사 / 집", weather: "cloudy", emoji: "😮‍💨🪞💭",
      choices: [
        { text: "승진을 위해 더 열심히 일한다", delta: { happiness: -5, money: 12, relation: -8, pride: 10 } },
        { text: "가족과 더 많은 시간을 보낸다", delta: { happiness: 10, money: -3, relation: 15, pride: 5 } },
        { text: "새로운 취미와 자기계발을 시작한다", delta: { happiness: 8, money: -5, relation: 3, pride: 12 } },
      ]
    },
    {
      stage: "나이듦과 마주하다 (50~52세)", age: "51세", location: "동네 헬스장 / 집", weather: "sunny", emoji: "🌿🪞💪",
      choices: [
        { text: "건강 관리에 집중한다", delta: { happiness: 8, money: -5, relation: 5, pride: 8 } },
        { text: "오랜 친구들과 다시 연락한다", delta: { happiness: 12, money: -3, relation: 15, pride: 5 } },
        { text: "노후 준비에 집중한다", delta: { happiness: -3, money: 15, relation: -3, pride: 8 } },
      ]
    },
    {
      stage: "부모님의 황혼 (56~58세)", age: "57세", location: "부모님 댁 / 요양원", weather: "rain", emoji: "👴👵🌧️",
      choices: [
        { text: "부모님 곁에서 직접 모신다", delta: { happiness: 5, money: -5, relation: 15, pride: 12 } },
        { text: "요양원을 알아본다", delta: { happiness: -3, money: -8, relation: 5, pride: -3 } },
        { text: "형제들과 역할을 나눈다", delta: { happiness: 5, money: -3, relation: 10, pride: 5 } },
      ]
    },
    {
      stage: "은퇴와 노년 (63~65세)", age: "64세", location: "동네 공원 / 여행지", weather: "sunset", emoji: "🌅🛋️🌿",
      choices: [
        { text: "국내 여행을 다니며 즐긴다", delta: { happiness: 12, money: -8, relation: 8, pride: 5 } },
        { text: "손자 손녀를 돌보며 지낸다", delta: { happiness: 10, money: 0, relation: 15, pride: 5 } },
        { text: "작은 일을 찾아 활동적으로 지낸다", delta: { happiness: 8, money: 5, relation: 5, pride: 10 } },
      ]
    },
    {
      stage: "삶의 마지막 챕터 (72세~)", age: "74세", location: "집 거실 / 병원", weather: "cloudy", emoji: "🕯️🌿👨‍👩‍👧",
      choices: [
        { text: "가족들에게 진심을 전한다", delta: { happiness: 12, money: 0, relation: 15, pride: 10 } },
        { text: "조용히 삶을 정리한다", delta: { happiness: 8, money: 5, relation: 5, pride: 8 } },
        { text: "버킷리스트를 하나씩 해낸다", delta: { happiness: 15, money: -10, relation: 8, pride: 12 } },
      ]
    },
  ],

  bronze: [
    {
      stage: "유년기 (5~7세)", age: "6세", location: "빌라 앞 골목", weather: "sunny", emoji: "🌱🏘️🧒",
      choices: [
        { text: "동네 아이들과 골목에서 논다", delta: { happiness: 12, money: 0, relation: 10, pride: 3 } },
        { text: "집에서 혼자 TV를 본다", delta: { happiness: 5, money: 0, relation: -3, pride: -2 } },
        { text: "엄마 일을 도우려 한다", delta: { happiness: 5, money: 0, relation: 8, pride: 8 } },
      ]
    },
    {
      stage: "초등학교 저학년 (8~9세)", age: "8세", location: "공립 초등학교", weather: "sunny", emoji: "🏫📚🌤️",
      choices: [
        { text: "공부를 열심히 한다", delta: { happiness: 3, money: 0, relation: 3, pride: 10 } },
        { text: "방과 후 교실에서 친구를 사귄다", delta: { happiness: 10, money: 0, relation: 12, pride: 3 } },
        { text: "부모님이 바빠 혼자 집에 있는다", delta: { happiness: -5, money: 0, relation: -3, pride: -3 } },
      ]
    },
    {
      stage: "초등학교 고학년 (11~12세)", age: "11세", location: "집 근처 도서관", weather: "cloudy", emoji: "📚🏛️☁️",
      choices: [
        { text: "도서관에서 혼자 공부한다", delta: { happiness: 3, money: 0, relation: -3, pride: 10 } },
        { text: "학교 축제 준비에 적극 참여한다", delta: { happiness: 10, money: 0, relation: 12, pride: 5 } },
        { text: "부모님 걱정에 일찍 철이 든다", delta: { happiness: -3, money: 0, relation: 5, pride: 8 } },
      ]
    },
    {
      stage: "중학교 (14~15세)", age: "14세", location: "집 + 학교", weather: "cloudy", emoji: "📖🌧️💭",
      choices: [
        { text: "성적 장학금을 노린다", delta: { happiness: -5, money: 8, relation: -3, pride: 12 } },
        { text: "친구들과 어울리며 청소년기를 즐긴다", delta: { happiness: 10, money: 0, relation: 12, pride: 0 } },
        { text: "편의점 알바를 돕는 부모님을 본다", delta: { happiness: -5, money: 0, relation: 5, pride: 5 } },
      ]
    },
    {
      stage: "고등학교 (17~18세)", age: "17세", location: "학교 자습실 / 집", weather: "night", emoji: "📝🌙😔",
      choices: [
        { text: "수능에 모든 걸 건다", delta: { happiness: -10, money: 0, relation: -5, pride: 15 } },
        { text: "취업 가능한 특성화고로 전학을 고민한다", delta: { happiness: -3, money: 5, relation: -3, pride: 5 } },
        { text: "야간 알바를 시작한다", delta: { happiness: -5, money: 10, relation: -3, pride: 5 } },
      ]
    },
    {
      stage: "대학 / 취업 준비 (19세)", age: "19세", location: "지방 국립대 / 고시원", weather: "cloudy", emoji: "🎓💸📖",
      choices: [
        { text: "학자금 대출로 대학에 진학한다", delta: { happiness: 5, money: -10, relation: 3, pride: 8 } },
        { text: "취업 전선에 바로 뛰어든다", delta: { happiness: -3, money: 8, relation: 0, pride: 5 } },
        { text: "장학금으로 버티며 공부한다", delta: { happiness: -5, money: 5, relation: -3, pride: 12 } },
      ]
    },
    {
      stage: "스무살의 봄 (20~22세)", age: "21세", location: "알바 + 학교", weather: "cloudy", emoji: "☕💸📚",
      choices: [
        { text: "알바와 학업을 병행한다", delta: { happiness: -3, money: 10, relation: 3, pride: 8 } },
        { text: "공모전으로 스펙을 쌓는다", delta: { happiness: 3, money: 3, relation: 3, pride: 12 } },
        { text: "친구들과 청춘을 즐긴다", delta: { happiness: 12, money: -5, relation: 12, pride: 3 } },
      ]
    },
    {
      stage: "첫 사회생활 (24~26세)", age: "25세", location: "중소기업 사무실", weather: "cloudy", emoji: "💼🏢😤",
      choices: [
        { text: "묵묵히 일하며 실력을 키운다", delta: { happiness: 3, money: 8, relation: 5, pride: 12 } },
        { text: "더 나은 직장을 위해 이직 준비한다", delta: { happiness: 3, money: 3, relation: -3, pride: 8 } },
        { text: "퇴근 후 자격증 공부를 한다", delta: { happiness: -5, money: 5, relation: -5, pride: 10 } },
      ]
    },
    {
      stage: "연애와 결혼 기로 (28~30세)", age: "29세", location: "집 / 작은 카페", weather: "sunset", emoji: "💑🌆💭",
      choices: [
        { text: "현실적인 조건을 맞춰 결혼을 준비한다", delta: { happiness: 5, money: -10, relation: 10, pride: 3 } },
        { text: "돈 모을 때까지 결혼을 미룬다", delta: { happiness: -3, money: 10, relation: -3, pride: 5 } },
        { text: "비혼으로 혼자 살기로 한다", delta: { happiness: 5, money: 8, relation: -5, pride: 8 } },
      ]
    },
    {
      stage: "내 집 마련 / 독립 (32~35세)", age: "33세", location: "빌라 전세 / 청약 대기", weather: "rain", emoji: "🏠💸🌧️",
      choices: [
        { text: "전세 사기 걱정하며 빌라에 산다", delta: { happiness: -5, money: -5, relation: 3, pride: -3 } },
        { text: "청약을 넣고 기다린다", delta: { happiness: 3, money: -3, relation: 3, pride: 8 } },
        { text: "부모님과 함께 살며 돈을 모은다", delta: { happiness: -3, money: 12, relation: 5, pride: -5 } },
      ]
    },
    {
      stage: "아이 또는 나 (36~38세)", age: "37세", location: "집 / 어린이집", weather: "cloudy", emoji: "👶💸😮‍💨",
      choices: [
        { text: "아이를 낳고 버텨본다", delta: { happiness: 5, money: -12, relation: 10, pride: 5 } },
        { text: "맞벌이로 아이를 키운다", delta: { happiness: -8, money: 8, relation: 3, pride: 5 } },
        { text: "아이는 포기하고 삶의 질을 높인다", delta: { happiness: 8, money: 8, relation: -3, pride: 3 } },
      ]
    },
    {
      stage: "중년의 위기 (42~45세)", age: "43세", location: "회사 / 집", weather: "rain", emoji: "😔🌧️💭",
      choices: [
        { text: "지금 직장을 지키는 게 최선이다", delta: { happiness: -3, money: 5, relation: 3, pride: -3 } },
        { text: "늦게라도 자격증 공부를 시작한다", delta: { happiness: 3, money: -3, relation: -3, pride: 12 } },
        { text: "가족과의 시간을 더 늘린다", delta: { happiness: 10, money: 0, relation: 15, pride: 5 } },
      ]
    },
    {
      stage: "나이듦과 마주하다 (50~52세)", age: "51세", location: "병원 / 집", weather: "cloudy", emoji: "🌿🪞😔",
      choices: [
        { text: "건강이 신경 쓰여 생활을 바꾼다", delta: { happiness: 5, money: -5, relation: 3, pride: 8 } },
        { text: "노후 자금이 걱정돼 더 일한다", delta: { happiness: -5, money: 10, relation: -3, pride: 5 } },
        { text: "지금 이 순간에 집중하며 산다", delta: { happiness: 10, money: 0, relation: 5, pride: 8 } },
      ]
    },
    {
      stage: "부모님의 황혼 (56~58세)", age: "57세", location: "부모님 댁", weather: "rain", emoji: "👴👵💔",
      choices: [
        { text: "힘들어도 직접 모신다", delta: { happiness: 3, money: -8, relation: 15, pride: 12 } },
        { text: "형제와 번갈아가며 돌본다", delta: { happiness: 5, money: -5, relation: 10, pride: 8 } },
        { text: "요양원을 알아보지만 죄책감이 든다", delta: { happiness: -8, money: -5, relation: 3, pride: -5 } },
      ]
    },
    {
      stage: "은퇴와 노년 (63~65세)", age: "64세", location: "집 / 동네 경로당", weather: "cloudy", emoji: "🌿🛋️☕",
      choices: [
        { text: "소박하게 텃밭을 가꾼다", delta: { happiness: 10, money: 3, relation: 5, pride: 8 } },
        { text: "손자 손녀를 돌보며 지낸다", delta: { happiness: 8, money: 0, relation: 15, pride: 5 } },
        { text: "노후 자금이 부족해 일을 계속한다", delta: { happiness: -5, money: 8, relation: -3, pride: 5 } },
      ]
    },
    {
      stage: "삶의 마지막 챕터 (72세~)", age: "74세", location: "병원 / 집", weather: "rain", emoji: "🕯️🌧️👨‍👩‍👧",
      choices: [
        { text: "가족 곁에서 마지막을 맞는다", delta: { happiness: 10, money: 0, relation: 15, pride: 10 } },
        { text: "살아온 삶이 자랑스럽다고 느낀다", delta: { happiness: 12, money: 0, relation: 8, pride: 15 } },
        { text: "더 잘 살지 못한 것이 아쉽다", delta: { happiness: -5, money: 0, relation: 5, pride: -5 } },
      ]
    },
  ],

  dirt: [
    {
      stage: "유년기 (5~7세)", age: "6세", location: "반지하 방 / 골목", weather: "rain", emoji: "🌧️🏚️😔",
      choices: [
        { text: "혼자 골목에서 논다", delta: { happiness: 5, money: 0, relation: 3, pride: -2 } },
        { text: "배고픔을 참으며 잠든다", delta: { happiness: -8, money: 0, relation: -3, pride: -5 } },
        { text: "이웃 아주머니 도움을 받는다", delta: { happiness: 5, money: 3, relation: 8, pride: -3 } },
      ]
    },
    {
      stage: "초등학교 저학년 (8~9세)", age: "8세", location: "학교 급식실", weather: "cloudy", emoji: "🍱🏫😶",
      choices: [
        { text: "급식이 하루 중 가장 좋다", delta: { happiness: 5, money: 0, relation: 3, pride: -3 } },
        { text: "공부라도 열심히 하겠다 결심한다", delta: { happiness: 3, money: 0, relation: -3, pride: 10 } },
        { text: "선생님의 관심이 부담스럽다", delta: { happiness: -3, money: 0, relation: -5, pride: -5 } },
      ]
    },
    {
      stage: "초등학교 고학년 (11~12세)", age: "11세", location: "집 / 편의점 앞", weather: "cloudy", emoji: "🏪😶💭",
      choices: [
        { text: "공부로 상황을 바꾸겠다 다짐한다", delta: { happiness: -3, money: 0, relation: -3, pride: 12 } },
        { text: "친구들에게 상황을 숨긴다", delta: { happiness: -5, money: 0, relation: -5, pride: -5 } },
        { text: "믿을 수 있는 친구에게 털어놓는다", delta: { happiness: 8, money: 0, relation: 10, pride: 5 } },
      ]
    },
    {
      stage: "중학교 (14~15세)", age: "14세", location: "학교 / 집", weather: "rain", emoji: "🌧️📖😤",
      choices: [
        { text: "성적 장학금을 위해 공부한다", delta: { happiness: -5, money: 8, relation: -5, pride: 15 } },
        { text: "비행 친구들과 어울린다", delta: { happiness: 5, money: 3, relation: 8, pride: -10 } },
        { text: "아르바이트를 알아본다", delta: { happiness: -3, money: 8, relation: -3, pride: 5 } },
      ]
    },
    {
      stage: "고등학교 (17~18세)", age: "17세", location: "야간 편의점 알바", weather: "night", emoji: "🏪🌙💸",
      choices: [
        { text: "알바하며 수능도 준비한다", delta: { happiness: -10, money: 10, relation: -5, pride: 12 } },
        { text: "취업을 목표로 기술을 배운다", delta: { happiness: -3, money: 8, relation: -3, pride: 8 } },
        { text: "학교를 그만두고 일에 집중한다", delta: { happiness: -8, money: 12, relation: -8, pride: -5 } },
      ]
    },
    {
      stage: "대학 / 취업 준비 (19세)", age: "19세", location: "고시원 / 공장", weather: "rain", emoji: "🏭💸😔",
      choices: [
        { text: "학자금 대출로 대학에 진학한다", delta: { happiness: 5, money: -12, relation: 3, pride: 10 } },
        { text: "공장 취업으로 돈을 먼저 번다", delta: { happiness: -5, money: 12, relation: -3, pride: 3 } },
        { text: "국가 지원 직업훈련을 받는다", delta: { happiness: 3, money: 5, relation: 3, pride: 8 } },
      ]
    },
    {
      stage: "스무살의 봄 (20~22세)", age: "21세", location: "고시원 / 야간 알바", weather: "night", emoji: "🌙💸😤",
      choices: [
        { text: "낮엔 일, 밤엔 공부한다", delta: { happiness: -8, money: 10, relation: -5, pride: 15 } },
        { text: "같은 처지의 친구들과 뭉친다", delta: { happiness: 8, money: -3, relation: 12, pride: 5 } },
        { text: "유튜브로 독학해 기술을 익힌다", delta: { happiness: 3, money: 3, relation: -3, pride: 10 } },
      ]
    },
    {
      stage: "첫 사회생활 (24~26세)", age: "25세", location: "중소기업 / 공장", weather: "cloudy", emoji: "🏭💪😔",
      choices: [
        { text: "어떤 일이든 최선을 다한다", delta: { happiness: 3, money: 8, relation: 5, pride: 15 } },
        { text: "더 나은 직장을 위해 공부한다", delta: { happiness: -5, money: 3, relation: -3, pride: 12 } },
        { text: "억울함에 쉽게 직장을 그만둔다", delta: { happiness: 5, money: -8, relation: -3, pride: -5 } },
      ]
    },
    {
      stage: "연애와 결혼 기로 (28~30세)", age: "29세", location: "집 / 동네", weather: "cloudy", emoji: "💑💸💭",
      choices: [
        { text: "같은 처지의 사람과 함께하기로 한다", delta: { happiness: 10, money: -5, relation: 12, pride: 5 } },
        { text: "결혼은 꿈도 못 꾼다, 나 먼저다", delta: { happiness: -5, money: 8, relation: -5, pride: 5 } },
        { text: "사랑하는 사람과 무모하게 결혼한다", delta: { happiness: 12, money: -10, relation: 15, pride: 3 } },
      ]
    },
    {
      stage: "내 집 마련 / 독립 (32~35세)", age: "33세", location: "반지하 or 고시원", weather: "rain", emoji: "🏚️💸🌧️",
      choices: [
        { text: "청약을 넣고 언젠가를 기다린다", delta: { happiness: 3, money: -3, relation: 3, pride: 8 } },
        { text: "반지하에서 벗어나기 위해 무리한다", delta: { happiness: -3, money: -10, relation: -3, pride: 8 } },
        { text: "지금 상황을 받아들이고 차분히 산다", delta: { happiness: 5, money: 5, relation: 5, pride: 5 } },
      ]
    },
    {
      stage: "아이 또는 나 (36~38세)", age: "37세", location: "집", weather: "rain", emoji: "👶💸😔",
      choices: [
        { text: "아이를 낳기로 한다, 힘들어도", delta: { happiness: 5, money: -15, relation: 10, pride: 5 } },
        { text: "아이는 포기한다, 나도 힘드니까", delta: { happiness: 3, money: 5, relation: -5, pride: 3 } },
        { text: "아이에게만은 다른 삶을 주겠다 결심한다", delta: { happiness: 8, money: -10, relation: 12, pride: 15 } },
      ]
    },
    {
      stage: "중년의 위기 (42~45세)", age: "43세", location: "공장 / 식당", weather: "rain", emoji: "😔🌧️💪",
      choices: [
        { text: "지금 자리를 지키는 게 최선이다", delta: { happiness: -5, money: 5, relation: 3, pride: -3 } },
        { text: "늦었지만 자격증에 도전한다", delta: { happiness: 3, money: -3, relation: -3, pride: 15 } },
        { text: "내 아이만큼은 다르게 살게 해주겠다", delta: { happiness: 5, money: -5, relation: 12, pride: 12 } },
      ]
    },
    {
      stage: "나이듦과 마주하다 (50~52세)", age: "51세", location: "병원 / 집", weather: "cloudy", emoji: "🌿💊😔",
      choices: [
        { text: "몸이 아파도 일을 계속한다", delta: { happiness: -8, money: 8, relation: -3, pride: 5 } },
        { text: "건강을 챙기기 시작한다", delta: { happiness: 5, money: -5, relation: 3, pride: 8 } },
        { text: "지금까지 버텨온 자신이 대단하다 느낀다", delta: { happiness: 10, money: 0, relation: 5, pride: 15 } },
      ]
    },
    {
      stage: "부모님의 황혼 (56~58세)", age: "57세", location: "부모님 댁", weather: "rain", emoji: "👴👵🌧️",
      choices: [
        { text: "형편이 안 돼도 곁에 있어드린다", delta: { happiness: 5, money: -8, relation: 15, pride: 12 } },
        { text: "죄송하지만 내 삶도 버겁다", delta: { happiness: -10, money: 3, relation: -5, pride: -8 } },
        { text: "복지 혜택을 알아봐 드린다", delta: { happiness: 5, money: -3, relation: 10, pride: 8 } },
      ]
    },
    {
      stage: "은퇴와 노년 (63~65세)", age: "64세", location: "집 / 공원", weather: "cloudy", emoji: "🌿🛋️😔",
      choices: [
        { text: "기초연금으로 소박하게 산다", delta: { happiness: 5, money: 3, relation: 5, pride: 5 } },
        { text: "일을 놓지 못하고 계속한다", delta: { happiness: -5, money: 8, relation: -3, pride: 5 } },
        { text: "이 나이까지 살아낸 것만으로 충분하다", delta: { happiness: 12, money: 0, relation: 5, pride: 15 } },
      ]
    },
    {
      stage: "삶의 마지막 챕터 (72세~)", age: "74세", location: "병원 / 집", weather: "rain", emoji: "🕯️🌧️😔",
      choices: [
        { text: "힘들었지만 후회 없다고 느낀다", delta: { happiness: 12, money: 0, relation: 8, pride: 15 } },
        { text: "아이에게 더 잘해주지 못해 미안하다", delta: { happiness: -5, money: 0, relation: 10, pride: -3 } },
        { text: "다음 생엔 다르게 살고 싶다고 생각한다", delta: { happiness: -3, money: 0, relation: 5, pride: 3 } },
      ]
    },
  ],
};

// 스탯 조합으로 결정되는 엔딩 타입
export const ENDING_TYPES = [
  {
    id: "self_made",
    title: "스스로 쓴 이야기",
    condition: (s) => s.pride >= 70 && s.money >= 65,
    emoji: "🌅✍️🏔️",
    theme: "어떤 환경에서 출발했든 스스로 일어선 삶. 쉽지 않았지만, 결국 해냈다.",
  },
  {
    id: "warm_life",
    title: "온기로 가득 찬",
    condition: (s) => s.happiness >= 70 && s.relation >= 70,
    emoji: "🏠🌸🤝",
    theme: "돈도 명예도 아닌, 사람과 온기로 가득 찬 삶. 이것으로 충분했다.",
  },
  {
    id: "lonely_success",
    title: "빛나지만 쓸쓸한",
    condition: (s) => s.money >= 75 && s.relation < 45,
    emoji: "🏙️🌙💼",
    theme: "겉으로는 빛났지만, 곁에 아무도 없었다. 뒤늦게 깨달은 것들이 있다.",
  },
  {
    id: "proud_poor",
    title: "자신을 잃지 않은",
    condition: (s) => s.pride >= 75 && s.money < 45,
    emoji: "🌿🕯️😌",
    theme: "넉넉하진 않았다. 하지만 한 번도 자신을 잃지 않았다.",
  },
  {
    id: "broken",
    title: "아직 끝나지 않은 물음",
    condition: (s) => s.happiness < 40 && s.pride < 40,
    emoji: "🌧️🪞💭",
    theme: "더 잘 살 수 있었을까. 다른 선택을 했다면 달라졌을까.",
  },
  {
    id: "ordinary",
    title: "조용히 빛난",
    condition: (s) => s.happiness >= 55 && s.happiness < 70 && s.relation >= 55,
    emoji: "☕🌿🌤️",
    theme: "특별하지 않았지만, 조용히 빛나는 삶이었다. 그것으로 충분했다.",
  },
  {
    id: "late_bloomer",
    title: "때를 기다린",
    condition: (s) => s.pride >= 65 && s.happiness >= 60 && s.money < 60,
    emoji: "🌸🌱🌅",
    theme: "남들보다 늦었지만, 결국 자기 자리를 찾았다. 피는 시간은 각자 다르다.",
  },
  {
    id: "default",
    title: "하나의 생",
    condition: () => true,
    emoji: "🕯️🌿🌅",
    theme: "완벽하지 않았지만, 그것이 바로 삶이었다.",
  },
];

export const EVENTS = [
  {
    id: "sns",
    emoji: "📱",
    title: "SNS 제안",
    text: "친구가 같이 릴스를 만들어보자고 제안한다. 요즘 SNS로 돈 버는 사람도 많다고.",
    choices: [
      { text: "같이 해보기로 한다", delta: { happiness: 8, money: 5, relation: 8, pride: 5 } },
      { text: "관심 없다고 거절한다", delta: { happiness: -2, money: 0, relation: -3, pride: 3 } },
      { text: "혼자 계정을 만들어본다", delta: { happiness: 5, money: 3, relation: 0, pride: 8 } },
    ]
  },
  {
    id: "accident",
    emoji: "🚗",
    title: "교통사고",
    text: "길을 건너다 접촉사고가 났다. 크게 다치진 않았지만 당황스럽다.",
    choices: [
      { text: "합의를 보고 넘어간다", delta: { happiness: -3, money: -8, relation: 0, pride: -3 } },
      { text: "보험 처리를 꼼꼼히 한다", delta: { happiness: -5, money: -3, relation: -3, pride: 5 } },
      { text: "상대방과 원만하게 해결한다", delta: { happiness: 3, money: -5, relation: 5, pride: 5 } },
    ]
  },
  {
    id: "job_offer",
    emoji: "💼",
    title: "뜻밖의 제안",
    text: "지인에게서 갑자기 일자리 제안이 왔다. 지금보다 조건이 좋지만 리스크가 있다.",
    choices: [
      { text: "과감히 도전한다", delta: { happiness: 8, money: 10, relation: 3, pride: 10 } },
      { text: "안정을 택해 거절한다", delta: { happiness: -3, money: 0, relation: 3, pride: -3 } },
      { text: "좀 더 알아보고 결정한다", delta: { happiness: 3, money: 3, relation: 3, pride: 3 } },
    ]
  },
  {
    id: "old_friend",
    emoji: "📞",
    title: "오랜 친구의 연락",
    text: "오랫동안 연락이 끊겼던 친구에게서 갑자기 연락이 왔다.",
    choices: [
      { text: "반갑게 만난다", delta: { happiness: 10, money: -3, relation: 12, pride: 3 } },
      { text: "왜 이제야 연락하냐며 무시한다", delta: { happiness: -3, money: 0, relation: -8, pride: -3 } },
      { text: "짧게 안부만 묻고 끊는다", delta: { happiness: 3, money: 0, relation: 3, pride: 0 } },
    ]
  },
  {
    id: "health",
    emoji: "🏥",
    title: "갑작스러운 건강 이상",
    text: "갑자기 몸에 이상 신호가 왔다. 병원에 가야 할 것 같다.",
    choices: [
      { text: "바로 병원에 간다", delta: { happiness: -5, money: -10, relation: 3, pride: 3 } },
      { text: "바빠서 그냥 버텨본다", delta: { happiness: -10, money: 0, relation: -3, pride: -5 } },
      { text: "건강검진을 예약한다", delta: { happiness: -3, money: -5, relation: 3, pride: 5 } },
    ]
  },
  {
    id: "investment",
    emoji: "📈",
    title: "투자 권유",
    text: "지인이 수익률 좋은 투자처를 소개해줬다. 목돈이 필요하다.",
    choices: [
      { text: "과감하게 투자한다", delta: { happiness: 5, money: 15, relation: 3, pride: 5 } },
      { text: "사기 같아서 거절한다", delta: { happiness: 3, money: 0, relation: -5, pride: 5 } },
      { text: "소액만 해본다", delta: { happiness: 3, money: 5, relation: 3, pride: 3 } },
    ]
  },
  {
    id: "family_fight",
    emoji: "💬",
    title: "가족과의 갈등",
    text: "가족 중 한 명과 크게 다퉜다. 서로 상처받은 말을 했다.",
    choices: [
      { text: "먼저 사과한다", delta: { happiness: 3, money: 0, relation: 12, pride: 5 } },
      { text: "상대가 먼저 사과하길 기다린다", delta: { happiness: -8, money: 0, relation: -8, pride: -3 } },
      { text: "시간이 해결해줄 거라 믿는다", delta: { happiness: -3, money: 0, relation: -3, pride: 3 } },
    ]
  },
  {
    id: "lottery",
    emoji: "🍀",
    title: "뜻밖의 행운",
    text: "복권을 샀는데 소액이지만 당첨됐다. 기분이 묘하다.",
    choices: [
      { text: "가족에게 밥을 산다", delta: { happiness: 10, money: -3, relation: 10, pride: 5 } },
      { text: "저축한다", delta: { happiness: 3, money: 8, relation: 0, pride: 5 } },
      { text: "오랜 꿈에 써본다", delta: { happiness: 12, money: -5, relation: 3, pride: 8 } },
    ]
  },

  // ── 터닝포인트 (계급을 바꿀 수 있는 굵직한 이벤트) ──
  {
    id: "startup",
    emoji: "🚀",
    title: "창업의 기회",
    text: "지인이 같이 창업하자고 한다. 아이디어도 있고 타이밍도 괜찮아 보인다. 전 재산을 걸어야 한다.",
    choices: [
      { text: "전부 걸고 창업한다", delta: { happiness: 8, money: 25, relation: 5, pride: 20 } },
      { text: "소액만 투자하고 지켜본다", delta: { happiness: 3, money: 8, relation: 3, pride: 8 } },
      { text: "리스크가 커서 거절한다", delta: { happiness: -3, money: 0, relation: -5, pride: -3 } },
    ]
  },
  {
    id: "startup_fail",
    emoji: "📉",
    title: "사업 실패",
    text: "믿었던 사업이 무너졌다. 빚이 생겼고, 다시 시작해야 한다.",
    choices: [
      { text: "빚을 갚으며 다시 일어선다", delta: { happiness: -8, money: -20, relation: 3, pride: 15 } },
      { text: "주변에 도움을 요청한다", delta: { happiness: -5, money: -10, relation: 10, pride: -5 } },
      { text: "모든 걸 내려놓고 쉰다", delta: { happiness: 5, money: -15, relation: -3, pride: -8 } },
    ]
  },
  {
    id: "big_lottery",
    emoji: "🎰",
    title: "로또 당첨",
    text: "믿기 어렵지만 로또 1등에 당첨됐다. 수십억이 생겼다.",
    choices: [
      { text: "가족과 함께 새 삶을 시작한다", delta: { happiness: 15, money: 40, relation: 15, pride: 10 } },
      { text: "사업에 투자한다", delta: { happiness: 8, money: 25, relation: 3, pride: 15 } },
      { text: "사회에 기부한다", delta: { happiness: 12, money: 10, relation: 12, pride: 20 } },
    ]
  },
  {
    id: "scam",
    emoji: "🪤",
    title: "전 재산 사기",
    text: "믿었던 투자처가 사기였다. 모아온 돈을 모두 잃었다.",
    choices: [
      { text: "법적으로 싸워 되찾는다", delta: { happiness: -8, money: -15, relation: -3, pride: 10 } },
      { text: "현실을 받아들이고 다시 시작한다", delta: { happiness: -5, money: -20, relation: 5, pride: 12 } },
      { text: "무너진 채로 한동안 지낸다", delta: { happiness: -15, money: -20, relation: -8, pride: -10 } },
    ]
  },
  {
    id: "promotion",
    emoji: "📊",
    title: "파격 승진 제안",
    text: "예상치 못한 파격적인 승진 제안이 왔다. 연봉이 두 배가 된다. 단, 지방 발령이다.",
    choices: [
      { text: "가족을 설득하고 간다", delta: { happiness: -5, money: 20, relation: -8, pride: 12 } },
      { text: "가족을 위해 거절한다", delta: { happiness: 5, money: 0, relation: 15, pride: 8 } },
      { text: "원격 근무를 협상한다", delta: { happiness: 5, money: 10, relation: 5, pride: 10 } },
    ]
  },
  {
    id: "inheritance",
    emoji: "📜",
    title: "예상치 못한 유산",
    text: "오래전 연락이 끊겼던 친척이 세상을 떠나며 재산을 남겼다.",
    choices: [
      { text: "고마운 마음으로 잘 쓴다", delta: { happiness: 10, money: 25, relation: 5, pride: 5 } },
      { text: "형제들과 공평하게 나눈다", delta: { happiness: 8, money: 12, relation: 15, pride: 10 } },
      { text: "전액 기부한다", delta: { happiness: 12, money: 0, relation: 8, pride: 20 } },
    ]
  },
  {
    id: "emigrate",
    emoji: "✈️",
    title: "해외 이민 기회",
    text: "해외 취업 비자가 나왔다. 연봉과 환경이 지금보다 훨씬 낫다. 모든 걸 두고 떠나야 한다.",
    choices: [
      { text: "새로운 삶을 위해 떠난다", delta: { happiness: 10, money: 20, relation: -12, pride: 15 } },
      { text: "가족과 함께 이민을 준비한다", delta: { happiness: 8, money: 15, relation: 5, pride: 12 } },
      { text: "뿌리를 두고 떠날 수 없다", delta: { happiness: 3, money: 0, relation: 10, pride: 5 } },
    ]
  },
  {
    id: "viral",
    emoji: "🔥",
    title: "콘텐츠 대박",
    text: "취미로 올린 영상이 수백만 조회수를 기록했다. 브랜드 협찬과 MCN 계약 제안이 쏟아진다.",
    choices: [
      { text: "크리에이터로 전업한다", delta: { happiness: 12, money: 20, relation: 5, pride: 15 } },
      { text: "부업으로만 유지한다", delta: { happiness: 8, money: 10, relation: 3, pride: 8 } },
      { text: "주목받는 게 부담스러워 그만둔다", delta: { happiness: 3, money: 0, relation: 0, pride: -3 } },
    ]
  },
];
