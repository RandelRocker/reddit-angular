import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
	selector: 'header',
	templateUrl: './app/js/components/header/header.component.html',
	styleUrls: ['./app/js/components/header/header.component.css'],
	directives: [[NavigationComponent]]
})
export class HeaderComponent {}
