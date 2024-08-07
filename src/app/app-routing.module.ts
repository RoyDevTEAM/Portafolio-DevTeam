import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { CursoGitComponent } from './components/cursos/curso-git/curso-git.component';
import { CursosContentComponent } from './components/cursos-content/cursos-content.component';
import { NoticiasContentComponent } from './components/noticias-content/noticias-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'curso-git', component: CursoGitComponent },
  { path: 'courses/:id', component: CursosContentComponent }, // Ruta para cursos con ID
  { path: 'noticias/:id', component: NoticiasContentComponent }, // Ruta para noticias con ID

  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirigir a la página de inicio para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
