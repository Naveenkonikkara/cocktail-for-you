/*  Custom Pipe Filter is used to filter out Alcoholic and Non Alcoholic Cocktails  */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDrink'
})
export class FilterDrinkPipe implements PipeTransform {

  transform(drinks: any[], type: string): any {
    if (!drinks || !type || type === 'all')
      return drinks;
    else
      return drinks.filter(drink => drink.strAlcoholic.toLowerCase() === type);
  }

}
