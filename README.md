#Reactive Forms
First we need to add   `ReactiveFormsModule`  into the imports Array at last to support reactive form feature. in `app.module.ts` . It should look like this

```typescript
 imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule 
  ]
```

Then we need to import these class at top section of `app.module.ts` . 

```typescript
 import { FormsModule,ReactiveFormsModule } from '@angular/forms';
```
Create new add-hero-rf component
```cmd
ng generate component add-hero-rf
```

add this component to `app.component.html` file
```html
<!-- <app-hero-detail></app-hero-detail> -->
<!-- <app-add-hero></app-add-hero> -->
<app-add-hero-rf></app-add-hero-rf>
<app-hero-list></app-hero-list>


```

Change the html of `add-hero.component.html` file to 
```html
<form [formGroup]="heroForm">
  
    <div [ngClass]="{'hide': !showSuccessMessage}" class="msg-wrap" >Hero Saved Successfully</div>
  
    Name: <input formControlName="name" required>
    <br>
  
    <span class="error-text" *ngIf="!heroForm.controls.name.valid && heroForm.controls.name.touched ">Name is required</span>
  
    <br><br>
  
    Gender:
    <input type="radio" formControlName="gender" value="male" > Male
    <input type="radio" formControlName="gender" value="female"> Female
    <br><br>
  
    Can Fly:
    <input type="checkbox" formControlName="superPowers">
    <br><br>
  
    Location:
    <select  formControlName="location">
    <option value="">Select Location</option>
      <option value="Earth">Earth</option>
      <option value="Asgard">Asgard</option>
    </select>

    <span class="error-text" *ngIf="!heroForm.controls.location.valid  ">Location is required</span>
    <br><br>
  
    photo:
    <input type="file" name="file" id="file" (change)="fileChanged()">
    <br><br>
  
    <button type="submit" (click)="saveHero()" [disabled]="!heroForm.valid">Submit</button>
  
  </form>
  
  Hero: {{ heroForm.value| json}}
```

Add below lines into `add-hero-rf.component.css`

```css
.error-text{
    color: red;
}
.msg-wrap{
    background: lightblue;color: green;padding: 10px;margin: 10px
}
.hide{
    display: none;
}
```
`Now your code should give error in browser console`

Add new hero property inside the `add-hero-rf.component.ts` . make sure you import Hero class
```typescript
hero: Hero= new Hero();
```


Now create the formGroup with controls in constructor. all the keys are passed as formControlName
```typescript
 heroForm: FormGroup
 showSuccessMessage:Boolean = false;
  constructor(private heroService: HeroService, private fb: FormBuilder) {
    this.createForm();
  }
 createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      gender: ['male', null ] ,
      superPowers: ['', null],
      location: ''
    });
  }
}
```
Don't forget import the dependencies , You can also wri

```type script
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
```

Now create the save hero and fileChanged (same as last)  functions inside the ts file
```typescript
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

        this.heroForm.reset();

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      });
    }
  }
}
```
Now lets replace ngOnInit by this code

```typescript
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
```
Now let create one method in `hero.service.ts`
```typescript
heroAddedNotify(data) {
    this.heroAddedEvent.emit(data);
  }
```

at top above the constructor lets declare herAddedEvent.
```typescript
 heroAddedEvent: EventEmitter <any> = new EventEmitter();
```

Also add import `EventEmitter` ad top from angular core
```typescript
import { Injectable, EventEmitter } from '@angular/core';
```

now go to `hero-list.component.ts` and in constructor add below code . `Make sure you add OnDestroy and its import in angular core`
```typescript
  constructor(private heroService: HeroService) {
    if (this.heroService.heroAddedEvent) {
      this.heroService.heroAddedEvent.subscribe((data) => {
          if (data) {
            this.heroes.push(data);
          }
      });
    }
    
    ngOnDestroy() {
    if (this.heroService.heroAddedEvent) {
      this.heroService.heroAddedEvent.unsubscribe();
    }
  }

  }
```
Thats It . AT LAST DELETE `<app-add-hero-rf></app-add-hero-rf>` COMPONENT FROM `app.component.html` so it will not affect further development

```typescript
<!-- <app-hero-detail></app-hero-detail> -->
<app-add-hero></app-add-hero> 
<!--<app-add-hero-rf></app-add-hero-rf>-->
<app-hero-list></app-hero-list>
```

