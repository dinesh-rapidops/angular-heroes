import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HighlightDirective } from './highlight.directive';
import { HeroFilterPipe } from './hero-filter.pipe';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddHeroRfComponent } from './add-hero-rf/add-hero-rf.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HighlightDirective,
    HeroFilterPipe,
    AddHeroComponent,
    AddHeroRfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
