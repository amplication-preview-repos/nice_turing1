import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTENDANCE_TITLE_FIELD } from "../attendance/AttendanceTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="attendance"
          source="attendance.id"
          reference="Attendance"
        >
          <TextField source={ATTENDANCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="employeeId" source="employeeId" />
        <TextField label="ID" source="id" />
        <TextField label="personalDetails" source="personalDetails" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
