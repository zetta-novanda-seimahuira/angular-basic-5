import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [AccountsService]
})
export class CardListComponent implements OnInit {

  accounts: {name: string, status:string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onUpdateAllStatus(status:string){
    this.accountsService.updateAllStatus(status)
  }


}
