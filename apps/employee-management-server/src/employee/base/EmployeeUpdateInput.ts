/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceWhereUniqueInput } from "../../attendance/base/AttendanceWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class EmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendanceWhereUniqueInput)
  @IsOptional()
  @Field(() => AttendanceWhereUniqueInput, {
    nullable: true,
  })
  attendance?: AttendanceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutEmployeesInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  employeeId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  personalDetails?: InputJsonValue;
}

export { EmployeeUpdateInput as EmployeeUpdateInput };
