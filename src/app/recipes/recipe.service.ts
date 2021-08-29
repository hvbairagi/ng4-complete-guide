import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://multiplyillustration.com/img/9487ec7398d81017053c85ef20a9fe57.jpg',
      [new Ingredient('Rajma', 1), new Ingredient('Chana', 1)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://multiplyillustration.com/img/9487ec7398d81017053c85ef20a9fe57.jpg',
      [new Ingredient('French Fries', 20), new Ingredient('Bread', 10)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
