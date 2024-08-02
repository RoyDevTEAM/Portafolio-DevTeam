import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { filter: 'filter-1', title: 'Sistema de ventas', image: 'assets/img/proyect/img1.PNG' },
    { filter: 'filter-1', title: 'Tienda Online', image: 'assets/img/proyect/img2.PNG' },
    { filter: 'filter-1', title: 'Reserva de hotel', image: 'assets/img/proyect/img3.jpeg' },
    { filter: 'filter-2', title: 'Sistema de gestion escolar', image: 'https://edteam-media.s3.amazonaws.com/blogs/original/08810a24-07c9-4fa9-97f0-83ac3690f774.png' },
    { filter: 'filter-2', title: 'Company Website', image: 'https://edteam-media.s3.amazonaws.com/blogs/original/08810a24-07c9-4fa9-97f0-83ac3690f774.png' },
    { filter: 'filter-3', title: 'JavaScript Game', image: 'assets/img/proyect/game1.PNG' },
    // Add more projects as needed
  ];

  currentPage = 0;
  itemsPerPage = 6;
  totalPages = Math.ceil(this.projects.length / this.itemsPerPage);

  ngOnInit(): void { }

  getCurrentPageProjects() {
    const start = this.currentPage * this.itemsPerPage;
    return this.projects.slice(start, start + this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  filterProjects(filter: string): void {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
      if (filter === '*' || item.classList.contains(filter)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    const filters = document.querySelectorAll('#portfolio-filter li');
    filters.forEach(f => f.classList.remove('filter-active'));
    document.querySelector(`#portfolio-filter li[data-filter="${filter}"]`)?.classList.add('filter-active');
  }
}
