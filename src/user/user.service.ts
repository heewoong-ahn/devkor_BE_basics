import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: string[] = ['KYG', 'LJW', 'KHS'];

  getUsers(): string[] {
    return this.users;
  }

  async addUser(name: string): Promise<string[]> {
    if (!this.users.includes(name)) {
      await this.users.push(name);
    }
    return this.users;
  }

  async deleteUser(name: string): Promise<string[]> {
    if (this.users.includes(name)) {
      await this.users.splice(this.users.indexOf(name), 1);
      // 1이 의미하는 것은 1개를 지운다.
    }
    return this.users;
  }

  getUserName(index: number): string {
    return this.users[index];
  }
}
