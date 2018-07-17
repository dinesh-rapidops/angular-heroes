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