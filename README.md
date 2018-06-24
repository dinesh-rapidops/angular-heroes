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
import { Hero } from '../hero';
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

Add list of the heroes inside the 


