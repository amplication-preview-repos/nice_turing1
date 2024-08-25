import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipient" source="recipient" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
