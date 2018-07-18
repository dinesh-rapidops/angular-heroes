import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero:Hero = new Hero();
  heroForm:FormGroup;
  showSuccessMessage:boolean=false;
  constructor(private heroService: HeroService,private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      gender:['male',null ] ,
      superPowers:['',null],
      location:''

    });
  }

  ngOnInit() {}

  fileChanged(){
    let fileElement = document.getElementById('file');
    this.hero.photo = fileElement['files'][0];
  }

  saveHero(){
    let heroData  = this.heroForm.value;
    heroData.photo = this.hero.photo;
    this.hero = heroData;
    if(!this.heroForm.valid){
      alert('form is invalid');
    } else {
      this.heroService.addHero(this.hero).subscribe((data)=>{
        this.showSuccessMessage =true;

        this.heroForm.reset();

        setTimeout(()=>{
          this.showSuccessMessage =false;
        },5000)

      });
    }
  }


}
