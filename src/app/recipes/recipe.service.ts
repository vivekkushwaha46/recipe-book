import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

constructor() { }
private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2), 
      new Ingredient('Pork Meat',1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [

    ])
  ];

  getRecipe(){
    return this.recipes;
  }
}
