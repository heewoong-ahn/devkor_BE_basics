import { Module } from '@nestjs/common';
import { PostEntity } from '../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class PostModule {}
