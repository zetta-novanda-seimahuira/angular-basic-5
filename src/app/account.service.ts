export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          age: 23,
          status: 'active'
        },
        {
          name: 'Testaccount',
          age: 23,
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name:string, status:string){
        this.accounts.push({name: name, status:status});
      }

      updateStatus(id:number, status:string){
        this.accounts[id].status = status;
    }
    updateAllStatus(status:string){
      this.accounts.map(item => {
        this.accounts[item.status = status]
      })
      
  }
}
