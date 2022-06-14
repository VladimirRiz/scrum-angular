import { EventEmitter } from "@angular/core";
import { Project } from "../shared/project.model";

export class ProjectsService {
  projectsChanged = new EventEmitter<Project[]>()

  private projects : Project[] = [{name: 'Awesome Project'}]

  getProject = () => this.projects.slice()

  addProject = (project: Project) => {
    this.projects.push(project)
    this.projectsChanged.emit(this.projects.slice())
  }
}
