import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {LoggingService} from '../../logging.service';
import { AccountsService } from '../../account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import {Location} from '@angular/common';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AccountsService]
})
export class FormComponent implements OnInit  {
 
  dataComponent :any;
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(
              private accountService: AccountsService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              public translate:TranslateService,
              public readonly swalTargets: SwalPortalTargets,
              private _location: Location
              ){
                translate.setDefaultLang('en'),
                translate.addLangs(['en', 'fr']);
                
                const browserLang = translate.getBrowserLang();
                translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
              }
  
  userForm: FormGroup;
  genders = ['male', 'female'];
  statusForm:string


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

    this.userForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }
    onCreateAccount() {
      if(this.userForm.valid){
        this.accountService.account(this.userForm.value);
        Swal.fire('Success')
        console.log(this.statusForm);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' fields are not valid!',
        })
      }
    
    console.log(this.userForm);
    console.log(this.accountService.accounts);
  }

    updateAccount() {
      const cardId = this.route.snapshot.paramMap.get('id');
      const intString = Number(cardId)
      const data = this.accountService.getDataId(intString)
      this.userForm.patchValue( {
        'id': data.id,
        'name': data.name,
        'age': data.age,
        'gender': data.gender,
        'professions': data.professions,
        'phone': data.phone,
        'email': data.email,
        'maritalStat': data.maritalStat,
        'address': {
          'road': data.address.road,
          'number': data.address.number,
          'region': data.address.region,
          'city':data.address.city,
          'country': data.address.country
        }
      })
    }

}
