import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.model';
import { Conversation } from './conversation.model';
import { IsDate } from 'class-validator';


@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column()
  @IsDate()
  send_date!: Date;

  @ManyToOne(type => User, user => user.messages)
  @JoinColumn({ name: 'user_id' })
  author!: User;

  @ManyToOne(type => Conversation, conversation => conversation.messages)
  @JoinColumn({ name: 'conversation_id' })
  conversation!: Conversation;
}