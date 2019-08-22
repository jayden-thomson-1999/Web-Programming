import { Component, OnInit } from '@angular/core';
import { ChatRoomSocketService } from '../services/chat-room-socket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  private messages: string[] = [];
  private messageIn: string;
  private ioConnection: any;

  constructor(private socketService: ChatRoomSocketService) { }

  ngOnInit() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: string) => {
        // add new message to the messages array
        this.messages.push(message);
      });
  }

  private chat() {
    if (this.messageIn) {
      // check there is a message
      this.socketService.send(this.messageIn);
      this.messageIn = null;
    } else {
      console.log('no message');
    }
  }
}
