import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[]= [
    { name:'Thor', id:1},
    { name:'IronMan', id:2},
    { name:'Captain America', id:3},
    { name:'Black Panther', id:4},
    { name:'Ant Man', id:5},
    { name:'BatMan', id:6},
    { name:'Wonder Woman', id:7}
  ];
  selectedHero: Hero;
  hilightId: number;
  
  constructor() { }

  ngOnInit() {
  }

  hilightSelected(selectedHero){
    this.hilightId = selectedHero.id;
  }
  
  setSelectedHero(id){
    this.selectedHero = this.heroes.find(hero => hero.id === id);
  }
}
