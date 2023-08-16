/*  CockTail component will list down the selected catagory of CockTails
    Clickable Card Layout template is used which diplays the Images and CockTail Name
    Subscribe the selected cocktail to get the list of cocktails
    Cocktail service is used to get and set cocktail list
    Custom Pipe Filter is used to filter out Alcoholic and Non Alcoholic Cocktails
    Router will navigate to the selected cocktail details page
    When the cocktail list is not present, will navigate to Home Page */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  selectedCockTail: any[] = [];
  drinkDetails: any;
  drinkType: string = '';
  allDrinks: boolean = true;
  alcoholicDrinks: boolean = false;
  nonAlcoholicDrinks: boolean = false;

  constructor(private cocktailService: CocktailService, private router: Router) {}

  ngOnInit() {
    this.cocktailService.selectedCockTail$.subscribe((value) => {
      if(value.drinks !== undefined)
      this.selectedCockTail = value.drinks;
      else
      this.router.navigate(['/home/']);
    });
  }

  drinkClicked(drinkDetails: any){
    this.drinkDetails = drinkDetails;
    this.router.navigate(['/cocktail/'+this.drinkDetails.idDrink]);
  }

  filterDrink(drink: string) {
    this.drinkType = drink;
    if (drink === 'alcoholic') {
      this.allDrinks = false;
      this.alcoholicDrinks = true;
      this.nonAlcoholicDrinks = false;
    } else if (drink === 'nonalcoholic') {
      this.allDrinks = false;
      this.alcoholicDrinks = false;
      this.nonAlcoholicDrinks = true;
    } else {
      this.allDrinks = true;
      this.alcoholicDrinks = false;
      this.nonAlcoholicDrinks = false;
    }
  }

}
