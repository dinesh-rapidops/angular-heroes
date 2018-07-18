import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'http://localhost:3000/heroes';
  constructor(private http:HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  addHero(hero: Hero):Observable<Hero>{
    const formData = new FormData();
    for (let key in hero) {
      formData.append(key,hero[key]);
    }
    const headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type','');
    return this.http.post<Hero>(this.heroesUrl,formData,{headers});
  }

  getHeroDetail(id):Observable<Hero>{
    return this.http.get<Hero[]>(this.heroesUrl+'/'+id);
  }
}
