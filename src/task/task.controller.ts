import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client'

// for example:
// when you make an equiry to GET localhost:3000
// you execute the GET method from down there

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    // these are the methods
    @Get()
    async getAllTasks() {
        return this.taskService.getAllTasks()
    }

    @Post()
    async createTask(@Body() data: Task) {
        return this.taskService.createtask(data)
    }

    @Get(":id")
    async getTaskById(@Param('id') id: string) {
        const task = await this.taskService.getTaskByID(Number(id))
        if (!task) throw new NotFoundException("taks doesnt exist")
        return task
    }

    @Delete(":id")
    async deleteTaskById(@Param('id') id: string) {
        try {
            return await this.taskService.deleteTask(Number(id))
        } catch (error) {
            throw new NotFoundException("Task does not exist")
        }
    }

    @Put(":id")
    async updateTask(@Param('id') id: string, @Body() data: Task) {
        try {
            return await this.taskService.updateTask(Number(id), data)
        } catch (error) {
            throw new NotFoundException("Task does not exist")
        }
    }
}