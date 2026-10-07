export interface Task {
  id: string;
  title: string;
  description?: string;
  assignee: string;
  priority: "Low" | "Medium" | "High" | "Urgent";
  due: string;
  status: "Pending" | "In Progress" | "Completed" | "Done";
}
