import { apiClient } from "./client";
import { AuthUser, LoginResponse } from "@/features/auth/types";

export async function loginUser(credentials: { email: string; password: string }): Promise<LoginResponse> {
  return apiClient<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}
