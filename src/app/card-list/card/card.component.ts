import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../account.service';
import { LoggingService } from '../../logging.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [LoggingService]
})
export class CardComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountService:AccountsService
    ){
  }
  ngOnInit(): void {
  }

  @Input() account: {name: string, age: string, gender:string };
  @Input() id: number;

  onSetTo(status: string) {
  //  this.accountService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
  }

}
