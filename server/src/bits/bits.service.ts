import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBitDto } from './dto/create-bit.dto';
import { UpdateBitDto } from './dto/update-bit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bit } from './schemas/bit.schema';
import { Model } from 'mongoose';

@Injectable()
export class BitsService {
  constructor(@InjectModel(Bit.name) private readonly bitModel: Model<Bit>) {}

  async create(createBitDto: CreateBitDto) {
    try {
      const createdBit = new this.bitModel(createBitDto);

      return await createdBit.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.bitModel.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const bit = await this.bitModel.findById(id);

      if (!bit) throw new NotFoundException(`Bit with ID ${id} not found`);

      return bit;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateBitDto: UpdateBitDto) {
    try {
      const updatedBit = await this.bitModel.findByIdAndUpdate(
        id,
        updateBitDto,
        { new: true, runValidators: true },
      );

      if (!updatedBit) throw new NotFoundException(`Bit could not be updated`);

      return updatedBit;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.bitModel.findByIdAndDelete(id);

      if (!result) throw new NotFoundException(`Bit could not be deleted`);

      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
