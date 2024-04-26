import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'predios' })
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', default: ' ' })
  numero_predio: string;

  @Column({ type: 'text', default: ' ' })
  matricula_inmobiliaria: string;

  @Column({ type: 'text', default: ' ' })
  direccion_predio: string;

  @Column({ type: 'text', default: ' ' })
  destino_economico: string;

  @Column({ type: 'text', default: ' ' })
  estrato_predio: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column()
  eliminado: number;
}
