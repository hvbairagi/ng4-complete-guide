import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  @Input('recipe') recipe: Recipe;

  ngOnInit() {
    this.recipe = {
      name: 'N/A',
      description: 'N/A',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    };
  }
}
