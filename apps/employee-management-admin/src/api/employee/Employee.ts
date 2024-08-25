import { Attendance } from "../attendance/Attendance";
import { JsonValue } from "type-fest";

export type Employee = {
  attendance?: Attendance | null;
  attendances?: Array<Attendance>;
  createdAt: Date;
  employeeId: string | null;
  id: string;
  personalDetails: JsonValue;
  updatedAt: Date;
};
