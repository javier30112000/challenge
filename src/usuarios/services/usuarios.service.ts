import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from '../entities/tareas.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuariosRepo.find();
  }

  findOne(id: number) {
    return this.usuariosRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  create(body: any) {
    const nuevoUsuario = this.usuariosRepo.create(body);
    return this.usuariosRepo.save(nuevoUsuario);
  }

  async update(id: number, body: any) {
    const usuario = await this.usuariosRepo.findOne({
      where: {
        id: id,
      },
    });
    this.usuariosRepo.merge(usuario, body);
    usuario.isAdmin = true;
  }

  async delete(id: number) {
    await this.usuariosRepo.delete(id);
    return true;
  }
}
