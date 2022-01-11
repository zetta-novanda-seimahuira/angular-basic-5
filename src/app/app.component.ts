import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
  }
  title = 'angular-basic-5';
  // accounts: {name: string, status:string}[] = [];

  // constructor(private accountsService: AccountsService) {}

  // ngOnInit() {
  //   this.accounts = this.accountsService.accounts;
  // }

  // onUpdateAllStatus(status:string){
  //   this.accountsService.updateAllStatus(status)
  // }

}
