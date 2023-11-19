
class BankAccount {
      accountNumber: string;
     accountHolder: string;
     balance: number;
     transactions: Transaction[] 

     constructor(accNum:string,accHolder:string,bal:number) {
        this.accountNumber=accNum
        this.accountHolder=accHolder
        this.balance=bal
        this.transactions=[]
     }
    
     deposit(amount: number) {
        this.balance=this.balance+amount
        this.transactionLogging("Deposit",amount)
     }

     withdraw(amount: number) {
        if(amount > this.balance){
            console.log('Does not have sufficient balance')
        }else{
            this.balance=this.balance-amount
            this.transactionLogging("Withdrawal",amount)
        }
     }

     getBalance() {
        console.log(this.balance)
     }

     transactionLogging(type: string,amount: number) {
          const transaction:Transaction = {
               type,
               amount,
               timestamp: new Date()
          }

          this.transactions.push(transaction)
          console.log(this.transactions)
     }

}


interface Transaction {
    type: string;
    amount: number;
    timestamp: Date
}



 var myAcc =new BankAccount("123ABC","Tony",900)

console.log(myAcc)

myAcc.getBalance()

myAcc.deposit(100)

myAcc.getBalance()

myAcc.withdraw(500)

myAcc.getBalance()