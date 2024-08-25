import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  submittedBy?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
