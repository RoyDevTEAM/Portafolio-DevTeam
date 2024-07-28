import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TeamComponent } from './components/team/team.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursoGitComponent } from './components/cursos/curso-git/curso-git.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CoursesComponent,
    ArticlesComponent,
    TeamComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CursoGitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Agregar FormsModule aquí
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
