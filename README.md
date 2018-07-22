# Routing 

Add new module
```cmd 
ng generate module app-routing --flat --module=app
```

Set the `app-routing.module.ts` file with following 
```typescript
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
```

Set the `app.component.html` file with following content
```html 
<h1>{{title}}</h1>
<nav>
    <a routerLink="/heroes">Heroes</a> <br>
    <a routerLink="/add-hero">Add Hero</a>
</nav>
<router-outlet></router-outlet>
```

Now let's fix the little issue when saving the hero form 
goto `add-hero.component.ts` file and change the `saveHero` function as following 

``` typescript
saveHero(form) {
  if (form.invalid) {
    alert('form is invalid');
  } else {
    this.heroService.addHero(this.hero).subscribe(() => {
      this.router.navigate(['heroes']);
    });
  }
}
```

Set the constructor as following in `add-hero.component.ts`
```typescript
constructor(private heroService: HeroService, private router: Router) { }
```

with following import statement
```typescript
import {Router} from '@angular/router';
```

Create the separate hero detail page , for this first let's change the navigation from list page. Change following to `hero-list-component.html`
```html
<h2>Hero List</h2>
<li *ngFor="let hero of heroes"
    [routerLink]="['/hero-detail', 5]">
  {{hero.name}}
</li>
```

Add new method inside the `hero.service.ts`
```typescript
 getHeroDetail(id):Observable<Hero>{
    return this.http.get<Hero[]>(this.heroesUrl+'/'+id);
  }
```  

Change the following inside the `hero-detail.component.ts` file
```typescript
constructor(private route: ActivatedRoute,
            private heroSerivce: HeroService) { }

ngOnInit() {
  this.heroSerivce.getHeroDetail(this.route.snapshot.params.id)
    .subscribe((data) => {
      this.hero = data;
    });
}
```
with following import statement 
```typescript
import {ActivatedRoute} from '@angular/router';
import { HeroService } from '../hero.service';
```


