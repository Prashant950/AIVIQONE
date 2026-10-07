export type UserRole = "sales-agent" | "team-lead" | "super-admin" | "hr-admin" | "admin" | "user";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginResponse {
  user: AuthUser;
  token: string;
}