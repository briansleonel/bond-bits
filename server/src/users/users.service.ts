import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);

      return await createdUser.save();
    } catch (error) {
      if (error.code === 11000) {
        // Error de duplicado en MongoDB
        throw new ConflictException('Email already exists');
      }
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const bit = await this.userModel.findById(id);

      if (!bit) throw new NotFoundException(`User not found`);

      return bit;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...restData } = updateUserDto;
    try {
      const updatedBit = await this.userModel.findByIdAndUpdate(id, restData, {
        new: true,
        runValidators: true,
      });

      if (!updatedBit) throw new NotFoundException(`User could not be updated`);

      return updatedBit;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      }
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id);

      if (!result) throw new NotFoundException(`User could not be deleted`);

      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
