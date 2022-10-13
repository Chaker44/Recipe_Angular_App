import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeClicked : Recipe = new Recipe("","","");
  constructor() { }

  ngOnInit(): void {
  }





  saveRecipeData(recipeData: Recipe){
    this.recipeClicked = recipeData ;
  }

}
