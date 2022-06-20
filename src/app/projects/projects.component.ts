import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectsService } from './projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
	providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
	projects: Project[] = [];
	isDisabled: boolean = true;
	projectName!: string;
	taskName!: string;
	// @ViewChild('projectInput', {static:false}) projectInputRef!: ElementRef;

	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projects = this.projectsService.getProject();
		this.projectsService.projectsChanged.subscribe((projects: Project[]) => {
			this.projects = projects;
		});
	}

	onInputChange = () => {
		this.isDisabled = false;
	};

	onAddProject = () => {
		const name = this.projectName;
		const project = new Project(name, []);
		this.projectsService.addProject(project);
		this.projectName = '';
	};

	onRemoveProject = (index: number) => {
		this.projectsService.removeProject(index);
	};

	onAddIteration = (index: number) => {
		const task = this.taskName;
		this.projectsService.addTask(task, index);
	};
}
