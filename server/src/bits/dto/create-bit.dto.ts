import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateBitDto {
  @IsString()
  @MinLength(10)
  bit: string;

  @IsBoolean()
  @IsOptional()
  private: boolean;
}
