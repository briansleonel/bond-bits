import { Module } from '@nestjs/common';
import { BitsModule } from './bits/bits.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BitsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
