import { PartialType } from '@nestjs/mapped-types';
import { CreateBitDto } from './create-bit.dto';

export class UpdateBitDto extends PartialType(CreateBitDto) {}
