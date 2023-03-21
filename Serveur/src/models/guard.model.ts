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
  start_date!: Date;

  @Column()
  @IsDate()
  end_date!: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  guardian_user!: User;

  @ManyToOne(() => Plant)
  @JoinColumn({ name: 'plant_id' })
  guarded_plant!: Plant;

  @OneToMany(() => Session, session => session.guard, { onDelete: 'CASCADE' })
  sessions!: Session[];
}
