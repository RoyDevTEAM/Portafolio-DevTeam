import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-noticias-content',
  templateUrl: './noticias-content.component.html',
  styleUrls: ['./noticias-content.component.css']
})
export class NoticiasContentComponent implements OnInit {
  noticia?: Noticia;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const noticiaId = params.get('id');
      if (noticiaId) {
        this.noticiaService.getNoticiaById(noticiaId).subscribe(
          data => {
            if (data) {
              this.noticia = data;
              // Actualizar el título y metadatos
              this.title.setTitle(`${this.noticia.title} - DevTeam UPDS`);
              this.meta.updateTag({ name: 'description', content: `${this.noticia.title}: ${this.noticia.sections?.[0]?.content || 'Descripción no disponible'}` });
              this.meta.updateTag({ property: 'og:title', content: `${this.noticia.title} - Innovación y Tecnología en la Industria` });
              this.meta.updateTag({ property: 'og:description', content: `${this.noticia.sections?.[0]?.content || 'Descripción no disponible'}` });
              this.meta.updateTag({ property: 'og:image', content: this.noticia.image });
              this.meta.updateTag({ property: 'og:url', content: `https://portafolio-dev-team.vercel.app/noticias/${this.noticia.id}` });
            } else {
              this.handleNoticiaNotFound();
            }
          },
          error => {
            console.error('Error al obtener la noticia', error);
            this.router.navigate(['/']);
          }
        );
      } else {
        this.handleInvalidNoticiaId();
      }
    });
  }

  private handleNoticiaNotFound(): void {
    console.error('Noticia no encontrada, redirigiendo a la página de inicio');
    this.router.navigate(['/']);
  }

  private handleInvalidNoticiaId(): void {
    console.error('No se encontró el ID de la noticia en la ruta, redirigiendo a la página de inicio');
    this.router.navigate(['/']);
  }
}
