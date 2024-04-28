import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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
        this.taskService.getAllTasks()
    }

    @Post()
    async createTask(@Body() data: Task) {
        this.taskService.createtask(data)
    }

    @Get(":id")
    async getTaskById(@Param('id') id: string) {
        this.taskService.getTaskByID(Number(id))
    }

    @Delete(":id")
    async deleteTaskById(@Param('id') id: string) {
        this.taskService.deleteTask(Number(id))
    }

    @Put(":id")
    async updateTask(@Param('id') id: string, @Body() data: Task) {
        this.taskService.updateTask(Number(id), data)
    }
}