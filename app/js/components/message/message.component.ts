import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
	selector: 'message',
	templateUrl: './app/js/components/message/message.component.html',
	styleUrls: ['./app/js/components/message/message.component.css']
})

export class MessageComponent {
	@Input() message: Message;
}
