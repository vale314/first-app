import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  route = 'Home'

  onGetRoute(route:string){
    console.log(route)
    this.route = route
  }
}
