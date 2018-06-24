# HTTP

## Get all heroes with http

import `HttpClientModule` inside `app.module.ts`

inject `HttpClient` inside `hero.service.ts`
```typescript
constructor(private http:HttpClient) { }
```

set the heroes url inside `hero.service.ts`
```typescript
heroesUrl = 'http://localhost:3000/heroes';
```

modify getHeroes service 
```typescript
getHeroes():Observable<Hero[]>{
  return this.http.get<Hero[]>(this.heroesUrl);
}
```