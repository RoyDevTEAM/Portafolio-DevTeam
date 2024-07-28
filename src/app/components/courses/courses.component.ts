import { Component, OnInit } from '@angular/core';

interface Course {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date: Date;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = []; // Lista completa de cursos
  filteredCourses: Course[] = []; // Cursos después de aplicar filtros
  featuredCourses: Course[] = []; // Cursos destacados
  categories: string[] = ['Tecnologías', 'Bases de Datos', 'Git y GitHub', 'Angular', 'Bots', 'Figma']; // Categorías de filtros
  searchQuery: string = ''; // Valor de búsqueda
  sortOrder: string = 'date'; // Orden de clasificación: 'date' o 'popularity'
  currentPage: number = 1; // Página actual
  totalPages: number = 1; // Total de páginas de cursos
  pageNumbers: number[] = []; // Números de página para la paginación

  ngOnInit(): void {
    // Inicializar datos aquí (en un caso real, esto podría venir de un servicio)
    this.loadCourses();
    this.loadFeaturedCourses();
    this.updatePagination();
  }

  loadCourses(): void {
    // Aquí deberías cargar los datos desde un servicio
    // Ejemplo de datos:
    this.courses = [
      { title: 'Introducción a Angular', description: 'Curso básico de Angular.', image: 'https://miro.medium.com/v2/resize:fit:1400/1*GKEwP2XD15OAjzMe75tgew.png', link: '/courses/angular', category: 'Angular', date: new Date('2024-08-01') },
      { title: 'Fundamentos de Bases de Datos', description: 'Aprende sobre bases de datos relacionales.', image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sabe6429baa2db6cc/image/ifa9beaa64ac79def/version/1580178824/image.jpg', link: '/courses/databases', category: 'Bases de Datos', date: new Date('2024-09-15') },
    ];
    this.filterCourses();
  }

  loadFeaturedCourses(): void {
    // Cargar cursos destacados, similar a loadCourses pero con una selección especial
    this.featuredCourses = [
      { title: 'Curso Destacado de Git', description: 'Curso avanzado de Git.', image: 'https://old.diplomadosonline.com/wp-content/uploads/2022/09/Banner-git-github.jpg', link: '/curso-git', category: 'Git y GitHub', date: new Date('2024-07-20') },
      // Añadir más cursos destacados aquí
    ];
  }

  filterCourses(): void {
    // Filtrar cursos según la búsqueda y la categoría
    this.filteredCourses = this.courses
      .filter(course => course.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      .filter(course => this.selectedCategory ? course.category === this.selectedCategory : true)
      .sort(this.sortByDateOrPopularity);
    this.updatePagination();
  }

  sortCourses(): void {
    // Ordenar los cursos según el criterio seleccionado
    this.filteredCourses.sort(this.sortByDateOrPopularity);
    this.updatePagination();
  }

  sortByDateOrPopularity = (a: Course, b: Course): number => {
    if (this.sortOrder === 'date') {
      return b.date.getTime() - a.date.getTime();
    } else {
      // Implementar lógica de popularidad si es necesario
      return 0;
    }
  };

  updatePagination(): void {
    // Calcular el número total de páginas y los números de página
    const pageSize = 6; // Número de cursos por página
    this.totalPages = Math.ceil(this.filteredCourses.length / pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterCourses();
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set selectedCategory(category: string) {
    this._selectedCategory = category;
    this.filterCourses();
  }

  private _selectedCategory: string = ''; // Categoría seleccionada para filtrado
}
