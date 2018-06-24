import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'http://localhost:3000/heroes';
  constructor(private http:HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
