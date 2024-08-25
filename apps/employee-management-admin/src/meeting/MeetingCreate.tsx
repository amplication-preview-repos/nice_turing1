import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MeetingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="details" multiline source="details" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
