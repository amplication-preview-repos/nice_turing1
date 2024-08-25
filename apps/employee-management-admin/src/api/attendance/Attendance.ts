import { Employee } from "../employee/Employee";

export type Attendance = {
  createdAt: Date;
  date: Date | null;
  employee?: Employee | null;
  employees?: Array<Employee>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
