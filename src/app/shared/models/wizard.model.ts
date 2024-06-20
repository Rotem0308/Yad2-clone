export interface IWizard {
  contactName: string;
  contactPhone: string;
  additionalContactName: string;
  additionalContactPhone: string;
  hasReadTerms: true;
  course: string;
  info: object;
  address: object;
  paymentsAndDates: object;
  features: object;
  photos: File[];
}
