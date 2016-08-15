import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MessagesComponent } from '../messages/messages.component';
import { RedditService } from '../../services/reddit.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'my-app',
	templateUrl: './app/js/components/app/app.component.html',
	styleUrls: ['./app/js/components/app/app.component.css'],
	directives: [[HeaderComponent], [MessagesComponent], ROUTER_DIRECTIVES],
	providers: [RedditService]
})

export class AppComponent {}
