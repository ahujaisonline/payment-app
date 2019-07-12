import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {

  @Input() activeTab;
  searchControl = new FormControl();
  searchCtrlSub: Subscription;
  bankList;
  filteredBanks;
  constructor() { }

  ngOnInit() {
    
    this.createBanks();

     this.searchCtrlSub = this.searchControl.valueChanges.subscribe((val) => {
      this.filteredBanks = [];
       this.bankList.forEach(el => {
          if(el.name.toLowerCase().includes(val)){
            this.filteredBanks.push(el);
          }
       });
    });
  }

  createBanks(){
    this.filteredBanks = [];
    this.bankList = [
      {
        name: "HDFC",
        add: "Delhi"

      },
      {
        name: "ICIC",
        add: "Del",
      },
       {
        name: "HDFC X",
        add: "Delhi"

      },
      {
        name: "SBI",
        add: "Mum",
      }
    ]
  }

}
