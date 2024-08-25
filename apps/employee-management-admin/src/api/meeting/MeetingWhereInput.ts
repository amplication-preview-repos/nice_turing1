import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MeetingWhereInput = {
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
