import { RecipeService } from './../recipe.service';

import { Recipe } from './../recipe';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  
  onRecipeSelect(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
