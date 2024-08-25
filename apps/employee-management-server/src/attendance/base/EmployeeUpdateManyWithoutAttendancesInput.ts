/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeUpdateManyWithoutAttendancesInput {
  @Field(() => [EmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeWhereUniqueInput],
  })
  connect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeWhereUniqueInput],
  })
  disconnect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeWhereUniqueInput],
  })
  set?: Array<EmployeeWhereUniqueInput>;
}

export { EmployeeUpdateManyWithoutAttendancesInput as EmployeeUpdateManyWithoutAttendancesInput };
