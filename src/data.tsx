export const menuItems = [
  {
    key: "home",
    title: "홈",
    url: "/",
    fncClick: Function,
  },
  {
    key: "project",
    title: "시공사례",
    url: "/project",
    fncClick: Function,
    sub: [
      {
        key: "echo",
        title: "친환경 건축",
        url: "/project?category=echo",
        fncClick: Function,
      },
      {
        key: "resident",
        title: "주거공간",
        url: "/project?category=resident",
        fncClick: Function,
      },
      {
        key: "commercial",
        title: "상업공간",
        url: "/project?category=commercial",
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
