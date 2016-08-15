import { Component, Input } from '@angular/core';
import { PaginationData } from '../../models/pagination.model';
import { RedditService } from '../../services/reddit.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
	selector: 'pagination',
	templateUrl: './app/js/components/pagination/pagination.component.html',
	styleUrls: ['./app/js/components/pagination/pagination.component.css'],
	directives: [ROUTER_DIRECTIVES],
})

export class PaginationComponent {
	@Input() paginationData: PaginationData;

	constructor(private router: Router, private redditService: RedditService) {}
	
	next(): void {
		if (!this.paginationData.after) return;

		let count = +this.paginationData.count || 0;

		count = count % 5 == 1 ? count - 1 : count + 25;
		
		this.router.navigate([this.redditService.currentUrl, {after: this.paginationData.after, count}]);
	}

	back(): void {
		if (!this.paginationData.before) return;

		let count = +this.paginationData.count || 0;

		count = count % 5 == 1 ? count - 25 : count + 1;

		this.router.navigate([this.redditService.currentUrl, {before: this.paginationData.before, count}]);
	}
}
