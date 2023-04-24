import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import {
  Length,
  IsEmail,
  IsDate,
} from "class-validator"
import { createHash } from 'crypto';
import { Role } from './role.model';
import { Plant } from './plant.model';
import { Message } from './message.model';
import { Conversation } from './conversation.model';
import { Notification } from './notification.model';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  lastName!: string;

  @Column()
  firstName!: string;

  @Column()
  @IsDate()
  birthDate!: Date;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @Length(0, 10)
  phoneNumber!: string;

  @Column()
  password!: string;

  @Column()
  avatar!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  @IsDate()
  lastConnection!: Date;

  @ManyToMany(type => Role, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "role_user",
    joinColumns: [{ name: "userId" }],
    inverseJoinColumns: [{ name: "roleId" }]
  })
  roles!: Role[];

  @OneToMany(() => Plant, plant => plant.user)
  plantes!: Plant[];

  @OneToMany(type => Message, message => message.author)
  messages!: Message[];

  @ManyToMany(type => Conversation)
  conversations!: Conversation[];

  @OneToMany(() => Notification, notification => notification.user)
  notifications!: Notification[];

  @BeforeInsert()
  async hashPassword() {
    this.password = createHash('sha256').update(this.password).digest('hex');
  }
}