import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { BacklogComponent } from './backlog/backlog.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { IterationsComponent } from './iterations/iterations.component';
import { IterationComponent } from './iterations/iteration/iteration.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProjectsComponent,
		BacklogComponent,
		CardComponent,
		IterationsComponent,
		IterationComponent,
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
