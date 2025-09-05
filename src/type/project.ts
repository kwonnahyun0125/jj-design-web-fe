export type Project = {
  id: number;
  title: string;
  imageUrl?: string | null;
  description?: string | null;
  size?: number;
  type?: string;
  duration?: number | null;
  reviews?: string | null;
}

export type ProjectCondition = {
  page: number;
  size?: number;
  search?: string;
  category?: Category;
  keyword?: Keyword;
  lineup?: Lineup;
}

export type KeywordFilterProps = {
  keywordItems: string[];
  selectedKeyword: string;
  setSelectedKeyword: (keyword: string) => void;
}

export type ProjectDetailPageProps = {
  project: Project;
  keywordFilterProps: KeywordFilterProps;
}

export type ProjectGalleryProps = {
  selectedView: "card" | "list";
  imageList: Project[];
}

export type GalleryItem = {
  id: number;
  img: string;
  label: string;
  keyword: string;
}

export type ViewButtonProps = {
  selectedView: "card" | "list";
  setSelectedView: (view: "card" | "list") => void;
}

export enum Category {
  RESIDENCE = 'RESIDENCE',
  MERCANTILE = 'MERCANTILE',
  ARCHITECTURE = 'ARCHITECTURE',
}

export enum Lineup {
  FULL = 'FULL',
  PARTIAL = 'PARTIAL',
}

export enum Keyword {
  APART = 'APART',
  HOUSE = 'HOUSE',
  COMMERCIAL = 'COMMERCIAL',
  NEW = 'NEW'
}