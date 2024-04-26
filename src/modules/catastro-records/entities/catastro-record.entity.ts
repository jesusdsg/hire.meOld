import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'registros_catastro' })
export class CatastroRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_municipio: number;

  @Column({ type: 'int' })
  id_usuario: number;

  @Column({ type: 'int' })
  id_predio: number;

  @Column({ type: 'int' })
  id_tarifa: number;

  @Column({ type: 'bigint' })
  tipo_registro: number;

  @Column({ type: 'text', default: ' ' })
  numero_orden: string;

  @Column({ type: 'text', default: ' ' })
  total_registros: string;

  @Column({ type: 'text', default: ' ' })
  area_terreno: string;

  @Column({ type: 'text', default: ' ' })
  area_construida: string;

  @Column({ type: 'int' })
  avaluo: number;

  @Column({ type: 'text', default: ' ' })
  honorarios: string;

  @Column({ type: 'text', default: ' ' })
  intereses: string;

  @Column({ type: 'text', default: ' ' })
  descuento: string;

  @Column({ type: 'date' })
  vigencia: Date;

  @Column({ type: 'text', default: ' ' })
  numero_predial_anterior: string;

  @Column({ type: 'bigint' })
  pagado: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column()
  eliminado: number;
}
