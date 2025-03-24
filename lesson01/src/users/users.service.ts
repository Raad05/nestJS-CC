import { Injectable } from '@nestjs/common';

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
    if (role) return this.users.filter((user) => user.role === role);

    return this.users;
  }

  // findOne
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  // createOne
  createOne(user: { role: 'ENGINEER' | 'ADMIN' }) {
    const newUser = {
      id: this.users.length,
      ...user,
    };
    this.users.push(newUser);

    return newUser;
  }

  // updateOne
  updateOne(id: number, userUpdate: { role?: 'ENGINEER' | 'ADMIN' }) {
    const user = this.findOne(id);
    if (user) return { ...user, ...userUpdate };

    return null;
  }

  // deleteOne
  deleteOne(id: number) {
    const user = this.findOne(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return id;
  }
}
