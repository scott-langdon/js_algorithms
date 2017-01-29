// Objects and Object-Oriented Programming
function Checking(amount) {
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function
}


// example 1
function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount) {
    if (amount <= this.balance) {
            this.balance -= amount;
    }
    if (amount > this.balance) {
        print("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}

// example 2
function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount; }
    if (amount > this.balance) {
        print("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}
var account = new Checking(500); account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
print(account.toString()); // Balance: 750



// Recursion
function factorial(number) {
    if (number == 1) {
        return number;
    }
    else {
        return number * factorial(number-1);
    }
}
print(factorial(5));

// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5*4*3*factorial(2)
// 5*4*3*2*factorial(1)
// 5*4*3*2*1
// 5*4*3*2
// 5*4*6
// 5*24
// 120

// Variable Scope: Part 3
function showScope() {
    scope = "local";
    return scope;
}
scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"
print(scope); // displays "local"

// Variable Scope: Part 2
function showScope() {
    var scope = "local";
    return scope;
}
var scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"

// Variable Scope
function showScope() {
    return scope;
}
var scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "global"


// Functions
function curve(arr, amount) {
for (var i = 0; i < arr.length; ++i) {
      arr[i] += amount;
   }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);

// Repetition Constructs
var number = 1; varsum=0;
while (number < 11) {
   sum += number;
++number; }
print(sum); // displays 55


// The switch statement
var monthNum = readline();
var monthName;
switch (monthNum) {
    case "1":
        monthName = "January";
        break;
    case "2":
        monthName = "February";
        break;
    case "3":
        monthName = "March";
        break;
    case "4":
        monthName = "April";
        break;
    case "5":
        monthName = "May";
        break;
    case "6":
        monthName = "June";
        break;
    case "7":
        monthName = "July";
        break;
    case "8":
        monthName = "August";
        break;
    case "9":
        monthName = "September";
        break;
    case "10":
        monthName = "October";
        break;
    case "11":
        monthName = "November";
        break;
    case "12":
        monthName = "December";
        break;
    default:
        print("Bad input");
}
