// To have a conexion, this module have to import
// from prisma module
import { Module } from '@nestjs/common'
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [PrismaModule],
})
export class TaskModule { }