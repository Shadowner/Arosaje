import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from './user.model';
import { Message } from './message.model';

@Entity()
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(type => Message, message => message.conversation)
  messages!: Message[];

  @ManyToMany(type => User, (user) => user.conversations)
  @JoinTable({
    name: "conversation_participant",
    joinColumns: [{ name: "conversationId" }],
    inverseJoinColumns: [{ name: "userId" }]
  })
  participants!: User[];

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      participantsId: this.participants.map(participant => participant.id),
    }
  }
}
