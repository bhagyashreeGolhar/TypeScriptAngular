import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bhagyashree';
  btn: string = 'My Button';
  counter=0;

  //html attribute binding
  isDisabled:boolean=true
  imageSource:string= '../download.png'

  //stlye attribute binding

  bgcolor:string='Red';
  h2color:string="white";

  //Event binding
  incrementCounter()
  {
    this.counter++;
  }


//Attribute Directive

  //two-way binding (ng model)
  name:string='Sakshi';

  //ng class
  text_class:string="text_class";

  //ng style
  textcolor:string="yellow";

//Structure Directive

  //ngIf
  isLoggedin:boolean=false

  //ngFor
  names:string[]=["Sakshi","Bhagyashree","Sagar"]

  //ngSwitch
  grade:string='B'


//pipes

  pipe:string='pipes';
  today:number=Date.now();
}
