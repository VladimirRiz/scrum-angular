import { Iteration } from './iteration.model';

export class Project {
	constructor(public name: string, public iterations: Iteration[]) {}
}
