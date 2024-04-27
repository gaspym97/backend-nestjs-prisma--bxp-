// this module defines the conexion with the database
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client'

@Injectable()
export class TaskService {
    // with this you can make enquiries
    constructor(private prisma: PrismaService) { }

    async getAllTasks(): Promise<Task[]> {
        return this.prisma.task.findMany();
    }

}