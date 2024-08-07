// models/noticia.model.ts
export interface Noticia {
  id: string;
  title: string;
  image: string;
  date: string;  // Nueva propiedad
  author: string;  // Nueva propiedad
  sections: Section[];
  relatedNews: RelatedNews[];
}

export interface Section {
  heading: string;
  content: string;
}

export interface RelatedNews {
  id: string;
  image: string; // Cambiado de 'icon' a 'image'
  title: string;
  description: string;
  link: string;
}
