import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.model';
import { File } from './file.model';
import { PlantType } from './plant-type.model';

@Entity()
export class Plant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;
  
  @Column()
  size!: number;

  @ManyToOne(() => User, user => user.plantes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToMany(type => File, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "plant_picture",
    joinColumns: [{ name: "plant_id" }],
    inverseJoinColumns: [{ name: "file_id" }]
  })
  files!: File[];

  @ManyToOne(() => PlantType)
  @JoinColumn({ name: 'plant_type_id' })
  plant_type!: PlantType;
}
