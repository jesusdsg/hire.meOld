import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', default: ' ' })
  fullName: string;

  @Column({ type: 'text', default: ' ' })
  documentType: number;

  @Column({ type: 'text', default: ' ' })
  document: string;

  @Column({ type: 'text', default: ' ' })
  maritalStatus: string;

  @Column({ type: 'text', default: ' ' })
  address: string;

  @Column({ type: 'text', default: ' ' })
  phone: string;

  @Column({ type: 'text', default: ' ' })
  gender: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('boolean', { default: false })
  bloqued: boolean;
}
