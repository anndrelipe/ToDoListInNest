import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './createTaskDto.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
