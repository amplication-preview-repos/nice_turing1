import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
