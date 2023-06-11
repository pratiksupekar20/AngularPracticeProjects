import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-iterate',
  templateUrl: './employee-iterate.component.html',
  styleUrls: ['./employee-iterate.component.css']
})
export class EmployeeIterateComponent implements OnInit {
 employee:any=[
   {name:'raj',
    location:'pune',
    salary:234343
   },
   {
    name:'sham',
    location:'mumbai',
    salary:23432
   }
 ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
