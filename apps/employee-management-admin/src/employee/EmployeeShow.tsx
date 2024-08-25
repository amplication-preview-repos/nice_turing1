import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { ATTENDANCE_TITLE_FIELD } from "../attendance/AttendanceTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Attendance"
          target="employeeId"
          label="Attendances"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
