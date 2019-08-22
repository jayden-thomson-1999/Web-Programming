import { TestBed } from '@angular/core/testing';

import { ChatRoomSocketService } from './chat-room-socket.service';

describe('ChatRoomSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatRoomSocketService = TestBed.get(ChatRoomSocketService);
    expect(service).toBeTruthy();
  });
});
