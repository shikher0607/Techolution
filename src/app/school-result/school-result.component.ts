import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-school-result',
  templateUrl: './school-result.component.html',
  styleUrls: ['./school-result.component.css']
})

export class SchoolResultComponent implements OnInit {
  data;
  jsonData;
  studentName: String;
  json;
  constructor(private http: Http) { 
  this.jsonData = this.http.get('../assets/data.json').subscribe(res => this.data = res.json());
  }

  ngOnInit() {
  }

}
