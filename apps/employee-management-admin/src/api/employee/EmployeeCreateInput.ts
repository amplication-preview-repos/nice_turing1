import { AttendanceWhereUniqueInput } from "../attendance/AttendanceWhereUniqueInput";
import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";

export type EmployeeCreateInput = {
  attendance?: AttendanceWhereUniqueInput | null;
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  employeeId?: string | null;
  personalDetails?: InputJsonValue;
};
