import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomSocketService {
  private socket;
  constructor() { }

  public initSocket(): void {
    this.socket = io(SERVER_URL);
  }

  public onMessage(): Observable<any> {
    const observable = new Observable(observer => {
      this.socket.on('message', (data: string) => observer.next(data));
    });

    return observable;
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }
}
