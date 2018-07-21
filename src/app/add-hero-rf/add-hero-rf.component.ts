import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-hero-rf',
  templateUrl: './add-hero-rf.component.html',
  styleUrls: ['./add-hero-rf.component.css']
})
export class AddHeroRfComponent implements OnInit {

  hero: Hero= new Hero();
  heroForm: FormGroup;
  showSuccessMessage:Boolean = false;
  constructor(private heroService: HeroService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

    this.heroForm.get('gender').valueChanges.subscribe(val => {
      if (val === 'female') {
          this.heroForm.controls['location'].setValidators([Validators.required]);
      } else {
        this.heroForm.controls['location'].setValidators(null);
      }

      this.heroForm.controls['location'].updateValueAndValidity();
    });
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      gender: ['male', null ] ,
      superPowers: ['', null],
      location: ''
    });
  }

  fileChanged() {
    const fileElement = document.getElementById('file');
    this.hero.photo = fileElement['files'][0];
  }

  saveHero() {
    const heroData  = this.heroForm.value;
    heroData.photo = this.hero.photo;
    this.hero = heroData;
    if (!this.heroForm.valid) {
      alert('form is invalid');
    } else {
      this.heroService.addHero(this.hero).subscribe((data) => {
        this.showSuccessMessage = true;
        this.heroService.heroAddedNotify(data);
        this.heroForm.reset();

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      });
    }
  }

}
