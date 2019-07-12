import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  tabs;


  ngOnInit() {
    this.createData();
  }

  createData() {
    this.tabs = [
      {
        name: "Debit / Credit",
        active: true,
        id: 1,

      },
      {
        name: "Net banking",
        active: false,
        id:2
      }
    ]
  }

  tabChange(val) {
    this.tabs.forEach(el => {
      el.active = (el.name == val) ? true : false;
    })
  }

}
