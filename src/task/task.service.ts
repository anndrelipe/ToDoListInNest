import { Injectable, NotFoundException } from '@nestjs/common';
import type { Task } from './model/task.model';
import { CreateTaskDto } from './dto/createTaskDto.dto';
import { UpdateTaskDto } from './dto/updateTaskDto.dto';

@Injectable()
export class TaskService {
  private taskData: Task[] = [];
  private currentId: number = 0;

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.currentId++,
      startAt: new Date(),
      ...createTaskDto,
      deadline: new Date(createTaskDto.deadline),
    };
    this.taskData.push(task);
    return task;
  }

  findById(id: number): Task {
    const foundTask = this.taskData.find((t) => t.id === id);
    if (!foundTask) {
      throw new NotFoundException('No tasks were found with the id: ' + id);
    }
    return foundTask;
  }

  findAll(): Task[] {
    return [...this.taskData];
  }

  updateById(id: number, updateTaskDto: UpdateTaskDto): Task {
    const foundTaskIndex = this.taskData.findIndex((t) => t.id === id);
    if (foundTaskIndex < 0) {
      throw new NotFoundException('No tasks were found with the id: ' + id);
    }
    this.taskData[foundTaskIndex] = {
      ...this.taskData[foundTaskIndex],
      ...updateTaskDto,
      ...(updateTaskDto.deadline && {
        deadline: new Date(updateTaskDto.deadline),
      }),
    };
    return this.taskData[foundTaskIndex];
  }

  removeById(id: number): void {
    const foundTaskIndex = this.taskData.findIndex((t) => t.id === id);
    if (foundTaskIndex < 0) {
      throw new NotFoundException('No tasks were found with the id: ' + id);
    }
    this.taskData.splice(foundTaskIndex, 1);
  }
}
