import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
fname = "";
lname = "";
clas = "";
percentage = "";
yop = "";
  constructor() { }

  ngOnInit() {
  }
 perform(){
    alert("Success");
  }
 

}
