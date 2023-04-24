import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.model';
import { File } from './file.model';
import { PlantType } from './plantType.model';

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

  @ManyToOne(() => User, user => user.plants, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User;

  @ManyToMany(type => File, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "plant_picture",
    joinColumns: [{ name: "plantId" }],
    inverseJoinColumns: [{ name: "fileId" }]
  })
  files!: File[];

  @ManyToOne(() => PlantType)
  @JoinColumn({ name: 'plantTypeId' })
  plantType!: PlantType;

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      size: this.size,
      userId: this.user.id,
      plantType: this.plantType.id,
    };
  }
}
