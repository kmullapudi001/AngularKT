import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
title:string;
inputValue:string;
  constructor() { 
    this.title = 'welcome to angular';
    this.inputValue = 'input';
  }

  ngOnInit() {
  }

}
