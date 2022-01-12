import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/account.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
  providers: [AccountsService]
})
export class DetailCardComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private accountService:AccountsService
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  myaccount

  getData(){
    const cardId = this.route.snapshot.paramMap.get('id');
    const intString = Number(cardId)
    this.myaccount = this.accountService.getData(intString)
    console.log(this.myaccount)
    
  }

}
