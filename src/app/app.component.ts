
import { Component,  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // zowl Url la bghiti html 3adi, back apostorphe
  styleUrls: ['./app.component.css'] // labghiti ktb css dial 3adoi hna zowel Urls
})
export class AppComponent {

  author: string = "Walid";
  title = this.author  + '\'s First-angular Project';
  //fontSize: number = 16;
  //fontColor: string = 'green';
   
  }

  


