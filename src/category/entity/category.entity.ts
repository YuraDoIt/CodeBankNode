import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank' })
export class CategoryEntity implements CategoryI {
  @PrimaryGeneratedColumn('increment', { name: 'userid' })
  public id: number;

  @Column({ unique: true, type: 'varchar' })
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
