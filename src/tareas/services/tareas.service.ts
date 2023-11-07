import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tarea } from '../entities/tareas.entity';

@Injectable()
export class TareasService {
  constructor(@InjectRepository(Tarea) private tareasRepo: Repository<Tarea>) {}

  findAll() {
    return this.tareasRepo.find();
  }

  findOne(id: number) {
    return this.tareasRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  create(body: any) {
    const nuevaTarea = this.tareasRepo.create(body);
    return this.tareasRepo.save(nuevaTarea);
  }

  async update(id: number, body: any) {
    const tarea = await this.tareasRepo.findOne({
      where: {
        id: id,
      },
    });
    this.tareasRepo.merge(tarea, body);
    tarea.estado = true;
  }

  async delete(id: number) {
    await this.tareasRepo.delete(id);
    return true;
  }
}
