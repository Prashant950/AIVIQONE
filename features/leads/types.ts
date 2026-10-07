export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  product: string;
  amount?: string;
  status: "New" | "Contacted" | "Warm" | "Hot" | "Cold" | "Converted" | "Lost";
  stage: string;
  createdAt: string;
}
