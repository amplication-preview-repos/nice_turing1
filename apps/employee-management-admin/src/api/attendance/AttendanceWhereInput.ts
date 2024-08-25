import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
};
