import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conversation } from './interfaces/models';
import { MessagingService } from './service/conversation';
import { User, STATUSES, Message } from "./models";
import {USERS} from "./data"
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css'],
  providers:[]
})
export class MessagerieComponent implements OnInit{
  conversations: Conversation[] | undefined;
  statuses = STATUSES;
  activeUser:any;
  users = USERS;
  expandStatuses = false;
  expanded = false;
  inputMsg:string = "";
  messageReceivedFrom = {
    img: 'https://cdn.livechat-files.com/api/file/lc/img/12385611/371bd45053f1a25d780d4908bde6b6ef',
    name: 'Media bot'
  }
  cols = [
    { field: 'user', header: 'User' },
    { field: 'lastMessage', header: 'Last Message' },
    { field: 'timestamp', header: 'Timestamp' },
  ];

  constructor(private messagingService: MessagingService, private router: Router) { }

  ngOnInit(): void {
    this.setUserActive(USERS[0])
    this.conversations = this.messagingService.getConversations();
    console.log(this.conversations)
  }

  goToChat(conversationId: number) {
    this.router.navigate(['/chat', conversationId]);
  }
  setUserActive(user:User) {
    this.activeUser = user;
    this.connectToWS();
  }
  connectToWS() {
    if (this.activeUser.ws && this.activeUser.ws.readyState !== 1) {
      this.activeUser.ws = null;
      this.activeUser.status = STATUSES.OFFLINE;
    }
    if (this.activeUser.ws) {
      return;
    }
    const ws = new WebSocket('wss://compute.hotelway.ai:4443/?token=TESTTOKEN');
    this.activeUser.ws = ws;
    ws.onopen = (event) => this.onWSEvent(event, STATUSES.ONLINE);
    ws.onclose = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
    ws.onerror = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
    ws.onmessage = (result: any) => {
      const data = JSON.parse(result?.data || {});
      const userFound = this.users.find(u => u.id === data.id);
      console.log(userFound)
      console.log(data,'dara')
      if (userFound) {
        console.log(userFound.messages.slice(-1),data)
        userFound.messages.push(
           new Message('replies', data?.message ? data.message : "erreur message")
        )
      }
    };
  }

  onWSEvent(event: Event, status: STATUSES) {
    this.users.forEach(u => u.ws === event.target ? u.status = status : null)
  }
  addNewMessage() {
    console.log(this.inputMsg)
    const val = this.inputMsg.trim()
    if (val.length) {
      this.activeUser.messages.push({type: 'sent', message: val})
      console.log(this.activeUser)
      this.activeUser.ws.send(
        JSON.stringify({id: this.activeUser.id, message: val})
        );
    }
    this.inputMsg = "";
  }

}
