import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Component({
	selector: 'comment',
	templateUrl: './app/js/components/comment/comment.component.html',
	styleUrls: ['./app/js/components/comment/comment.component.css']
})

export class CommentComponent {
	@Input() comment: Comment;
}
