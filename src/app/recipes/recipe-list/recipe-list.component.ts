import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  @Output() recipeEvent = new EventEmitter<Recipe>();

  recipeClicked(recipe: Recipe) {
    this.recipeEvent.emit(recipe);
  }
}
