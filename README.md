# Directive / Filters

### Directives
Create new directive with following command
```cmd
  ng generate directive highlight
```

Copy the following code into `highlight.directive.ts`
```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
```

## Filters

Create new directive with following command
```cmd
  ng generate pipe heroFilter
```

Copy the following code into `highlight.directive.ts`
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {
  avengerHeroes:string[] = ['Thor','IronMan','Captain America','Black Panther','Ant Man'];

  transform(value: any, args?: any): any {
    const foundAvenger = this.avengerHeroes.find((hero)=>{
      return hero.toLowerCase() === value.toLowerCase();
    });
    if(foundAvenger){
      return value + ' (Avenger)';
    } else {
      return value;
    }
  }

}
```


## Usage

Copy the following html in `hero-list.component.html`

```html
<app-hero-detail [hero]="selectedHero" *ngIf="selectedHero" (whoIam)="hilightSelected($event)"></app-hero-detail>
<h2>Hero List</h2>
Selected Hero =  {{selectedHero?.name}}
<li *ngFor="let hero of heroes" appHighlight (click)="setSelectedHero(hero.id)" [style.background]="hilightId===hero.id?'red':''">
    {{hero.id}} - {{hero.name | heroFilter}}
</li>
```