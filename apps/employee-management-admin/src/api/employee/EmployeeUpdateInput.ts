import { AttendanceWhereUniqueInput } from "../attendance/AttendanceWhereUniqueInput";
import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";

export type EmployeeUpdateInput = {
  attendance?: AttendanceWhereUniqueInput | null;
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  employeeId?: string | null;
  personalDetails?: InputJsonValue;
};
