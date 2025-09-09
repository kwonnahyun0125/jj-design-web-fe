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
