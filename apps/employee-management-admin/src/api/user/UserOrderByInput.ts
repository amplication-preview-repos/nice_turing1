import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  accountType?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
