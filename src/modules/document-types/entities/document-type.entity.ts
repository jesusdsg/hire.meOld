import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'document-types' })
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { default: ' ', unique: true })
  name: string;

  @Column('text', { default: ' ', unique: true })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
