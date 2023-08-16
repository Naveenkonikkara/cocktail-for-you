/* Cocktail Service is used to set the selected cocktail catagory
   GetCockTailDetails is used to get the cocktail details from the selected Cocktail catagory */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cockTail$ = new BehaviorSubject<any>({});
  selectedCockTail$ = this.cockTail$.asObservable();
  
  constructor() { }

  setCocktail(cockTail: any) {
    this.cockTail$.next(cockTail);
  }

  getCocktailDetails(drinkId: string): any {
    if (Object.keys(this.cockTail$.getValue()).length > 0)
      return this.cockTail$.getValue().drinks.filter((drink: { idDrink: string; }) => drink.idDrink === drinkId);
    else
      return null;
  }

}
