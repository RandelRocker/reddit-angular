import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { Comment } from '../../models/comment.model';
import { PaginationData } from '../../models/pagination.model';
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'comments',
	templateUrl: './app/js/components/comments/comments.component.html',
	styleUrls: ['./app/js/components/comments/comments.component.css'],
	directives: [[CommentComponent], [PaginationComponent]]
})

export class CommentsComponent {
	comments: Comment[];
	sub: Subscription;
	paginationData: PaginationData;
}
