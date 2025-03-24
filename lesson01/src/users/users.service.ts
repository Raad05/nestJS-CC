import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  // properties
  private users = [
    {
      id: 1,
      role: 'ENGINEER',
    },
    {
      id: 2,
      role: 'ADMIN',
    },
    {
      id: 3,
      role: 'ENGINEER',
    },
    {
      id: 4,
      role: 'ADMIN',
    },
    {
      id: 5,
      role: 'ENGINEER',
    },
  ];

  // findAll
  findAll(role?: 'ENGINEER' | 'ADMIN') {
    const rolesArray = this.users.filter((user) => user.role === role);

    if (!rolesArray.length)
      return new NotFoundException('No users found with this role');

    return rolesArray;
  }

  // findOne
  findOne(id: number) {
    const users = this.users.find((user) => user.id === id);

    if (!users) return new NotFoundException('No user found');

    return users;
  }

  // createOne
  createOne(user: CreateUserDto) {
    const newUser = {
      id: this.users.length,
      ...user,
    };
    this.users.push(newUser);

    return newUser;
  }

  // updateOne
  updateOne(id: number, userUpdate: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) return { ...user, ...userUpdate };

    return null;
  }

  // deleteOne
  deleteOne(id: number) {
    const user = this.findOne(id);

    if (!user) return new NotFoundException('No user found');

    this.users = this.users.filter((user) => user.id !== id);

    return id;
  }
}
