import { Component, EventEmitter, Output,  } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [LoggingService]
})
export class FormComponent  {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService){}


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount( accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }



 

}
