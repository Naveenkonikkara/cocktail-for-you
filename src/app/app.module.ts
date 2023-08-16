import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { FilterDrinkPipe } from './pipes/filter-drink.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailsComponent,
    CocktailDetailsComponent,
    FilterDrinkPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
