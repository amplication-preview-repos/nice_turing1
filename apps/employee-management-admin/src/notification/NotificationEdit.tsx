import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipient" source="recipient" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
