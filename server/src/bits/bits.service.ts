import { Injectable } from '@nestjs/common';
import { CreateBitDto } from './dto/create-bit.dto';
import { UpdateBitDto } from './dto/update-bit.dto';

@Injectable()
export class BitsService {
  create(createBitDto: CreateBitDto) {
    return 'This action adds a new bit';
  }

  findAll() {
    return `This action returns all bits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bit`;
  }

  update(id: number, updateBitDto: UpdateBitDto) {
    return `This action updates a #${id} bit`;
  }

  remove(id: number) {
    return `This action removes a #${id} bit`;
  }
}
