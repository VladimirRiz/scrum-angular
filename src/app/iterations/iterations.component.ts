import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { Project } from '../shared/project.model';

@Component({
	selector: 'app-iterations',
	templateUrl: './iterations.component.html',
	styleUrls: ['./iterations.component.scss'],
})
export class IterationsComponent implements OnInit {
	@Input() project!: Project;
	@Input() index: number = 0;
	taskName!: string;

	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {}

	onAddIteration = (index: number) => {
		this.projectsService.addTask(this.taskName, index);
		this.taskName = '';
	};

	onRemoveProject = (index: number) => {
		this.projectsService.removeProject(index);
	};
}
