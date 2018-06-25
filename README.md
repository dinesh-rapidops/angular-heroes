# Forms

Let's change our hero model as following 
```typescript
 export class Hero {
    id: number;
    name: string;
    location: string;
    gender: string;
    canFly: boolean;
    photo: any;
}
```

Create new add-hero component
```cmd
ng generate component add-hero
```

add this component to `app.component.html` file
```html
<app-add-hero></app-add-hero>
```

Change the html of `add-hero.component.html` file to 
```html
<form (ngSubmit)="saveHero(heroForm)" #heroForm="ngForm">
  
  Name: <input name="name" [(ngModel)]="hero.name" #nameField>
  <br><br>
  
  Gender:   
  <input type="radio" name="gender" value="male" checked [(ngModel)]="hero.gender"> Male
  <input type="radio" name="gender" value="female" [(ngModel)]="hero.gender"> Female
  <br><br>
  
  Can Fly: 
  <input type="checkbox" name="superPowers" [(ngModel)]="hero.canFly">
  <br><br>

  Location: 
  <select [(ngModel)]="hero.location" name="location">
    <option value="Earth">Earth</option>
    <option value="Asgard">Asgard</option>
  </select>
  <br><br>

  <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>

</form>

Hero: {{ hero| json}}
```

Now create the save hero function inside the ts file
```typescript
saveHero(form){
    if(form.invalid){
        alert('form is invalid');
    } else {
        console.log('Form submitted');
    }
}
```

## Call service

We need to create the service function inside the `hero.service.ts` file
```typescript
addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero);
}
```

Now call this service function from the add hero
```typescript
constructor(private heroService: HeroService) { }

saveHero(form){
    if(form.invalid){
        alert('form is invalid');
    } else {
        this.heroService.addHero(this.hero).subscribe();
    }
}
```

## Validate the form 

Add the following below the name field
``` html
<br> Name classes :: {{nameField.className}}
```

## Upload file
Add the following inside the form 
```html 
photo: 
<input type="file" name="file" id="file" (change)="fileChanged($event)">
<br><br>
```

Add file change event
```typescript
fileChanged(){
    let fileElement = document.getElementById('file'); 
    this.hero.photo = fileElement['files'][0];
}
```

Change the service as following
```typescript
addHero(hero:Hero):Observable<Hero>{
    const formData = new FormData();
    for (let key in hero) {
      formData.append(key,hero[key]);
    }
    const headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type','');
    return this.http.post<Hero>(this.heroesUrl,formData,{headers});
}
```