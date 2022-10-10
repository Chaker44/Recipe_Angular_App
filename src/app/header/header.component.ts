import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  @Output() selectedFeature = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }



  selectRecipeLink(){
    this.recipesLinkClicked.emit(true);
  }
  
  selectShoppingLink(){
    this.shoppingLinkClicked.emit(true);

  }    

}
