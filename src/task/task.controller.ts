import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTaskDto.dto';
import { UpdateTaskDto } from './dto/updateTaskDto.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findById(id);
  }

  @Get('')
  findAll() {
    return this.taskService.findAll();
  }

  @Patch('')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateById(id, updateTaskDto);
  }

  @Delete('')
  removeById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.removeById(id);
  }
}
