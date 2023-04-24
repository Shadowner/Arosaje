import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conversation } from './interfaces/models';
import { MessagingService } from './service/conversation';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit{
  conversations: Conversation[] | undefined;

  cols = [
    { field: 'user', header: 'User' },
    { field: 'lastMessage', header: 'Last Message' },
    { field: 'timestamp', header: 'Timestamp' },
  ];

  constructor(private messagingService: MessagingService, private router: Router) { }

  ngOnInit(): void {
    this.conversations = this.messagingService.getConversations();
    console.log(this.conversations)
  }

  goToChat(conversationId: number) {
    this.router.navigate(['/chat', conversationId]);
  }
}
