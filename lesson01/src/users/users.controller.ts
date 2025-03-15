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
    return [];
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  // POST /users
  @Post()
  createOne(@Body() user: {}) {
    return user;
  }

  // PATCH /users/:id
  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return id;
  }
}
