import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="accountType"
          label="accountType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="contactNumber" source="contactNumber" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
