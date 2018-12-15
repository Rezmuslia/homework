const atm = {
    money: 10000,
    debit(amount){
        this.money= this.money + amount;
    },
    credit(amount){
        if (this.money < amount){
            return 0;
        }
        this.money = this.money-amount;
        return amount;
    }
}

atm.credit(1000);
console.log(atm.money);



