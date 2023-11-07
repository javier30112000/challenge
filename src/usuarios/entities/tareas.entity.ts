import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tarea } from 'src/tareas/entities/tareas.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correoElectronico: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Tarea, (tarea) => tarea.usuarios)
  tareas: Tarea[];
}
