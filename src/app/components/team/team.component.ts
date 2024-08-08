// team.component.ts
import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  descripcion: string;
  imgSrc: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
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
      imgSrc: '/assets/img/profile/elias.jpg',
      facebook: 'https://facebook.com/elias',
      twitter: 'https://twitter.com/elias',
      linkedin: 'https://linkedin.com/in/elias',
    },
    {
      name: 'Yerko',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Yerko Valdivia Gómez apasionado por el desarrollo back-end y la ciencia de datos.',
      imgSrc: '/assets/img/profile/yerko.jpeg',
      facebook: 'https://facebook.com/yerko',
      twitter: 'https://twitter.com/yerko',
      linkedin: 'https://linkedin.com/in/yerko',
    },
    {
      name: 'Juan Luis',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Juan Luis Menacho Ramírez, apasionado por el desarrollo de software, inteligencia artificial, automatización de tareas y la gestión de servidores Linux.',
      imgSrc: '/assets/img/profile/juan.jpeg',
      facebook: 'https://facebook.com/juan',
      twitter: 'https://twitter.com/juan',
      linkedin: 'https://linkedin.com/in/juan',
    },
    {
      name: 'Noelia',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Delsy Noelia Cuellar Chung, apasionada en el desarrollo frontend con las tecnologías HTML, CSS y JavaScript.',
      imgSrc: '/assets/img/profile/noelia.jpeg',
      facebook: 'https://facebook.com/noelia',
      twitter: 'https://twitter.com/noelia',
      linkedin: 'https://linkedin.com/in/noelia',
    },
    {
      name: 'Jorge',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Experto en Desarrollo Web.',
      imgSrc: '/assets/img/profile/jorge.jpeg',
      facebook: 'https://facebook.com/jorge',
      twitter: 'https://twitter.com/jorge',
      linkedin: 'https://linkedin.com/in/jorge',
    },
    {
      name: 'Joselyn',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Joselyn Santiago, estudiante en la Universidad Domingo Savio y miembro de DevTeam. Aunque fue un reto aprender nuevas tecnologías para este proyecto, con ayuda del equipo y dedicación, continuamos avanzando y enfrentaremos nuevos retos.',
      imgSrc: '/assets/img/profile/joselyn.jpeg',
      facebook: 'https://facebook.com/joselyn',
      twitter: 'https://twitter.com/joselyn',
      linkedin: 'https://linkedin.com/in/joselyn',
    },
    {
      name: 'Pablo',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Pablo Gutiérrez, apasionado por el desarrollo de aplicaciones y páginas web.',
      imgSrc: '/assets/img/profile/pablo.jpeg',
      facebook: 'https://facebook.com/pablo',
      twitter: 'https://twitter.com/pablo',
      linkedin: 'https://linkedin.com/in/pablo',
    },
    {
      name: 'Rodrigo',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Rodrigo Ledezma Sanchez, apasionado por el desarrollo móvil, la base de datos de Firebase y los diseños en Figma.',
      imgSrc: '/assets/img/profile/rodrigo.jpeg',
      facebook: 'https://facebook.com/rodrigo',
      twitter: 'https://twitter.com/rodrigo',
      linkedin: 'https://linkedin.com/in/rodrigo',
    },
    {
      name: "Roy O'Neil",
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Roy Oniel Melgar V. Apasionado por el desarrollo de web y aplicaciones y con ganas de seguir aprendiendo nuevos lenguajes y tecnologías.',
      imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png',
      facebook: 'https://facebook.com/roy',
      twitter: 'https://twitter.com/roy',
      linkedin: 'https://linkedin.com/in/roy',
    },
    {
      name: 'Alejandro',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Maldine Alejandro Menacho, soy un estudiante apasionado. Me encanta trabajar en proyectos de aplicaciones y sistemas de negocios, donde puedo poner en práctica mi creatividad y habilidades técnicas.',
      imgSrc: 'https://css2.rtve.es/css/rtve.2022.deportes/mundial-futbol-catar-TE_SM7ALFL/estrellas/i/jugadores/messi.png',
      facebook: 'https://facebook.com/alejandro',
      twitter: 'https://twitter.com/alejandro',
      linkedin: 'https://linkedin.com/in/alejandro',
    },
    {
      name: 'Cesar',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Cesar Camacho Duran, apasionado por la seguridad informática, desarrollo de software y inteligencia artificial.',
      imgSrc: '/assets/img/profile/cesar.jpeg',
      facebook: 'https://facebook.com/cesar',
      twitter: 'https://twitter.com/cesar',
      linkedin: 'https://linkedin.com/in/cesar',
    },
    {
      name: 'Dorian',
      role: 'Estudiante de Ingeniería de Sistemas',
      descripcion: 'Soy Dorian Escobar Acosta, apasionado por el desarrollo web, con ganas de seguir aprendiendo nuevas tecnologías.',
      imgSrc: '/assets/img/profile/dorian.jpeg',
      facebook: 'https://facebook.com/dorian',
      twitter: 'https://twitter.com/dorian',
      linkedin: 'https://linkedin.com/in/dorian',
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
