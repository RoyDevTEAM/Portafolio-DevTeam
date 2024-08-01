import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen: boolean[] = [false, false, false, false, false];

  courses = [
    {
      title: 'Curso de Git y GitHub',
      description: 'Aprende a usar Git y GitHub para el control de versiones...',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*sacyDAoul4zgtvjB.jpg'
    },
    {
      title: 'Importancia de la Investigación',
      description: 'Importancia de la investigación en ingeniería...',
      imageUrl: 'https://www.grupoioe.es/wp-content/uploads/2018/05/Cu%C3%A1l-es-el-significado-de-investigaci%C3%B3n-cient%C3%ADfica.jpg'
    },
    {
      title: 'Curso de Figma',
      description: 'Curso sobre el uso de Figma para diseño de interfaces...',
      imageUrl: 'https://www.liderlogo.es/wp-content/uploads/2023/01/figma-768x384.png'
    },
    {
      title: 'Curso de Bots',
      description: 'Curso sobre desarrollo de bots para automatización...',
      imageUrl: 'https://images.tech.co/wp-content/uploads/2024/04/03175449/telegram-app-phone-708x400.jpeg'
    },
    {
      title: 'Curso de Flutter',
      description: 'Curso sobre desarrollo de aplicaciones móviles con Flutter...',
      imageUrl: 'https://digitronsoftwares.com/assets/uploads/media-uploader/flutter-featured-blog-image21690356842.jpg'
    },
    {
      title: 'Curso de Angular',
      description: 'Curso sobre desarrollo de aplicaciones web con Angular...',
      imageUrl: 'https://img-c.udemycdn.com/course/750x422/756150_c033_4.jpg'
    },
    {
      title: 'Curso de Firebase',
      description: 'Curso sobre backend y bases de datos en tiempo real con Firebase...',
      imageUrl: 'https://appmaster.io/api/_files/wpgxr7UmhWYQwqVXiWMTTW/download/'
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}


  ngOnInit(): void {

    this.addAnimationClass();

  }
  private addAnimationClass() {
    const textContainer = this.el.nativeElement.querySelector('.text-container');
    const imageContainer = this.el.nativeElement.querySelector('.image-container');

    this.renderer.addClass(textContainer, 'animated');
    this.renderer.addClass(imageContainer, 'animated');
  }toggleAccordion(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }
}
