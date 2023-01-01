import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateMessageDto, Message } from '../@types/message.entity';
import { ChatSocket } from '../app.module';

export interface FindAllMessagesResponse {
    messages: Message[];
}

export interface MessageEvent {
    message: Message;
}

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    private user = 'andre';
    public readonly $messages = new BehaviorSubject<Message[]>([]);

    constructor(private socket: ChatSocket) {
        this.initSocket();
    }

    private initSocket() {
        this.socket.connect();
        this.socket.emit(
            environment.EVENTS.FIND_ALL_MESSAGES_EVENT,
            {},
            (res: FindAllMessagesResponse) => {
                this.$messages.next(res.messages);
            },
        );
        this.listenToMessages();
    }

    private listenToMessages() {
        this.onEvent(environment.EVENTS.MESSAGE_EVENT).subscribe({
            next: (res: MessageEvent) => {
                this.$messages.next([...this.$messages.getValue(), res.message]);
            },
        });
    }

    public sendMessage(text: string) {
        const body: CreateMessageDto = {
            text,
            user: this.user,
        };
        this.socket.emit(
            environment.EVENTS.CREATE_MESSAGE_EVENT,
            body,
            (res: any) => {
            },
        );
    }

    private onEvent(event: string) {
        return this.socket.fromEvent<any>(event);
    }
}
