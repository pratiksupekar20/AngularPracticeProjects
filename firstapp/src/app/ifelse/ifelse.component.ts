import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

 second:boolean=true;
  constructor() {


   }

  ngOnInit(): void {
  }

  templates():void{
    this.second=!this.second;
  }
    
}
