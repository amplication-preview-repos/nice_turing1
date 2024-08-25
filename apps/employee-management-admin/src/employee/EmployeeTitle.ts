import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "employeeId";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.employeeId?.toString() || String(record.id);
};
