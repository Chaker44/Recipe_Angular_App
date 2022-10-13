import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output("recipe-link-clicked") recipeClicked = new EventEmitter(); 

  @Input("recipe-element") myRecipe : Recipe = new Recipe("","","");   
  constructor() { }

  ngOnInit(): void {
  }






  recipeLinkClicked(){
    this.recipeClicked.emit();
  }

}
