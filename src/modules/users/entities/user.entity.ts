import { Rol } from '@modules/rols/entities/rol.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  JoinColumn,
} from 'typeorm';

/**
 * name: "table-name"
 */
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated()
  personId: number;

  @Column({ type: 'text', default: ' ', unique: true })
  email: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @OneToOne((type) => Rol)
  @JoinColumn()
  rol: Rol;
}
