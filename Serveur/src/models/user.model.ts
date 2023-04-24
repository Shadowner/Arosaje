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
import { hash } from 'bcrypt';

export interface UserCreate {
  lastname: string;
  firstname: string;
  birthdate: Date;
  address: string;
  city: string;
  country: string;
  email: string;
  phoneNumber: string;
  password: string;
}


@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  lastname!: string;

  @Column()
  firstname!: string;

  @Column()
  @IsDate()
  birthdate!: Date;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email!: string;

  @Column()
  @Length(0, 10)
  phoneNumber!: string;

  @Column()
  password!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  avatar!: string | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
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
  plants!: Plant[];

  @OneToMany(type => Message, message => message.author)
  messages!: Message[];

  @ManyToMany(type => Conversation, conv => conv.participants)
  conversations!: Conversation[];


  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }


  public readonly jwts: string[] = [];

  public publicUserObject() {
    return {
      id: this.id,
      lastname: this.lastname,
      firstname: this.firstname,
      birthdate: this.birthdate,
      address: this.address,
      city: this.city,
      country: this.country,
      avatar: this.avatar,
      roles: this.roles.map(role => role.id),
      plants: this.plants.map(plant => plant.id),
    }
  }

}