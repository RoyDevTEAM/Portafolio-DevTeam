import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { CursoGitComponent } from './components/cursos/curso-git/curso-git.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'curso-git', component: CursoGitComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirigir a la página de inicio para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
