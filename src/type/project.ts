export type project = {
  id: number;
  title: string;
  imageUrl: string | null;
  description: string | null;
  areaSize: number;
  type: string;
  durationWeeks: number | null;
  reviews: string | null;
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