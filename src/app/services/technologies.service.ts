import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TechnologyCategory } from '../models/technology.model';

interface TechnologiesData {
  categories: TechnologyCategory[];
}

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  private technologiesUrl : string = 'technologies.json'; 

  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<TechnologyCategory[]> {
    return this.http.get<TechnologiesData>(this.technologiesUrl).pipe(
      map((data) => data.categories),
      catchError((error) => {
        console.error('Failed to load technologies from:', this.technologiesUrl, error);
        return of([]);
      })
    );
  }
}
