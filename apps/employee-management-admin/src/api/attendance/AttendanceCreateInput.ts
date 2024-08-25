import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutAttendancesInput } from "./EmployeeCreateNestedManyWithoutAttendancesInput";

export type AttendanceCreateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeCreateNestedManyWithoutAttendancesInput;
  status?: "Option1" | null;
};
