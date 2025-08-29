export const menuItems = [
  {
    key: "home",
    title: "홈",
    url: "/home",
    fncClick: Function,
  },
  {
    key: "project",
    title: "시공사례",
    url: "/project",
    fncClick: Function,
    sub: [
      {
        key: "residence",
        title: "주거공간",
        url: "/project?category=residence",
        fncClick: Function,
      },
      {
        key: "mercantile",
        title: "상업공간",
        url: "/project?category=mercantile",
        fncClick: Function,
      },
      {
        key: "architecture",
        title: "친환경 건축",
        url: "/project?category=architecture",
        fncClick: Function,
      },
    ],
  },
  {
    key: "showroom",
    title: "직영쇼룸",
    url: "/showroom",
    fncClick: Function,
  },
  {
    key: "furniture",
    title: "직영가구",
    url: "/furniture",
    fncClick: Function,
  },
  {
    key: "notice",
    title: "공지사항",
    url: "/notice",
    fncClick: Function,
  },
];

export const projectsItems = [
  {
    id: 1,
    title: "모던 아파트 거실 인테리어",
    imageUrl: "/image/mock/거실.png",
    description: "깔끔하고 세련된 모던 스타일의 거실 공간으로 재탄생시킨 프로젝트입니다.",
    areaSize: 32,
    type: "주거공간",
    durationWeeks: 4,
    reviews: "공간이 정말 넓어 보이고 깔끔해졌어요. 생각했던 것보다 훨씬 만족스럽습니다!",
  },
  {
    id: 2,
    title: "럭셔리 건물 리모델링",
    imageUrl: "/image/mock/건물3.png",
    description: "고급스러운 소재와 디자인을 활용한 프리미엄 건물 리모델링 작업입니다.",
    areaSize: 34,
    type: "주거공간",
    durationWeeks: 8,
    reviews: "마감재 하나하나가 고급스럽고, 전체적인 분위기가 매우 세련되어졌습니다.",
  },
  {
    id: 3,
    title: "심플 주방 인테리어",
    imageUrl: "/image/mock/주방.png",
    description: "실용성과 심플함을 중시한 깔끔한 주방 인테리어 디자인입니다.",
    areaSize: 33,
    type: "주거공간",
    durationWeeks: 3,
    reviews: "수납공간이 늘어나고 동선이 훨씬 편해졌어요. 요리하는 재미가 생겼습니다.",
  },
  {
    id: 4,
    title: "카페 스타일 사무실",
    imageUrl: "/image/mock/사무실.png",
    description: "카페와 같은 편안한 분위기의 사무실 공간 인테리어 프로젝트입니다.",
    areaSize: 35,
    type: "상업공간",
    durationWeeks: 6,
    reviews: "직원들이 너무 좋아해요. 업무 효율도 높아지고 분위기가 밝아졌습니다."
  },
  {
    id: 5,
    title: "모던 카페 인테리어",
    imageUrl: "/image/mock/카페.png",
    description: "트렌디하고 모던한 감각의 카페 공간 디자인 작업입니다.",
    areaSize: 36,
    type: "상업공간",
    durationWeeks: 5,
    reviews: "손님들이 인테리어를 많이 칭찬해주세요. 매출도 확실히 늘었습니다!"
  },
  {
    id: 6,
    title: "프리미엄 학원 리모델링",
    imageUrl: "/image/mock/학원.png",
    description: "학습 효율을 높이는 쾌적하고 세련된 학원 공간 리모델링입니다.",
    areaSize: 32,
    type: "상업공간",
    durationWeeks: 7,
    reviews: "아이들이 학원 오는 걸 좋아하게 됐어요. 부모님들도 만족해하십니다."
  },
  {
    id: 7,
    title: "내추럴 스타일 욕실",
    imageUrl: "/image/mock/욕실.png",
    description: "자연스러운 소재와 색감을 활용한 편안한 욕실 공간 디자인입니다.",
    areaSize: 34,
    type: "주거공간",
    durationWeeks: 2,
    reviews: "스파에 온 것 같은 기분이에요. 매일 목욕하는 시간이 힐링타임입니다."
  },
  {
    id: 8,
    title: "모던 독서실 인테리어",
    imageUrl: "/image/mock/독서실.png",
    description: "집중력을 높이는 모던하고 조용한 독서실 공간 인테리어입니다.",
    areaSize: 33,
    type: "상업공간",
    durationWeeks: 4,
    reviews: "정말 집중이 잘 되는 공간이에요. 조명과 색감이 눈이 편안합니다."
  },
  {
    id: 9,
    title: "심플 자녀방 인테리어",
    imageUrl: "/image/mock/자녀방.png",
    description: "아이들의 성장을 고려한 심플하고 실용적인 자녀방 디자인입니다.",
    areaSize: 35,
    type: "주거공간",
    durationWeeks: 3,
    reviews: "아이가 너무 좋아해요. 정리정돈도 잘하게 되고 방을 아껴 쓰네요."
  },
  {
    id: 10,
    title: "트렌디 오피스 인테리어",
    imageUrl: "/image/mock/사무실.png",
    description: "최신 트렌드를 반영한 창의적이고 효율적인 오피스 공간입니다.",
    areaSize: 36,
    type: "상업공간",
    durationWeeks: 6,
    reviews: "회사 이미지가 확 달라졌어요. 클라이언트들이 사무실을 보고 놀랍니다."
  },
  {
    id: 11,
    title: "아늑한 식당 인테리어",
    imageUrl: "/image/mock/식당.png",
    description: "따뜻하고 아늑한 분위기의 식당 공간 인테리어 프로젝트입니다.",
    areaSize: 32,
    type: "상업공간",
    durationWeeks: 5,
    reviews: "가족 시간이 늘어났어요. 집에서 식사하는 것이 더 즐거워졌습니다."
  },
  {
    id: 12,
    title: "모던 주택 인테리어",
    imageUrl: "/image/mock/주택3.png",
    description: "현대적 감각과 실용성을 겸비한 모던 주택 인테리어 디자인입니다.",
    areaSize: 34,
    type: "상업공간",
    durationWeeks: 10,
    reviews: "친구들이 놀러 와서 집이 너무 예쁘다고 계속 칭찬해줘요."
  },
  {
    id: 13,
    title: "럭셔리 건물 리모델링",
    imageUrl: "/image/mock/건물1.png",
    description: "고급스러운 마감재와 디테일로 완성한 럭셔리 건물 리모델링입니다.",
    areaSize: 33,
    type: "상업공간",
    durationWeeks: 12,
    reviews: null
  },
  {
    id: 14,
    title: "내추럴 건물 인테리어",
    imageUrl: "/image/mock/건물2.png",
    description: "자연 친화적 소재와 컬러를 활용한 건물 인테리어 작업입니다.",
    areaSize: 35,
    type: "상업공간",
    durationWeeks: 9,
    reviews: null
  },
  {
    id: 15,
    title: "프리미엄 주택 리모델링",
    imageUrl: "/image/mock/주택1.png",
    description: "고객의 라이프스타일을 반영한 프리미엄 주택 리모델링 프로젝트입니다.",
    areaSize: 36,
    type: "주거공간",
    durationWeeks: 8,
    reviews: null
  },
];

