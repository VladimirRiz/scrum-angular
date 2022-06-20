import { Component, Input, OnInit } from '@angular/core';
import { Iteration } from 'src/app/shared/iteration.model';

@Component({
	selector: 'app-iteration',
	templateUrl: './iteration.component.html',
	styleUrls: ['./iteration.component.scss'],
})
export class IterationComponent implements OnInit {
	@Input() iteration!: Iteration;

	constructor() {}

	ngOnInit(): void {}
}
