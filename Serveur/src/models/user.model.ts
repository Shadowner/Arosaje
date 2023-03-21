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

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  last_name!: string;

  @Column()
  first_name!: string;

  @Column()
  @IsDate()
  birth_date!: Date;

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
  phone_number!: string;

  @Column()
  password!: string;

  @Column()
  avatar!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  @IsDate()
  last_connection!: Date;

  @ManyToMany(type => Role, { onDelete: 'CASCADE' })
  @JoinTable({
    name: "role_user",
    joinColumns: [{ name: "user_id" }],
    inverseJoinColumns: [{ name: "role_id" }]
  })
  roles!: Role[];

  @OneToMany(() => Plant, plant => plant.user)
  plantes!: Plant[];

  @OneToMany(type => Message, message => message.author)
  messages!: Message[];

  @ManyToMany(type => Conversation)
  conversations!: Conversation[];

  @BeforeInsert()
  async hashPassword() {
    this.password = createHash('sha256').update(this.password).digest('hex');
  }
  
}