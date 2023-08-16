/*  Constants can exported to access global constants related to the Application  */

import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
    public static COCKTAIL_API: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    public static Title: string = "CockTail For You";
}