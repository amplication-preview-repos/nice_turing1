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
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutAttendancesInput } from "./EmployeeCreateNestedManyWithoutAttendancesInput";
import { EnumAttendanceStatus } from "./EnumAttendanceStatus";

@InputType()
class AttendanceCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutAttendancesInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutAttendancesInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutAttendancesInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutAttendancesInput;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceStatus,
  })
  @IsEnum(EnumAttendanceStatus)
  @IsOptional()
  @Field(() => EnumAttendanceStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { AttendanceCreateInput as AttendanceCreateInput };
