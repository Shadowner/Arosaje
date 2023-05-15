import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ManyToMany, JoinTable, AfterLoad, AfterInsert, AfterUpdate } from 'typeorm';
import { User } from './user.model';
import { File } from './file.model';
import { PlantType } from './plantType.model';
import { Guard } from './guard.model';

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

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 8,
    nullable: true,
  })
  longitude!: number;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 8,
    nullable: true,
  })
  latitude!: number;

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

  @ManyToMany(type => Guard, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "plant_guard",
    joinColumns: [{ name: "plantId" }],
    inverseJoinColumns: [{ name: "guardId" }]
  })
  guards!: Guard[];

  @Column()
  plantType!: string;

  public toObject(withUserId: boolean = false) {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      size: this.size,
      userId: withUserId ? this.user.id : undefined,
      plantType: this.plantType,
    };
  }

  @AfterLoad()
  @AfterInsert()
  @AfterUpdate()
  async nullChecks() {
    if (!this.files) {
      this.files = [];
    }
    if (!this.guards) {
      this.guards = [];
    }
  }
}
