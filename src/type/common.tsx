export type MenuItem = {
  key: string;
  title: string;
  url: string;
  fncClick?: () => void;
  sub?: MenuItem[];
};
