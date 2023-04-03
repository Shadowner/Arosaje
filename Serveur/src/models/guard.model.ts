import { IsDate } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Plant } from './plant.model';
import { User } from './user.model';
import { Session } from './session.model';

@Entity()
export class Guard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsDate()
  startDate!: Date;

  @Column()
  @IsDate()
  endDate!: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  guardianUser!: User;

  @ManyToOne(() => Plant)
  @JoinColumn({ name: 'plantId' })
  guardedPlant!: Plant;

  @OneToMany(() => Session, session => session.guard, { onDelete: 'CASCADE' })
  sessions!: Session[];
}
