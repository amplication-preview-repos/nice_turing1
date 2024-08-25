import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  submittedBy?: StringNullableFilter;
  title?: StringNullableFilter;
};
