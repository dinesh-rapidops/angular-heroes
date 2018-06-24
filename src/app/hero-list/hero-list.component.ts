import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  hilightId: number;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe((heroes)=>{
        this.heroes = heroes;
      })
  }

  hilightSelected(selectedHero){
    this.hilightId = selectedHero.id;
  }
  
  setSelectedHero(id){
    this.selectedHero = this.heroes.find(hero => hero.id === id);
  }
}
