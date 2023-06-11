import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-in-angular',
  templateUrl: './style-in-angular.component.html',
  styleUrls: ['./style-in-angular.component.css']
})
export class StyleInAngularComponent implements OnInit {
 colors:string='red';
 font_size:string='15px';

  constructor() { }

  ngOnInit(): void {
  }

  change():void{
    this.colors='green';
  }

}
