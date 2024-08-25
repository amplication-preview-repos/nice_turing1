import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accountType?: "Option1" | null;
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
