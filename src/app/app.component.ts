import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-my-project';
  defaultFeature : string = "recipe" ;



  navigateTo(selectedFeature: string) {
    this.defaultFeature = selectedFeature;
  }


 

 
    
  
}
