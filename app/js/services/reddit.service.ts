import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Message } from '../models/message.model';

@Injectable()
export class RedditService {

	baseUrl = 'https://www.reddit.com';
	
	currentUrl: string;

	constructor(private http: Http) { }

	getMessages(params: any): Promise<any> {
		let url = this.getMessageUrl(params);
		
		return this.http
			.get(url)
			.toPromise()
			.then(response => this.parseMessages(response))
			.catch(this.handleError);
	}

	getMessageUrl(params: any): string {
		params.category = params.category || 'hot';

		this.currentUrl = params['id'] ? `/r/${params['id']}` : `/${params.category}`;
		let after = params['after'] ? `&after=${params['after']}` : '';
		let before = params['before'] ? `&before=${params['before']}` : '';
		let count = params['count'] ? `count=${params['count']}` : '';

		return `${this.baseUrl}${this.currentUrl}.json?${count}${after}${before}`;
	}

	parseMessages(response: any): any {
		let data = response.json().data;
		data.children = data.children
			.map((message) => {
				message = this.convertTime(message);
				message = this.replaceThumbnailProtocol(message);

				return message;
			});
		
		return data;
	}
	
	savePaginationData(response: any): void {
		
	}

	convertTime(message): Message {
		var timeStamp = message.data.created_utc,
			redditDate;

		if (!timeStamp || typeof(timeStamp) !== 'number') {
			message.data.created_utc = '-';

			return message;
		}

		redditDate = new Date(timeStamp * 1000);

		message.data.created_utc = redditDate.getFullYear() + '/' + this.addZero(redditDate.getMonth()) + '/' + this.addZero(redditDate.getDate()) + ' ' + this.addZero(redditDate.getHours()) + ':' + this.addZero(redditDate.getMinutes());

		return message;
	}

	addZero(i: number): string | number {
		return i < 10 ? "0" + i : i;
	}

	replaceThumbnailProtocol(message: any): Message {
		var regExp = new RegExp('^http:\/\/|^https:\/\/');

		if (!regExp.test(message.data.thumbnail)) {
			message.data.thumbnail = '';

			return message;
		}

		message.data.thumbnail = message.data.thumbnail.replace(regExp, location.protocol + "//");

		return message;
	}

	handleError(): Promise<any>  {
		let error = `Can't make request to ${this.baseUrl}`;

		console.error(error);

		return Promise.reject(error);
	}
}
