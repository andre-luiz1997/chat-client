import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Chat } from '../@types/chat.entity';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { ChatsService } from './chats.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
    chats: Chat[] = [];
    dialogRef!: MatDialogRef<any>;

    constructor(
        private chatsService: ChatsService,
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.chatsService.$chats.subscribe({
            next: (chats: Chat[]) => {
                console.log({ chats });
                this.chats = chats;
                if (this.dialogRef) {
                    this.dialogRef.close();
                }
            },
        });
    }

    createChat() {
        this.dialogRef = this.dialog.open(ChatModalComponent);
    }
}
