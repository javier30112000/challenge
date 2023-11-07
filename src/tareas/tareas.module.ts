import { Module } from '@nestjs/common';
import { TareasService } from './services/tareas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasController } from './controllers/tareas.controller';
import { Tarea } from './entities/tareas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea])],
  providers: [TareasService],
  controllers: [TareasController],
})
export class TareasModule {}
