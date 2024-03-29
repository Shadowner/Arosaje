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
  sendDate!: Date;

  @ManyToOne(type => User, user => user.messages)
  @JoinColumn({ name: 'userId' })
  author!: User;

  @ManyToOne(type => Conversation, conversation => conversation.messages)
  @JoinColumn({ name: 'conversationId' })
  conversation!: Conversation;
}