import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
  timestamp?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
