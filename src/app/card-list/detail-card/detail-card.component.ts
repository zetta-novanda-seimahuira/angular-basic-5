import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/account.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],

})
export class DetailCardComponent implements OnInit {

  dataComponent :any;
  constructor(
    private route:ActivatedRoute,
    private accountService:AccountsService
  ) { 
    this.dataComponent = this.accountService.getDataId

  }

  ngOnInit(): void {
    this.getData()
  }
  myaccount:any

  getData(){
    const cardId = this.route.snapshot.paramMap.get('id');
    const intString = Number(cardId)
    this.myaccount = this.accountService.getDataId(intString)
  }

}
