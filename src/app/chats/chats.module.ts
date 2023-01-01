import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatModalComponent } from './chat-modal/chat-modal.component';

@NgModule({
    declarations: [ChatsComponent, ChatModalComponent],
    imports: [
        CommonModule,
        ChatsRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatIconModule,
    ],
})
export class ChatsModule {}
