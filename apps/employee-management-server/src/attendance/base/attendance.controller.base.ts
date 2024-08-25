/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AttendanceService } from "../attendance.service";
import { AttendanceCreateInput } from "./AttendanceCreateInput";
import { Attendance } from "./Attendance";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";
import { AttendanceUpdateInput } from "./AttendanceUpdateInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

export class AttendanceControllerBase {
  constructor(protected readonly service: AttendanceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attendance })
  async createAttendance(
    @common.Body() data: AttendanceCreateInput
  ): Promise<Attendance> {
    return await this.service.createAttendance({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Attendance] })
  @ApiNestedQuery(AttendanceFindManyArgs)
  async attendances(@common.Req() request: Request): Promise<Attendance[]> {
    const args = plainToClass(AttendanceFindManyArgs, request.query);
    return this.service.attendances({
      ...args,
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async attendance(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    const result = await this.service.attendance({
      where: params,
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAttendance(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() data: AttendanceUpdateInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.updateAttendance({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAttendance(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.deleteAttendance({
        where: params,
        select: {
          createdAt: true,
          date: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/employees")
  @ApiNestedQuery(EmployeeFindManyArgs)
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        attendance: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        employeeId: true,
        id: true,
        personalDetails: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  async connectEmployees(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateAttendance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  async updateEmployees(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateAttendance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  async disconnectEmployees(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateAttendance({
      where: params,
      data,
      select: { id: true },
    });
  }
}
