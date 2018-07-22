# Input / Output

## Input
Define one public variable inside the list component 
```typescript
  selectedHero:Hero
```

Set the following function inside your component
```typescript
  setSelectedHero(id){
    this.selectedHero = this.heroes.find(hero => hero.id === id);
  }
```

Listen to click event of hero list 
```html
<li *ngFor="let hero of heroes" (click)="setSelectedHero(hero.id)">
```

Show the selected hero in html 
```html
 Selected Hero :: {{selectedHero?.name}}
```

Put the `<app-hero-detail></app-hero-detail>` inside the `hero-list.component.html` file.

Set the input variable inside `app-hero-detail.component.ts` file.
```typescript
@Input() hero: Hero;
```

Pass the data with html - `app-hero-list.component.ts` file.
```html
<app-hero-detail [hero]="selectedHero" *ngIf="selectedHero"></app-hero-detail>
```


## Output

Set the variable in `hero-detail-component.ts`
```typescript
@Output() whoIam = new EventEmitter();
```

Set one button to identify the hero inside the list in html 
```html
<button (click)="onIdentityCheck()"> Who I am </button>
```

Put event listner of click event in ts file
```typescript
onIdentityCheck(){
    this.whoIam.emit(this.hero);
  }
```

Change html inside the `hero-list.component.html` file as
```html
<app-hero-detail [hero]="selectedHero" *ngIf="selectedHero" (whoIam)="hilightSelected($event)"></app-hero-detail>
<h2>Hero List</h2>
Selected Hero =  {{selectedHero?.name}}
<li *ngFor="let hero of heroes" (click)="setSelectedHero(hero.id)" [style.background]="hilightId===hero.id?'red':''">
    {{hero.id}} - {{hero.name}}
</li>
```

Add new event inside the `hero-list.component.ts` file as 
```typescript
  hilightSelected(selectedHero){
    this.hilightId = selectedHero.id;
  }
```
