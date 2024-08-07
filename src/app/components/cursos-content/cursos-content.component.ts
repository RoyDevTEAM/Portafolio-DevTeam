import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/cursos.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cursos-content',
  templateUrl: './cursos-content.component.html',
  styleUrls: ['./cursos-content.component.css']
})
export class CursosContentComponent implements OnInit {
  curso?: Curso;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cursoId = params.get('id'); // Puede ser 'string' o 'null'
      if (cursoId) { // Verificamos que no sea null
        this.cursosService.getCursoById(cursoId).subscribe(
          data => {
            if (data) {
              this.curso = data;
              // Actualizar el título y metadatos
              this.title.setTitle(`${this.curso.title} - DevTeam UPDS`);
              this.meta.updateTag({ name: 'description', content: `${this.curso.title}: ${this.curso.sections?.[0]?.content || 'Descripción no disponible'}` });
              this.meta.updateTag({ property: 'og:title', content: `${this.curso.title} - Innovación y Tecnología en la Educación` });
              this.meta.updateTag({ property: 'og:description', content: `${this.curso.sections?.[0]?.content || 'Descripción no disponible'}` });
              this.meta.updateTag({ property: 'og:image', content: this.curso.image });
              this.meta.updateTag({ property: 'og:url', content: `https://portafolio-dev-team.vercel.app/cursos/${this.curso.id}` });
            } else {
              this.handleCursoNotFound();
            }
          },
          error => {
            console.error('Error al obtener el curso', error);
            this.router.navigate(['/']);
          }
        );
      } else {
        this.handleInvalidCursoId();
      }
    });
  }

  private handleCursoNotFound(): void {
    console.error('Curso no encontrado, redirigiendo a la página de inicio');
    this.router.navigate(['/']);
  }

  private handleInvalidCursoId(): void {
    console.error('No se encontró el ID del curso en la ruta, redirigiendo a la página de inicio');
    this.router.navigate(['/']);
  }
}
