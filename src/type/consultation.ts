export type ConsultationFormData = {
  name: string;
  phone: string;
  address: string;
  type: string;
  size: string;
  budget: string;
  preferredDate: string;
  note: string;
  isAgreeTerms: boolean;
};

export type PrivacyProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
export type ReferenceProps = {
  note: boolean;
  setNote: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DefaultProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SiteInfoProps = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  budget: string;
  setBudget: React.Dispatch<React.SetStateAction<string>>;
  preferredDate: string;
  setPreferredDate: React.Dispatch<React.SetStateAction<string>>;
}