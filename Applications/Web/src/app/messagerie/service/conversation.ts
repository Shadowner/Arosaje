import { Injectable } from '@angular/core';
import { Conversation, Message } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  conversations: Conversation[] = [
    {
      id: 1,
      user: 'Alice',
      messages: [
        { id: 1, sender: 'Alice', text: 'Hello Bob!', timestamp: new Date() },
        { id: 2, sender: 'Bob', text: 'Hi Alice!', timestamp: new Date() },
      ]
    },
    {
      id: 2,
      user: 'Charlie',
      messages: [
        { id: 1, sender: 'Charlie', text: 'Hi Alice!', timestamp: new Date() },
        { id: 2, sender: 'Alice', text: 'Hello Charlie!', timestamp: new Date() },
      ]
    }
  ];

  getConversations(): Conversation[] {
    return this.conversations;
  }

  getConversation(id: number): Conversation {
    // @ts-ignore
    return this.conversations.find(c => c.id === id);
  }

  addMessage(conversationId: number, sender: string, text: string) {
    const conversation = this.getConversation(conversationId);
    const id = conversation.messages.length + 1;
    const message: Message = { id, sender, text, timestamp: new Date() };
    conversation.messages.push(message);
  }
}