export const pyFilter: { key: string; label: string }[] = [
  { key: "py20", label: "20평형" },
  { key: "py30", label: "30평형" },
  { key: "py40", label: "40평형" },
  { key: "py50", label: "50평형" },
  { key: "py60", label: "60평형" },
  { key: "pyOthers", label: "그 외 평형" },
];
export const typeFilter: { key: string; label: string }[] = [
  { key: "apt", label: "아파트" },
  { key: "house", label: "주택" },
];


export const notices = [
  {
    id: 1,
    title: "새로운 기능 업데이트 안내",
    createdAt: "2025-08-25",
    content: "이번 업데이트에서는 새로운 기능과 버그 수정이 포함되었습니다...",
  },
  {
    id: 2,
    title: "버그 수정 안내",
    createdAt: "2025-08-26",
    content: "이번 업데이트에서는 여러 가지 버그가 수정되었습니다...",
  },
  {
    id: 3,
    title: "시스템 점검 안내",
    createdAt: "2025-08-24",
    content:
      "정기 시스템 점검이 예정되어 있습니다. 이용에 참고 부탁드립니다...",
  },
  {
    id: 4,
    title: "서비스 이용약관 변경 안내",
    createdAt: "2025-08-23",
    content:
      "서비스 이용약관이 일부 변경되었습니다. 자세한 내용을 확인해주세요...",
  },
  {
    id: 5,
    title: "신규 서비스 출시 안내",
    createdAt: "2025-08-22",
    content:
      "새로운 서비스가 출시되었습니다. 많은 이용 부탁드립니다...새로운 서비스가 출시되었습니다. 많은 이용 부탁드립니다...새로운 서비스가 출시되었습니다. 많은 이용 부탁드립니다...새로운 서비스가 출시되었습니다. 많은 이용 부탁드립니다...새로운 서비스가 출시되었습니다. 많은 이용 부탁드립니다...",
  },
];

export const furnitures = [
  {
    id: 1,
    name: "JJ Mobilia",
    location: "대구광역시 수성구 달구벌대로 2478 1층 2~3F",
    hours: "평일 09:00~18:00 / 토 10:00~17:00 / 일 10:00~16:00",
    info: "방문 전 상담예약을 하셔야 매니저와의 인테리어 상담이 가능합니다.",
    image: "/image/mock/가구점 이미지.png",
  },
  {
    id: 2,
    name: "불성점",
    location: "대구광역시 북구 칠곡군 609 2~3F",
    hours: "평일 09:00~18:00 / 토 10:00~17:00 / 일 10:00~16:00",
    info: "방문 전 상담예약을 하셔야 견적상담이 가능하며, 예약없이 방문하시면 견적 상담없이 매장 내 자재 무드보드 및 키오스크 등의 체험은 가능합니다.",
    image: "/image/mock/회사 내부 이미지.png",
  },
];
