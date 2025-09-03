export type companyDataType = {
  id: number,
  name: string,
  owner: string,
  email: string,
  address: string,
  phone: string,
  business: string,
  naver: string,
  instagram: string,
  createdAt?: string | Date,
  updatedAt?: string | Date,
  isDeleted?: boolean
}
