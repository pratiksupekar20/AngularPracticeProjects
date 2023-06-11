import { Component } from '@angular/core';


@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent {/* export for class can access other module or component */

 name:string;
 lastName:string;

 totalAmt:number;
 year:number;
 totalRate:number;
 all:number=0;
 



 constructor(){

  this.name="pratik";
  this.lastName="supkear";
  this.totalAmt=40000;
  this.year=2;
  this.totalRate=7;
 
  
 }
 clickme(name:string):void{
  alert("are you open");
 }

 
}
