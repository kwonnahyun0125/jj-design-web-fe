export type project = {
  id: number;
  title: string;
  year: number;
  price: number | null;
  img: string;
  desc: string;
  py: number;
  label: string;
}

export type KeywordFilterProps = {
  keywordItems: string[];
  selectedKeyword: string;
  setSelectedKeyword: (keyword: string) => void;
}

export type ProjectDetailPageProps = {
  project: project;
  keywordFilterProps: KeywordFilterProps;
}

export type ProjectGalleryProps = {
  selectedView: "card" | "list";
  imageList: project[];
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