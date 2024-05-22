import { Module } from '@nestjs/common';
import { BitsService } from './bits.service';
import { BitsController } from './bits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bit, BitSchema } from './schemas/bit.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bit.name, schema: BitSchema }])],
  controllers: [BitsController],
  providers: [BitsService],
})
export class BitsModule {}
