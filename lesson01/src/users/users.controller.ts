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
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // constructor
  constructor(private readonly usersService: UsersService) {}

  /* 
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  // GET /users
  @Get()
  findAll(@Query('role') role?: 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  // POST /users
  @Post()
  createOne(@Body() user: { role: 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.createOne(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  updateOne(@Param('id') id: number, @Body() userUpdate: {}) {
    return this.usersService.updateOne(id, userUpdate);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.usersService.deleteOne(id);
  }
}
