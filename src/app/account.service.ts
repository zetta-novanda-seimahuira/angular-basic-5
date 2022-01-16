import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class AccountsService {
 
    accounts = [
        {
          id: 1234556,
          name: 'Jhon ',
          age: 23,
          gender: 'male',
          professions: 'butcher',
          maritalStat: 'single',
          phone:432244344,
          email:'g@mail.com',
          address:
            {
              road: 'Sagittis Road',
              number: 5,
              region: 'Ríos',
              city: 'sidney',
              country: 'Australia',
          }
        },
        {
          id: 1234557,
          name: 'Zenaida Carey ',
          age: 29,
          gender: 'female',
          professions: 'teacher',
          maritalStat: 'married',
          phone:432244348,
          email:'i@mail.com',
          address: 
            {
              road: 'Sagittis Road',
              number: 5,
              region: 'Ríos',
              city: 'sidney',
              country: 'Australia',
          }
        },
      ];

      account(userData){
      if (userData){
        this.accounts.push(userData)
      }
    }

    updateAccount(userData: any, id:number) {
        this.accounts[id] = userData
    }

    // getIndexArray(id: number) {
    //   this.accounts.map((acc) => acc.id).indexOf(id);
    // }

    getDataId(id: number) {
      return this.accounts.find(acc => acc.id == id)
    }

    getDataAccount() {
      return this.accounts
    }


      updateStatus(id:number, status:string){
        // this.accounts[id].status = status;
    }
    updateAllStatus(status:string){
      // this.accounts.map(item => {
      //   this.accounts[item.status = status]
      // })
    }
     
}
