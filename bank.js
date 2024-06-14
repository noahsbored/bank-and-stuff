

let balance = 0;


function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${balance}`);
    } else {
        console.log(' must be positive.');
    }
}


function withdraw(amount) {
    if (amount > balance) {
        console.log('you dont got enough');
    } else if (amount <= 0) {
        console.log('gotta be positive');
    } else {
        balance -= amount;
        console.log(`withdrew $${amount}. current balance $${balance}`);
    }
}


function balanc() {
    console.log(`current balance $${balance}`);
}


function bank() {
    deposit(1000); 
    withdraw(250);  
    balanc();  

    withdraw(800);  
    balanc();  
}


bank();
