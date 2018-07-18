import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() whoIam = new EventEmitter();

  constructor(private route: ActivatedRoute,
              private heroSerivce: HeroService) { }

  ngOnInit() {
    this.heroSerivce.getHeroDetail(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.hero = data;
      });
  }

  onIdentityCheck() {
    this.whoIam.emit(this.hero);
  }
}
