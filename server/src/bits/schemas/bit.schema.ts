import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BitDocument = HydratedDocument<Bit>;

@Schema({ timestamps: true })
export class Bit {
  @Prop({ required: true })
  bit: string;

  @Prop({ required: true, default: false })
  private: boolean;
}

export const BitSchema = SchemaFactory.createForClass(Bit);
