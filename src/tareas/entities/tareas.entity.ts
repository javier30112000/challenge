import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/tareas.entity';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  estimacionHoras: string;

  @Column()
  vencimiento: string;

  @Column()
  costoMonetario: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.tareas)
  usuarios: Usuario[];

  @Column({ default: true })
  estado: boolean;
}
