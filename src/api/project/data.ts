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
 - 주거 : 평수 / 타입-아파트, 주택 / 라인업 - 전체, 부분
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
  { key: "ALL", label: "전체" },
  { key: "FULL", label: "전체 시공" },
  { key: "PARTIAL", label: "부분 시공" },
];

/*
 - 주거 : 전체, 현관, 거실, 욕실, 주방, 방, 베란다
 - 상업 : 전체, 사무공간, 휴게공간, 주방, 홀, 가구
 - 친환경 건축 : 전체, 외부, 내부, 조감도
*/

export const imageTagItems: { [key: string]: { key: number; label: string }[] } = {
  // 주거 : 전체, 현관, 거실, 욕실, 주방, 방, 베란다
  RESIDENCE: [
    { key: 101, label: "현관" },
    { key: 102, label: "거실" },
    { key: 103, label: "욕실" },
    { key: 104, label: "주방" },
    { key: 105, label: "방" },
    { key: 106, label: "베란다" },
  ],
  // 상업 : 전체, 사무공간, 휴게공간, 주방, 홀, 가구
  MERCANTILE: [
    { key: 201, label: "사무공간" },
    { key: 202, label: "휴게공간" },
    { key: 203, label: "주방" },
    { key: 204, label: "홀" },
    { key: 205, label: "가구" },
  ],
  // 건축 : 전체, 외부, 내부, 조감도
  ARCHITECTURE: [
    { key: 301, label: "외부" },
    { key: 302, label: "내부" },
    { key: 303, label: "조감도" },
  ]
};
