import { AttendanceWhereUniqueInput } from "../attendance/AttendanceWhereUniqueInput";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EmployeeWhereInput = {
  attendance?: AttendanceWhereUniqueInput;
  attendances?: AttendanceListRelationFilter;
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  personalDetails?: JsonFilter;
};
