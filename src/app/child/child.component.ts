import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fnameData:any;
  @Input() lnameData:any;

  listArray = [{"fname":"abc","lname":"xyz"}];
  constructor() { }

  GetList(){
    return this.listArray;
  }

  UpdateList(obj:any){
    this.listArray.push(obj);
  }

  DeleteList(obj:any){
    this.listArray=[{"fname":"","lname":""}];
  }

  ngOnInit(): void {
  }

}
