# Services

## DI

## Get hero list from service

generate new service with following command
```cmd
ng generate service hero
```

Copy the following function in heroService
```typescript
getHeroes():Hero[]{
    return <Hero[]>[
      { name:'Thor', id:1},
      { name:'IronMan', id:2},
      { name:'Captain America', id:3},
      { name:'Black Panther', id:4},
      { name:'Ant Man', id:5},
      { name:'BatMan', id:6},
      { name:'Wonder Woman', id:7}
    ];
  }
```

Remove the static data from the `hero-list.component.ts` file

Copy following in ngOnInit hook
```typescript
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
```

## Observables

Change the following function in heroService
```typescript
getHeroes():Observable<Hero[]>{
    return of(<Hero[]>[
      { name:'Thor', id:1},
      { name:'IronMan', id:2},
      { name:'Captain America', id:3},
      { name:'Black Panther', id:4},
      { name:'Ant Man', id:5},
      { name:'BatMan', id:6},
      { name:'Wonder Woman', id:7}
    ]);
  }
```

Change the ngOnInit hook as following
```typescript
  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe((heroes)=>{
        this.heroes = heroes;
      })
  }
```