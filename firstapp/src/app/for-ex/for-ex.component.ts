import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-ex',
  templateUrl: './for-ex.component.html',
  styleUrls: ['./for-ex.component.css']
})
export class ForExComponent implements OnInit {
 num:any=[2,3,5,6,7];
  constructor() { }

  ngOnInit(): void {
  }

}
