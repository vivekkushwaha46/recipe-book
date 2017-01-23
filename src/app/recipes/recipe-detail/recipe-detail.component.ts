import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe:Recipe;
  private recipeIndex:number;
  private subscription: Subscription;

  constructor(private shoppingListService:ShoppingListService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService
            ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }
  
  onAddToShoppingList(){
    this.shoppingListService.addItem(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
