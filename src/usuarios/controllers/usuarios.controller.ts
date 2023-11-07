import { Controller, Get, Param } from '@nestjs/common';

import { UsuariosService } from '../services/usuarios.service';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get() //Endpoint para listar todos los usuarios.
  getAll(@Param('vencimiento') vencimiento: number) {
    const tareas = this.usuariosService.findAll();

    return tareas;
  }

  @Get(':id') //Poder realizar filtros por nombre, correo y por rol de usuario.
  getOne(@Param('id') id: number) {
    return this.usuariosService.findOne(id);
  }

  /*
  @Post()
  create(@Body() body: any) {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usuariosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usuariosService.delete(id);
  }
  */
}
