import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://multiplyillustration.com/img/9487ec7398d81017053c85ef20a9fe57.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://multiplyillustration.com/img/9487ec7398d81017053c85ef20a9fe57.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
