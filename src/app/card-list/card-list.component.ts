import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  accounts: {id:number, }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.getDataAccount();
    console.log(this.accounts)
  }

  filteredName = this.accountsService.filteredName
  // onUpdateAllStatus(status:string){
  //   this.accountsService.updateAllStatus(status)
  // }


}
