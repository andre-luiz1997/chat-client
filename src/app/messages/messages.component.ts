import { Component, OnInit } from '@angular/core';
import { Message } from '../@types/message.entity';
import { MessagesService } from './messages.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    messages: Message[] = [];

    constructor(private messagesService: MessagesService) {}

    ngOnInit(): void {
        this.messagesService.$messages.subscribe({
            next: (messages) => {
                this.messages = messages;
            },
        });
    }

    onMessage(message: string) {
        this.messagesService.sendMessage(message);
    }
}
