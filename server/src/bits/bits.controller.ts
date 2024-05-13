import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BitsService } from './bits.service';
import { CreateBitDto } from './dto/create-bit.dto';
import { UpdateBitDto } from './dto/update-bit.dto';

@Controller('bits')
export class BitsController {
  constructor(private readonly bitsService: BitsService) {}

  @Post()
  create(@Body() createBitDto: CreateBitDto) {
    return this.bitsService.create(createBitDto);
  }

  @Get()
  findAll() {
    return this.bitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBitDto: UpdateBitDto) {
    return this.bitsService.update(+id, updateBitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitsService.remove(+id);
  }
}
