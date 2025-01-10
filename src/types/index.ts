export interface DonationLink {
  amount: number;
  url: string;
}

export interface CampaignData {
  title: string;
  mainText: string;
  imageUrl: string;
  donationLinks: DonationLink[];
}