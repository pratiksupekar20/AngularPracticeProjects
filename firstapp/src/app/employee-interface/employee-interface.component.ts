import { Component, OnInit } from '@angular/core';
import { Student, Subject } from './Student.module';

@Component({
  selector: 'app-employee-interface',
  templateUrl: './employee-interface.component.html',
  styleUrls: ['./employee-interface.component.css']
})
export class EmployeeInterfaceComponent implements OnInit {
 
  studentInfo:Student[]=[
    {
           rollNumber:23,
           name:'allen',
           age:22,
           subject:[
            {
            subjectName:'math',
              mark:90
            }
           ]
    },
    {
      rollNumber:22,
      name:'raj',
      age:24,
      subject:[
        {
          subjectName:'java',
          mark:89
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
