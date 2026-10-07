export interface Employee {
  id: string;
  name: string;
  department: string;
  status: string;
}

export interface LeaveRequest {
  id: string;
  employeeName: string;
  days: number;
  status: "Pending" | "Approved" | "Rejected";
}
