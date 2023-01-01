import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatsService } from '../chats.service';

@Component({
    selector: 'chat-modal',
    templateUrl: './chat-modal.component.html',
    styleUrls: ['./chat-modal.component.scss'],
})
export class ChatModalComponent implements OnInit {
    formChat!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private chatService: ChatsService,
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.formChat = this.formBuilder.group({
            name: ['', [Validators.required]],
        });
    }

    createChat() {
        if (this.formChat.valid) {
            const name = this.formChat.get('name')?.value;
            if (name) {
                this.chatService.createChat(name);
            }
        }
    }
}
