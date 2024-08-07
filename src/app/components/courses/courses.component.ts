import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/cursos.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Curso[] = [];
  filteredCourses: Curso[] = [];
  featuredCourses: Curso[] = []; // Añade cursos destacados
  searchQuery: string = '';
  sortOrder: string = 'date';
  currentPage: number = 1;
  itemsPerPage: number = 6; // Cambia esto según tus necesidades
  totalPages: number = 0;
  categories: string[] = ['tecnología', 'Devops', 'backend', 'investigación', 'móvil', 'prototipos', 'Desarrollo', 'bases de datos']; // Categorías actualizadas
  accordionOpen: boolean = false; // Estado del acordeón
  pageNumbers: number[] = []; // Para la paginación

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.cursosService.getCursos().subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses; // Inicializa con todos los cursos
      this.featuredCourses = courses.filter(course => course.popularity); // Filtra cursos destacados
      this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
      this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Crea números de página
    });
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Actualiza los números de página
    this.currentPage = 1; // Reinicia a la primera página después de filtrar
  }
  selectedCategories: { [key: string]: boolean } = {}; // Para rastrear categorías seleccionadas

  updateSelectedCategories(): void {
      const selected = Object.keys(this.selectedCategories).filter(key => this.selectedCategories[key]);
      this.filterByCategory(selected);
  }
  
  sortCourses(): void {
    if (this.sortOrder === 'date') {
      this.filteredCourses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (this.sortOrder === 'popularity') {
      this.filteredCourses.sort((a, b) => b.popularity - a.popularity);
    }
    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage); // Actualiza total de páginas
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Actualiza los números de página
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  filterByCategory(selectedCategories: string[]): void {
    if (selectedCategories.length > 0) {
        this.filteredCourses = this.courses.filter(course => 
            selectedCategories.includes(course.category)
        );
    } else {
        this.filteredCourses = this.courses; // Si no hay categorías seleccionadas, muestra todos los cursos
    }
    
    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Actualiza los números de página
    this.currentPage = 1; // Reinicia a la primera página después de filtrar
}

  toggleAccordion(): void {
    this.accordionOpen = !this.accordionOpen; // Alterna el estado del acordeón
  }
}
