import { MessagesComponent } from './components/messages/messages.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes = [
	{ path: '', redirectTo: 'hot', pathMatch: 'full'},
	{ path: ':category', component: MessagesComponent },
	{ path: 'comments/:commentId', component: CommentsComponent },
	{ path: 'r/:id', component: MessagesComponent },
];
