import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get all users or /users?role=value
  findAll(@Query('role') role?: string 'INTERN' | 'ENGINEERS' | 'ADMIN') {
    return 'This action returns all users';
  }

  @Get('interns') //Get all interns
  findAllInterns() {
    return 'This action returns all interns';
  }

  @Get(':id') //Get user by id
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Post() //Post /Users
  create(@Body() user: unknown) {
    return user;
  }

  @Patch(':id') //Update user by id
  update(@Param('id') id: string, @Body() user: any) {
    return `This action updates a #${id} user with data: ${JSON.stringify(user)}`;
  }

  @Delete(':id') //Delete user by id
  delete(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
