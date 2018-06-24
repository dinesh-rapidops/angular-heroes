import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
    return of(<Hero[]>[
      { name:'Thor', id:1},
      { name:'IronMan', id:2},
      { name:'Captain America', id:3},
      { name:'Black Panther', id:4},
      { name:'Ant Man', id:5},
      { name:'BatMan', id:6},
      { name:'Wonder Woman', id:7}
    ]);
  }
}
