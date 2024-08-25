import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  deadline?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
