import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { TareasService } from '../services/tareas.service';

@Controller('api/tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}

  @Get()
  getAll(
    @Param('recientes') recientes: boolean,
    @Param('vencimiento') vencimiento: boolean,
    @Param('nombreTarea') nombreTarea: string,
    @Param('nombreUsuario') nombreUsuario: string,
    @Param('correoElectronico') correoElectronico: string,
  ) {
    const tareas = this.tareasService.findAll();

    return tareas;
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.tareasService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.tareasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.tareasService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tareasService.delete(id);
  }
}
