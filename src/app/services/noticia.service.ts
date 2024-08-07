import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private dataUrl = 'assets/data/noticias.json'; // Ruta al archivo JSON local

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.dataUrl);
  }

  getNoticiaById(id: string): Observable<Noticia> {
    return this.http.get<Noticia[]>(this.dataUrl).pipe(
      map(noticias => {
        const noticia = noticias.find(noticia => noticia.id === id);
        if (!noticia) {
          throw new Error('Noticia no encontrada');
        }
        return noticia;
      })
    );
  }
}
