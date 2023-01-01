import {
    Component,
    EventEmitter,
    HostListener,
    OnInit,
    Output,
    ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'send-message-input',
    templateUrl: './send-message-input.component.html',
    styleUrls: ['./send-message-input.component.scss'],
})
export class SendMessageInputComponent implements OnInit {
    messageForm!: FormGroup;
    @Output('onMessage') onMessage = new EventEmitter<string>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required],
        });
    }

    @HostListener('keydown', ['$event'])
    keydownHandler(event: KeyboardEvent) {
      if(event.keyCode == 13) {
        event.preventDefault();
        const message = this.messageForm.get('message')?.value;
        if (message) {
            this.onMessage.emit(message);
            this.messageForm.reset();
        }
      }
    }
}
