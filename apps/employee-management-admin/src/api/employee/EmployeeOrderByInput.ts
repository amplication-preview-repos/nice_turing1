import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  attendanceId?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  personalDetails?: SortOrder;
  updatedAt?: SortOrder;
};
