import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  readonly description: string;

  @IsDateString()
  @IsNotEmpty()
  readonly deadline: Date;
}
