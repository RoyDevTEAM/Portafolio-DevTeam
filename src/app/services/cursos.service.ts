import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Curso } from '../models/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private dataUrl = 'assets/data/cursos.json'; // Ruta al archivo JSON local

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.dataUrl);
  }

  getCursoById(id: string): Observable<Curso> {
    return this.http.get<Curso[]>(this.dataUrl).pipe(
      map(cursos => {
        const curso = cursos.find(curso => curso.id === id);
        if (!curso) {
          throw new Error('Curso no encontrado');
        }
        return curso;
      })
    );
  }
}
