import { Observable } from "rxjs";

export class AccountsService {
  
  
    accounts = [
        {
          id: 1,
          name: 'Master Account',
          age: 23,
          address: 'indonesia',
          status: 'active'
        },
        {
          id: 2,
          name: 'Testaccount',
          age: 23,
          address: 'indonesia',
          status: 'inactive'
        },
        {
          id: 3,
          name: 'Hidden Account',
          age: 23,
          address: 'indonesia',
          status: 'unknown'
        }
      ];

      addAccount(name:string, status:string, age:number, id:number, address:string){
        this.accounts.push({name: name, status:status, age: age, id:id, address:address});
      }

      updateStatus(id:number, status:string){
        this.accounts[id].status = status;
    }
    updateAllStatus(status:string){
      this.accounts.map(item => {
        this.accounts[item.status = status]
      })
    }
      getData(id: number) {
        return this.accounts.find(acc => acc.id == id)
      }
}
