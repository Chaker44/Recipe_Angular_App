import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output("recipe-get-data") recipeData = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a Test Recipe","https://www.google.com/search?q=recipes+images&sxsrf=ALiCzsbmvqPnQ0lW8S_2bXZAPbowO3zWGQ:1665420330510&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGkc6Zjtb6AhV6hv0HHYuQAWMQ_AUoAXoECAMQAw&biw=1536&bih=763&dpr=1.25#imgrc=zjNxMzXoDbyGVM"),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2rR9x5UdyRIRzx5_fTMlFo&ust=1665507421485000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMD1u-OQ1voCFQAAAAAdAAAAABAE')
  ]; 
 
  constructor() { }

  ngOnInit(): void {
  }


  getRecipeData(recipeData: Recipe){
    this.recipeData.emit(recipeData); 

    this.recipes.push(recipeData);
  }

}
