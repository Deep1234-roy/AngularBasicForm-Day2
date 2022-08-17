import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataTransferPractice';
  firstName = '';
  lastName = '';
  inputObj = {fname:"",lname:""};
  @ViewChild(ChildComponent) viewData:any;
  FirstNameValue= '';
  LastNameValue= '';
  PassData(fname:any,lname:any){
    this.firstName=fname;
    this.lastName=lname;
    this.inputObj = {fname:fname,lname:lname};
    this.viewData.UpdateList(this.inputObj);
  }
  
  ResetFunctionality(){
    this.FirstNameValue = ' ';
    this.LastNameValue = ' ';
  }
  DeleteData(){
    this.inputObj = {fname:"",lname:""};
    this.viewData.DeleteList(this.inputObj);
  }
}
