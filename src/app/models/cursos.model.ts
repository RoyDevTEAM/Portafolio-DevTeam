export interface Curso {
  id: string;
  title: string;
  image: string;
  sections: Section[];
  relatedCourses: RelatedCourse[];
  date: string; // Fecha
  popularity: number; // Popularidad
  category: string; // Categoría del curso
}

export interface Section {
  title: string;  // Cambiado de 'heading' a 'title' para mantener consistencia con el JSON
  content: string;
}

export interface RelatedCourse {
  id: string; // Añadido id para relacionar con el JSON
  title: string;
  description: string;
  image: string; // Añadido image para mostrar la imagen en los cursos relacionados
}
