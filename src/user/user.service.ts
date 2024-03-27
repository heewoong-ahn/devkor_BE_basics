import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: string[] = ['KYG', 'LJW', 'KHS'];

  getUsers(): string[] {
    return this.users;
  }
}
