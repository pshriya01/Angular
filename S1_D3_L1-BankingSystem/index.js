var BankAccount = /** @class */ (function () {
    function BankAccount(accNum, accHolder, bal) {
        this.accountNumber = accNum;
        this.accountHolder = accHolder;
        this.balance = bal;
        this.transactions = [];
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        this.transactionLogging("Deposit", amount);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log('Does not have sufficient balance');
        }
        else {
            this.balance = this.balance - amount;
            this.transactionLogging("Withdrawal", amount);
        }
    };
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
    };
    BankAccount.prototype.transactionLogging = function (type, amount) {
        var transaction = {
            type: type,
            amount: amount,
            timestamp: new Date()
        };
        this.transactions.push(transaction);
        console.log(this.transactions);
    };
    return BankAccount;
}());
var myAcc = new BankAccount("123ABC", "Tony", 900);
console.log(myAcc);
myAcc.getBalance();
myAcc.deposit(100);
myAcc.getBalance();
myAcc.withdraw(500);
myAcc.getBalance();
