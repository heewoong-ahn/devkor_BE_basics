import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // '/user'를 통해 service 사용
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string[] {
    return this.userService.getUsers();
  }

  //service에서 비동기처리
  @Post()
  async addUser(@Body() info): Promise<string[]> {
    return this.userService.addUser(info.name);
  }

  @Delete()
  async deleteUser(@Body() info): Promise<string[]> {
    return this.userService.deleteUser(info.name);
  }

  @Get('/:index')
  getUserName(@Param('index') index: number): string {
    return this.userService.getUserName(index);
  }
}
