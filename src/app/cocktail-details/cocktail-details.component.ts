import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  cocktailDetails: any;
  ingredientsKey: string[] = [];
  ingredientsList: string[] = [];

  constructor(private cocktailService: CocktailService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    const drinkId = this.route.snapshot.paramMap.get('id')!;
    let details = this.cocktailService.getCocktailDetails(drinkId);
    if (details !== null) {
      [this.cocktailDetails] = this.cocktailService.getCocktailDetails(drinkId);
    } else {
      this.router.navigate(['/home/']);
    }
    // [this.cocktailDetails] = this.cocktailService.getCocktailDetails(drinkId);
    this.ingredientsKey = Object.keys(this.cocktailDetails).filter(str => str.includes('strIngredient'));
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientsKey.forEach(element => {
      if(this.cocktailDetails[element] !== null)
      this.ingredientsList.push(this.cocktailDetails[element]);
    });
  }


}
