# Let's Display some heroes

## Display Hero details

Create new file `src/app/hero.ts` , copy the following content 
```typescript
export class Hero {
  id: number;
  name: string;
}
```

Import file into `app.compontent.ts`.
```typescript
import { Hero } from './hero';
```

Add new hero 
```typescript
  hero: Hero = {
    name:'IronMan',
    id:1
  }
```

Set the hero details in `app.component.html` file
```html
    <h2>{{ hero.name }} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div><span>name: </span>{{hero.name}}</div>
```

Move this to new component - HeroDetailComponent
```cmd 
    ng generate component HeroDetail
```

Set this component inside the `app.component.html` file
```html 
    <app-hero-detail></app-hero-detail>
```

Move the html file content and ts file contets from `app.component.ts` file to `hero-details/hero-details.component.ts`


## Display Hero lists

Create hero list with following command 
```cmd 
    ng generate component HeroList
```

Set this component inside the `app.component.html` file
```html 
    <app-hero-list></app-hero-list>
```

Add list of the heroes inside the file `hero-list/hero-list.component.ts`
```typescript
  heroes: Hero[]= [
    { name:'Thor', id:1},
    { name:'IronMan', id:2},
    { name:'Captain America', id:3},
    { name:'Black Panther', id:4},
    { name:'Ant Man', id:5}
  ];
```

Set the html file with following code 
```html 
<h2>Hero List</h2>
<li *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
</li>
```