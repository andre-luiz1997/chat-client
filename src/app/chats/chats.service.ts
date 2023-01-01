import { CreateChatDto } from './../@types/chat.entity';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Chat } from '../@types/chat.entity';
import { ChatSocket } from '../app.module';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../messages/messages.service';

export interface FindAllChatsResponse {
    chats: Chat[];
}

export interface ChatEvent {
  chat: Chat;
}

@Injectable({
    providedIn: 'root',
})
export class ChatsService {
    public readonly $chats = new BehaviorSubject<Chat[]>([]);
    constructor(
        private socket: ChatSocket,
        private messagesService: MessagesService,
    ) {
        this.initSocket();
    }

    private initSocket() {
        this.socket.connect();
        this.socket.emit(
            environment.EVENTS.FIND_ALL_CHATS_EVENT,
            {},
            (res: FindAllChatsResponse) => {
                this.$chats.next(res.chats);
            },
        );
        this.listenToChats();
    }

    private listenToChats() {
      this.onEvent(environment.EVENTS.CHAT_EVENT).subscribe({
          next: (res: ChatEvent) => {
              this.$chats.next([...this.$chats.getValue(), res.chat]);
          },
      });
  }

    public createChat(name: string) {
        const body: CreateChatDto = {
            name,
            participants: [this.messagesService.user],
        };
        this.socket.emit(
            environment.EVENTS.CREATE_CHAT_EVENT,
            body,
            (res: any) => {},
        );
    }

    private onEvent(event: string) {
        return this.socket.fromEvent<any>(event);
    }
}
