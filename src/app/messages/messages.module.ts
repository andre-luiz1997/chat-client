import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { SendMessageInputComponent } from './send-message-input/send-message-input.component';



@NgModule({
    declarations: [MessagesComponent, SendMessageInputComponent],
    imports: [CommonModule, MessagesRoutingModule, ReactiveFormsModule],
    providers: []
})
export class MessagesModule {}
