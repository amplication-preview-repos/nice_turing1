import { JsonValue } from "type-fest";

export type User = {
  accountType?: "Option1" | null;
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
