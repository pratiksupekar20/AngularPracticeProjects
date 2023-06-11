import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { IplComponent } from './ipl/ipl.component';
import { FastComponent } from './fast/fast.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ForExComponent } from './for-ex/for-ex.component';
import { IfelseMultipleComponent } from './ifelse-multiple/ifelse-multiple.component';
import { EmployeeIterateComponent } from './employee-iterate/employee-iterate.component';
import { EmployeeInterfaceComponent } from './employee-interface/employee-interface.component';
import { StyleInAngularComponent } from './style-in-angular/style-in-angular.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapListComponent } from './bootstrap-list/bootstrap-list.component';
import { TablesDemoComponent } from './tables-demo/tables-demo.component';
import { TableEmpWithTwoBindingComponent } from './table-emp-with-two-binding/table-emp-with-two-binding.component';
import { CommunicationComponent } from './communication/communication.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    IplComponent,
    FastComponent,
    IfelseComponent,
    ForExComponent,
    IfelseMultipleComponent,
    EmployeeIterateComponent,
    EmployeeInterfaceComponent,
    StyleInAngularComponent,
    BootstrapListComponent,
    TablesDemoComponent,
    TableEmpWithTwoBindingComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
