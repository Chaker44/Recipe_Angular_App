import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-my-project';
  navigateToRecipe : boolean = false;
  navigateToShopping : boolean = false;
  homePage : boolean = true;


 

  navigateToRecipePage()  {
      this.homePage = false;
      this.navigateToRecipe = true ;
      this.navigateToShopping = false ;
    
  }
  navigateToShoopingListPage( ) {

     this.navigateToShopping = true ;
     this.navigateToRecipe = false ;

  }
    
  
}
