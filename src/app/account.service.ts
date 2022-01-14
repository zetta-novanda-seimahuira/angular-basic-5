import { Injectable } from "@angular/core";

export class AccountsService {
  // accountAdd: EventEmitter
    accounts = [
        // {
        //   id: 1234556,
        //   name: 'Jhon ',
        //   age: 23,
        //   gender: 'male',
        //   professions: 'butcher',
        //   maritalStat: 'single',
        //   phone:432244344,
        //   email:'g@mail.com',
        //   address:
        //     {
        //       road: 'Sagittis Road',
        //       number: 5,
        //       region: 'Ríos',
        //       city: 'sidney',
        //       country: 'Australia',
        //   }
        // },
        // {
        //   id: 1234557,
        //   name: 'Zenaida Carey ',
        //   age: 29,
        //   gender: 'female',
        //   professions: 'teacher',
        //   maritalStat: 'married',
        //   phone:432244348,
        //   email:'i@mail.com',
        //   address: 
        //     {
        //       road: 'Sagittis Road',
        //       number: 5,
        //       region: 'Ríos',
        //       city: 'sidney',
        //       country: 'Australia',
        //   }
        // },
      ];

      account(userData){
      if (userData){
        this.accounts.push(userData)
      }
    }

    getDataId(id: number) {
      return this.accounts.find(acc => acc.id == id)
    }

    getDataAccount() {
      return this.accounts
    }



      // addAccount(id:number, name:string, age: number, gender:string, professions:string, maritalStat:string, road:string, number:number, region:string, city:string, country:string  ){
      //   this.accounts.push({id:id, name: name, age: age, gender:gender, professions:professions, maritalStat:maritalStat, [address]:address.name });
      // }

      // addAccount(id: number, name: string, age: number, gender:string, professions: string, maritalStat: string, road: string, number: number, region: string, city: string, country: string): void {
      //   const account = {
      //     id, name, age, gender, professions, maritalStat, address: [
      //           {road},
      //           {number},
      //           {region},
      //           {city},
      //           {country}
      //     ]
      //   };
      //   this.accounts.push(account);
      // }

    // interface Account {
    //   id: number;
    //   name: string;
    //   age: number;
    //   gender: string;
    //   professions: string;
    //   maritalStat: string;
    //   address:
    //     {
    //       road: string;
    //       number: number;
    //       region: string;
    //       city: string;
    //       country: string;
    //   }
    // }

    // addAccount(id: number, name: string, age: number, gender:string, professions: string, maritalStat: string, road: string, number: number, region: string, city: string, country: string): void {
    //   const account = {
    //     id, name, age, gender, professions, maritalStat, address: [
    //           {road},
    //           {number},
    //           {region},
    //           {city},
    //           {country}
    //     ]
    //   };
    //   this.accounts.push(account);
    // }

    

    // addAccount(account: Account){
    //   this.accounts = [...this.accounts, account];

    // }

      updateStatus(id:number, status:string){
        // this.accounts[id].status = status;
    }
    updateAllStatus(status:string){
      // this.accounts.map(item => {
      //   this.accounts[item.status = status]
      // })
    }
     
}
