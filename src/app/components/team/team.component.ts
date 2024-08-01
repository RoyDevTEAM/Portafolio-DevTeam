// team.component.ts
import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    { name: 'Yerko', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Juan Luis', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Noelia', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Elias', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Pablo', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Rodrigo', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Roy O\'Neil', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    { name: 'Alenador', role: 'Estudiante de Ingeniería de Sistemas', imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png' },
    // Agrega más miembros aquí
  ];

  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

  get paginatedMembers(): TeamMember[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.teamMembers.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.teamMembers.length / this.itemsPerPage);
  }
}
