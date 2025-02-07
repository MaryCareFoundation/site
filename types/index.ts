export interface DonorInformation {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface DonationInformation {
  amount: number;
  purpose: string;
}

export interface PaymentInformation {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

export interface VolunteerInformation {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  service: string;
}
