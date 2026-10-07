import { apiClient } from "./client";

export interface TaskItem {
  id: string;
  title: string;
  assignee: string;
  due: string;
  status: string;
}

export async function fetchTasks(): Promise<TaskItem[]> {
  return apiClient<TaskItem[]>("/api/tasks");
}
