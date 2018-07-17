#Routing 

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


