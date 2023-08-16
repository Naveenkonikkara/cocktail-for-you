
/* *Home Component contains the logic for API call for cocktail (Mojito / Margarita) 
   *Templates are designed as cards with cocktail images as background
   *Services used are HTTP and CockTail
   *Constants are imported
   *Once one of the Cocktail Cards are clicked, 
    cocktailClicked method will be called and handles the necessary */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../config/constants';
import { CocktailService } from '../services/cocktail.service';
import { HttpApiService } from '../services/http-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = Constants.Title;
  cockTailList: any[] = [];
  constructor(private httpApi: HttpApiService, private router: Router, private cocktailService: CocktailService) {
    console.log(Constants.COCKTAIL_API);
  }

  cocktailClicked(cockTail: string) {
    this.httpApi.getCocktails(Constants.COCKTAIL_API + cockTail).subscribe((data: any[]) => {
      this.cockTailList = data;
      this.cocktailService.setCocktail(data);
      this.router.navigate(['/cocktails/' + cockTail]);
    });
  }
}
