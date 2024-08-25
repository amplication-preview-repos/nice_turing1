import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="details" multiline source="details" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
