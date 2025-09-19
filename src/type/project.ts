import { Dispatch, SetStateAction } from "react";

export enum Category {
  RESIDENCE = "RESIDENCE",
  MERCANTILE = "MERCANTILE",
  ARCHITECTURE = "ARCHITECTURE",
}

export enum Lineup {
  ALL = "ALL",
  FULL = "FULL",
  PARTIAL = "PARTIAL",
}

export enum Keyword {
  ALL = "ALL",
  APART = "APART",
  HOUSE = "HOUSE",
  COMMERCIAL = "COMMERCIAL",
  NEW = "NEW",
  OFFICE = "OFFICE",
  REMODELING = "REMODELING"
}

export type Project = {
  id: number,
  title: string,
  size?: string,
  category?: string,
  description?: string,
  duration?: string,
  lineup?: string,
  keywords?: string[],
  review?: string,
  imageUrl?: string,
  images?: ProjectImage[]
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date,
  isDeleted?: string,
}

export type ProjectImage = {
  id: number;
  image: {
    id: number;
    url: string;
  };
  imageId: number;
  projectId: number;
  tagId: number;
}

export type ProjectCondition = {
  page: number;
  size?: number;
  search?: string;
  pyung?: string[];
  category?: Category;
  keyword?: Keyword;
  lineup?: Lineup;
}

export type TagFilterProps = {
  tagItems: { key: number; label: string }[];
  selectedTag: { key: number; label: string };
  setSelectedTag: Dispatch<SetStateAction<{
    key: number;
    label: string;
  }>>
}

export type ProjectDetailPageProps = {
  project: Project;
  tagFilterProps: TagFilterProps;
}

export type ProjectGalleryProps = {
  selectedView: "card" | "list";
  imageItems: ProjectImage[];
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

export type ProjectListFilterProps = {
  typeFilter: { key: string; label: string }[];
  condition?: ProjectCondition;
  mobileFilterOpen?: boolean;
  setCondition: Dispatch<SetStateAction<ProjectCondition>>;
  setMobileFilterOpen?: Dispatch<SetStateAction<boolean>>;
}

export type ProjectListHeaderProps = {
  totalItems: number;
  condition: ProjectCondition;
  setCondition: Dispatch<SetStateAction<ProjectCondition>>;
  setMobileFilterOpen?: Dispatch<SetStateAction<boolean>>;
}