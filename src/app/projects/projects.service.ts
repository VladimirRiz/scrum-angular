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

  removeProject = (index:number) => {
    this.projects.splice(index,1)
    console.log(this.projects, index)
    this.projectsChanged.emit(this.projects.slice())
  }
}
