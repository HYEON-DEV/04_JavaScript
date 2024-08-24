
class Account {
    #owner;
    #balance;

    constructor ( owner, balance ) {
        this.#owner = owner;
        this.#balance = balance;
    }

    get owner() {
        return this.#owner;
    }
    set owner(value) {
        this.#owner = value;
    }

    get balance() {
        return this.#balance;
    }
    set balance(value) {
        this.#balance = value;
    }

    deposit ( amount ) {
        this.#balance += amount;
    }

    withdraw ( longAmount ) {
        if ( this.#balance - longAmount < 0 ) {
            console.log('잔액이 부족합니다.');
            return;
        }
        this.#balance -= longAmount;
    }

}

const acc = new Account( 'Hello', 15000 );
console.log(`${acc.owner}의 잔액은 ${acc.balance}원`);

acc.deposit(5000);
console.log(`${acc.owner}의 잔액은 ${acc.balance}원`);

acc.withdraw(15000);
console.log(`${acc.owner}의 잔액은 ${acc.balance}원`);

acc.deposit(5000);
console.log(`${acc.owner}의 잔액은 ${acc.balance}원`);

acc.withdraw(15000);
console.log(`${acc.owner}의 잔액은 ${acc.balance}원`);
