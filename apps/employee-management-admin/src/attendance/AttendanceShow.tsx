import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTENDANCE_TITLE_FIELD } from "./AttendanceTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const AttendanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Employee"
          target="attendanceId"
          label="Employees"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
