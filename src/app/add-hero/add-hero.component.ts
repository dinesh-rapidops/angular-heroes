import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero: Hero = new Hero();
  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {}

  fileChanged() {
    const fileElement = document.getElementById('file');
    this.hero.photo = fileElement['files'][0];
  }

  saveHero(form) {
    if (form.invalid) {
      alert('form is invalid');
    } else {
      this.heroService.addHero(this.hero).subscribe(() => {
        this.router.navigate(['heroes']);
      });
    }
  }


}
