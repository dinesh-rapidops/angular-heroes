import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;
  hilightId: number;
  constructor(private heroService: HeroService) {
    if (this.heroService.heroAddedEvent) {
      this.heroService.heroAddedEvent.subscribe((data) => {
          if (data) {
            this.heroes.push(data);
          }
      });
    }

  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe((heroes)=>{
        this.heroes = heroes;
      })
  }

  ngOnDestroy() {
    if (this.heroService.heroAddedEvent) {
      this.heroService.heroAddedEvent.unsubscribe();
    }
  }

  hilightSelected(selectedHero){
    this.hilightId = selectedHero.id;
  }
  
  setSelectedHero(id){
    this.selectedHero = this.heroes.find(hero => hero.id === id);
  }
}
