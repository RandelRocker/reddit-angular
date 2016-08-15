import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { RedditService } from '../../services/reddit.service';
import { Message } from '../../models/message.model';
import { PaginationData } from '../../models/pagination.model';
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'messages',
	templateUrl: './app/js/components/messages/messages.component.html',
	styleUrls: ['./app/js/components/messages/messages.component.css'],
	directives: [[MessageComponent], [PaginationComponent]]
})

export class MessagesComponent implements OnInit, OnDestroy {
	messages: Message[];
	sub: Subscription;
	paginationData: PaginationData;

	constructor(private redditService: RedditService, private route: ActivatedRoute) {};

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.redditService.getMessages(params)
				.then((data) => {
					this.messages = data.children;
					this.paginationData = {
						after: data.after,
						before: data.before,
						count: params['count']
					};
				});
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
