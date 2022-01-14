import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {LoggingService} from '../../logging.service';
import { AccountsService } from '../../account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import {Location} from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AccountsService]
})
export class FormComponent implements OnInit  {
  param = {value: 'world'};
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(
              private accountService: AccountsService,
              private fb:FormBuilder,
              public translate:TranslateService,
              private _location: Location
              ){
                translate.setDefaultLang('en'),
                translate.addLangs(['en', 'fr']);

                const browserLang = translate.getBrowserLang();
                translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
              }
  
  userForm: FormGroup;
  genders = ['male', 'female'];


  ngOnInit(){
    this.userForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'professions': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'maritalStat': new FormControl(null, Validators.required),
      'address': new FormGroup({
      'road': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'region': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      })
    })
  }


    onCreateAccount() {
    this.accountService.account(this.userForm.value);
    this._location.back();
    console.log(this.userForm);
    console.log(this.accountService.accounts);
  }

}
