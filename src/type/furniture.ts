export type Furniture = {
  id: number;
  name: string;
  address: string;
  hours?: string | null;
  coverImageUrl?: string | null;
  images?: string[];
  phoneNumber?: string | null;
  email?: string | null;
  info?: string | null;
  description?: string | null;
  introText?: string | null;
}

export type FurnitureIntroProps = {
  name: string;
  description: string;
  coverImageUrl: string;
  introText: string;
}