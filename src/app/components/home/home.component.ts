import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/cursos.model';
import { NoticiaService } from '../../services/noticia.service'; // Añadir esta línea
import { Noticia } from '../../models/noticia.model'; // Añadir esta línea

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen: boolean[] = [false, false, false, false, false];
  investigaciones: Array<{ 
    title: string; 
    description: string; 
    imageUrl: string; 
    readMoreLink: string; 
    pdfLink: string; 
  }> = [];
  noticias: Noticia[] = []; // Añadir esta línea

  courses: Curso[] = [];

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    private cursosService: CursosService,
    private noticiaService:NoticiaService

  ) {}

  ngOnInit(): void {
    this.addAnimationClass();
    this.loadCursos();
    this.loadNoticias(); // Llama al método para cargar noticias

    this.investigaciones = [
      {
        title: 'Investigación sobre IA',
        description: 'Exploramos cómo la inteligencia artificial está revolucionando diversos sectores...',
        imageUrl: 'https://www.tarlogic.com/wp-content/uploads/2023/09/riesgos-seguridad-IA-3.jpg',
        readMoreLink: '#',
        pdfLink: '#'
      },
      {
        title: 'Proyecto de IA en la Salud',
        description: 'Sistema de diagnóstico asistido por IA para mejorar la precisión médica...',
        imageUrl: 'https://www.etkho.com/wp-content/uploads/2023/08/revolucion_IA_en_sector_salud_pic02_20230814_etkho_hospital_engineering.jpg',
        readMoreLink: '#',
        pdfLink: '#'
      },
      {
        title: 'Beneficios de la IA en la Industria',
        description: 'IA está mejorando la eficiencia y reduciendo costos en la industria...',
        imageUrl: 'https://atx.mx/wp-content/uploads/2023/07/IMAGEN-DESTACADA-IA-INDUSTRIA-AUTOMOTRIZ.png',
        readMoreLink: '#',
        pdfLink: '#'
      }
    ];
  }

  private loadCursos() {
    this.cursosService.getCursos().subscribe((cursos: Curso[]) => {
      this.courses = cursos.slice(0, 6); // Muestra un máximo de 6 cursos
    });
  }
  private loadNoticias() {
    this.noticiaService.getNoticias().subscribe((noticias: Noticia[]) => {
      this.noticias = noticias.slice(0, 4); // Muestra un máximo de 4 noticias
    });
  }
  private addAnimationClass() {
    const textContainer = this.el.nativeElement.querySelector('.text-container');
    const imageContainer = this.el.nativeElement.querySelector('.image-container');

    this.renderer.addClass(textContainer, 'animated');
    this.renderer.addClass(imageContainer, 'animated');
  }

  toggleAccordion(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }
}
