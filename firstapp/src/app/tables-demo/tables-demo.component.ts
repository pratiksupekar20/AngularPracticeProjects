import { Component, OnInit } from '@angular/core';
import { Emp } from './table-module';

@Component({
  selector: 'app-tables-demo',
  templateUrl: './tables-demo.component.html',
  styleUrls: ['./tables-demo.component.css']
})
export class TablesDemoComponent {
  
     emp:Emp[]=[{
          name:"raj",
          age:23,
          location:"pune "
     },
     {
      name:"sham",
      age:22,
      location:"mumbai"
     }
     ,{
      name:"allen",
      age:24,
      location:"nagar"
     },
     {
      name:"rohan",
      age:22,
      location:"baramati"
     },{
      name:"shubham",
      age:32,
      location:"pune"
     }
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
