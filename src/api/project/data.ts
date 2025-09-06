// 프로젝트 기본형
export const defaultProject = {
  id: 0,
  title: "",
  imageUrl: "",
  description: "",
  areaSize: 0,
  type: "",
  durationWeeks: 0,
  reviews: "",
}

export const keywordItems = [
  { value: "APART", label: "아파트" },
  { value: "HOUSE", label: "주택" },
  { value: "COMMERCIAL", label: "상가" },
  { value: "NEW", label: "신축" },
];

/*
  필터
 - 주거 : 평수 / 타입-아파트,주택 / 라인업 - 전체, 부분
 - 상업 : 평수 / 타입-상가, 오피스 / 라인업 - 전체, 부분
 - 건축 : 평수 / 타입-신축, 리모델링 / 라인업 - 전체, 부분
 */
export const pyItems: { key: string; label: string }[] = [
  { key: "20PY", label: "20평형" },
  { key: "30PY", label: "30평형" },
  { key: "40PY", label: "40평형" },
  { key: "50PY", label: "50평형" },
  { key: "60PY", label: "60평형" },
  { key: "OTHER", label: "그 외 평형" },
];

export const typeItems: { [key: string]: { key: string; label: string }[] } = {
  RESIDENCE: [
    { key: "APART", label: "아파트" },
    { key: "HOUSE", label: "주택" },
  ],
  MERCANTILE: [
    { key: "COMMERCIAL", label: "상가" },
    { key: "OFFICE", label: "오피스" },
  ],
  ARCHITECTURE: [
    { key: "NEW", label: "신축" },
    { key: "REMODELING", label: "리모델링" },
  ]
};

export const lineupItems: { key: string; label: string }[] = [
  { key: "FULL", label: "전체" },
  { key: "PARTIAL", label: "부분" },
];

