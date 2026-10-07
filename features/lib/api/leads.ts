import { apiClient } from "./client";
import { Lead } from "@/features/leads/types";

export async function fetchLeads(): Promise<Lead[]> {
  return apiClient<Lead[]>("/api/leads");
}
