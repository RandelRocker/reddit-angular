import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'navigation',
	templateUrl: './app/js/components/navigation/navigation.component.html',
	styleUrls: ['./app/js/components/navigation/navigation.component.css'],
	directives: [ROUTER_DIRECTIVES],
})

export class NavigationComponent {}
