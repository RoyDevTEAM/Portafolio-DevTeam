import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [
    {
      title: 'Cómo Optimizar el Rendimiento de las Aplicaciones Móviles',
      summary: 'Explora técnicas para mejorar el rendimiento y la eficiencia en el desarrollo de aplicaciones móviles.',
      image: 'https://bestmedios.es/wp-content/uploads/2024/07/rendimiento-app-moviles-1024x683.jpg',
      link: '#',
      category: 'Aplicaciones Móviles',
      date: new Date('2024-07-25'),
      popularity: 80
    },
    {
      title: 'Tendencias en Desarrollo Web para 2024',
      summary: 'Descubre las últimas tendencias y tecnologías en el desarrollo web que marcarán la pauta este año.',
      image: 'https://tuatara.co/wp-content/uploads/2024/01/Opengraph-Tendencias-Des-2024.jpg',
      link: '#',
      category: 'Desarrollo Web',
      date: new Date('2024-07-20'),
      popularity: 60
    },
    {
      title: 'Aplicaciones de la Inteligencia Artificial en la Ingeniería',
      summary: 'Analiza cómo la inteligencia artificial está transformando diferentes aspectos de la ingeniería moderna.',
      image: 'https://www.revistaeyn.com/binrepository/1200x749/0c0/0d0/none/26086/TVIN/inteligenc-artific-mano_6573795_20240125162807.jpg',
      link: '#',
      category: 'Inteligencia Artificial',
      date: new Date('2024-07-15'),
      popularity: 90
    }
    // Agrega más artículos aquí
  ];

  filteredArticles: Article[] = [];
  featuredArticles: Article[] = [];
  categories: string[] = ['Todos', 'Aplicaciones Móviles', 'Desarrollo Web', 'Inteligencia Artificial'];
  searchQuery: string = '';
  selectedCategory: string = 'Todos';
  sortOrder: string = 'date';
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 1;
  pageNumbers: number[] = [];

  ngOnInit(): void {
    this.featuredArticles = this.articles.slice(0, 3); // Ejemplo: los primeros 3 como destacados
    this.updateFilteredArticles(); // Inicializa la lista de artículos filtrados
  }

  filterArticles(): void {
    this.updateFilteredArticles();
    this.currentPage = 1; // Resetea la página actual al buscar
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterArticles(); // Filtra también por consulta de búsqueda
  }

  updateFilteredArticles(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredArticles = this.articles.filter(article =>
      (article.title.toLowerCase().includes(query) || article.summary.toLowerCase().includes(query)) &&
      (this.selectedCategory === 'Todos' || article.category === this.selectedCategory)
    );
    this.updatePagination();
  }

  sortArticles(): void {
    if (this.sortOrder === 'date') {
      this.filteredArticles.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (this.sortOrder === 'popularity') {
      this.filteredArticles.sort((a, b) => b.popularity - a.popularity);
    }
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredArticles.length / this.pageSize);
    this.changePage(1); // Cambia a la primera página para actualizar los artículos mostrados
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  get paginatedArticles(): Article[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredArticles.slice(start, start + this.pageSize);
  }
}
