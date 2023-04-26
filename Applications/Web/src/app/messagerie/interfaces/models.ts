export interface Conversation {
  id: number;
  user: string;
  messages: Message[];
}

export interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: Date;
}
