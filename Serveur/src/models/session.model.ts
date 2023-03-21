import { IsDate } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Guard } from './guard.model';
import { File } from './file.model';

@Entity()
export class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsDate()
  date!: Date;

  @Column()
  comment!: string;

  @ManyToOne(() => Guard, guard => guard.sessions)
  @JoinColumn({ name: 'guard_id' })
  guard!: Guard;

  @ManyToMany(type => File, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "session_picture",
    joinColumns: [{ name: "session_id" }],
    inverseJoinColumns: [{ name: "file_id" }]
  })
  files!: File[];

}
