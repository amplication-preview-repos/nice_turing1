import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EmployeeUpdateManyWithoutAttendancesInput } from "./EmployeeUpdateManyWithoutAttendancesInput";

export type AttendanceUpdateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeUpdateManyWithoutAttendancesInput;
  status?: "Option1" | null;
};
