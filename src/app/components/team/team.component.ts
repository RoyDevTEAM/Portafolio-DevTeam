// team.component.ts
import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  descripcion: string;
  imgSrc: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Elias',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy fullstack con habilidades en Laravel, .NET, JS, HTML, CSS, SQL y más. Apasionado por el desarrollo web y soluciones tecnológicas.',
      imgSrc:
        '/assets/img/profile/elias.jpg',
    },
    {
      name: 'Yerko',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Yerko Valdivia Gómez apasionado por el  desarrollador back-end y la ciencia  de datos',
      imgSrc:
        '/assets/img/profile/yerko.jpeg',
    },
    {
      name: 'Juan Luis',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Juan Luis Menacho Ramírez, apasionado por el desarrollo de software, inteligencia artificial, automatización de tareas y la gestión de servidores Linux.',
      imgSrc:
        '/assets/img/profile/juan.jpeg',
    },
    {
      name: 'Noelia',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Delsy Noelia Cuellar Chung , apasionada en el desarrollo frontend con las tecnologías Html, css y JavaScript.   ',
      imgSrc:
        '/assets/img/profile/noelia.jpeg',
    },
    {
      name: 'Jorge',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Delsy Noelia Cuellar Chung , apasionada en el desarrollo frontend con las tecnologías Html, css y JavaScript.   ',
      imgSrc:
        '/assets/img/profile/noelia.jpeg',
    },
    {
      name: 'Joselyn',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Delsy Noelia Cuellar Chung , apasionada en el desarrollo frontend con las tecnologías Html, css y JavaScript.   ',
      imgSrc:
        '/assets/img/profile/joselyn.jpeg',
    },
    {
      name: 'Pablo',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Pablo Gutiérrez , apasionado por el desarrollo de aplicaciones y páginas web',
      imgSrc:
        '/assets/img/profile/pablo.jpeg',
    },
    {
      name: 'Rodrigo',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Rodrigo Ledezma Sanchez, apasionado por el desarrollo móvil, la base de datos de Firebase y los diseños en Figma.',
      imgSrc:
        '/assets/img/profile/rodrigo.jpeg',
    },
    {
      name: "Roy O'Neil",
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Roy Oniel Melgar V. Apasionado por el desarrollo de web y aplicaciones y con ganas de seguir aprendiendo nuevos lenguajes y tecnologías.',
      imgSrc:
        'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png',
    },
    {
      name: 'Alejandro',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy  Maldine Alejandro Menacho soy un estudiante apasionado . Me encanta trabajar en proyectos de aplicaciones y sistemas de negocios, donde puedo poner en práctica mi creatividad y habilidades técnicas.',  
      imgSrc:
        'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png',
    },
    {
      name: 'Cesar',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Cesar Camacho Duran, apasionado por la seguridad informática, desarrollo de software y inteligencia artificial.',  
      imgSrc:
        '/assets/img/profile/cesar.jpeg',
    },
    {
      name: 'Dorian',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Dorian Escobar Acosta ,apasionado por el desarrollo web, con ganas de seguir aprendiendo nuevas tecnologias',  
      imgSrc:
        '/assets/img/profile/cesar.jpeg',
    },
    // Agrega más miembros aquí
  ];

  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor() {}

  ngOnInit(): void {}

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
