import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'javi',
      password: 'postgres',
      database: 'puul',
      entities: ['**/src/entity/*{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TareasModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
