
import { Recipe } from './../recipe';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [];
  recipe:Recipe = new Recipe("Recipe 1","Recipe One","http://sifatit.com/wp-content/uploads/2012/07/dummy.jpg");
  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelect(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
