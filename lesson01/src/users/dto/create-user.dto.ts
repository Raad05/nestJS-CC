import { IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsEnum(['ENGINEER', 'ADMIN'], {
    message: 'Invalid role',
  })
  role: 'ENGINEER' | 'ADMIN';
}
