import { Module } from '@nestjs/common';
import { BitsModule } from './bits/bits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BitsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
