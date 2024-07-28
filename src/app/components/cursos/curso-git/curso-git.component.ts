import { Component } from '@angular/core';

@Component({
  selector: 'app-curso-git',
  templateUrl: './curso-git.component.html',
  styleUrls: ['./curso-git.component.css']
})
export class CursoGitComponent {
  comment = {
    name: '',
    text: ''
  };

  comments = [
    { name: 'Ana Pérez', text: '¡El curso fue excelente! Aprendí mucho sobre Git y GitHub.' },
    { name: 'Luis Gómez', text: 'Muy bien organizado y con ejemplos prácticos.' }
  ];

  submitComment() {
    if (this.comment.name && this.comment.text) {
      this.comments.push({ ...this.comment });
      this.comment = { name: '', text: '' };
    }
  }

  currentSlide = 0;
  totalSlides = 3;

  prevSlide() {
    this.currentSlide = (this.currentSlide + this.totalSlides - 1) % this.totalSlides;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }
}
