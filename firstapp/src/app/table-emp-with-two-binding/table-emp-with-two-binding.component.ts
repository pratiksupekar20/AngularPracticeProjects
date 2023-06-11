import { Component, OnInit } from '@angular/core';
import { Address1, User } from './table.module';


@Component({
  selector: 'app-table-emp-with-two-binding',
  templateUrl: './table-emp-with-two-binding.component.html',
  styleUrls: ['./table-emp-with-two-binding.component.css']
})
export class TableEmpWithTwoBindingComponent implements OnInit {
  emp:User[]=[];
  //array has been declared here to store value from
  //binding
  //it's datastruture to store value 
  userName:string='';
  userEmail:string='';
  userLocation:string='';
  add1:string='';
  add2:string='';
  pin:number=0;
  message:string='';


  constructor() { }

  ngOnInit(): void {
  }

  saveForm():void{//here initialize class level values from interface
    let userObj:User={
     userName:this.userName,
     userEmail:this.userEmail,
     userLocation:this.userLocation,
     address:{
add1:this.add1,
add2:this.add2,
pin:this.pin
     } as Address1,
     message:this.message

    } as User
    
   
    this.emp.push(userObj);
  }

}
