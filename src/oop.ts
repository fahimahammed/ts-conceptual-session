// create class
class Person {
    //name: string;
    age: number;

    constructor(public cName: string, cAge: number) {
        //this.name = cName;
        this.age = cAge;
    }

    printDetails() {
        console.log(`Name: ${this.cName} and Age: ${this.age}`);
    }
}

const personInfo = new Person("Fahim", 23);
console.log(personInfo)


// inharitance
class Person1 {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    show() {
        console.log(`Name: ${this.name} , Age: ${this.age} and address: ${this.address}`);
    }
}

class Developer extends Person1 {
    salary: number;

    constructor(name: string, age: number, address: string, salary: number) {
        super(name, age, address);
        this.salary = salary;
    }

    showDetails() {
        console.log(`Name: ${this.name} , Age: ${this.age}, address: ${this.address}, and salary ${this.salary}`);
    }
}



// type guard
// kono type k badha dawa
// keyof  guard
type typeOfData = number | string;
const doSomething = (a: number | string): number | string => {
    if (typeof a === 'number') {
        return a + 10;
    }
    return "It is string";
}

console.log(doSomething('abc'));
console.log(doSomething(3));


// in gaurd
type personA = {
    name: string;
    phone: number;
}

type personB = {
    name: string;
    address: string;
    profession: string;
}

const getInfo = (person: personA | personB) => {
    if ('phone' in person) {
        return `Type A: ${person.phone}`;
    }
    else if ('profession' in person) {
        return "type b";
    }
}

const p1: personA = { name: 'fahim', phone: 2321 };
console.log(getInfo(p1));


// instance of gaurd
class P {
    position: string;
    salary: number;
    constructor(position: string, salary: number) {
        this.position = position;
        this.salary = salary;
    }

    showJob() {
        console.log(`Job: ${this.position} and salary: ${this.salary}`);
    }
}

class P1 extends P {
    constructor(position: string, salary: number) {
        super(position, salary);
    }
    showStatusOfP1() {
        const status = this.salary > 5000 ? "Rich" : "Poor";
        console.log(status);
    }
}

class P2 extends P {
    constructor(position: string, salary: number) {
        super(position, salary);
    }
    showStatusOfP2() {
        const status = this.salary > 5000 ? "Rich" : "Poor";
        console.log(status);
    }
}

function findJobHolder(person: P) {
    if (person instanceof P1) {
        person.showStatusOfP1();
    }
    else if (person instanceof P2) {
        person.showStatusOfP2()
    }
    else {
        person.showJob()
    }
}


const instanceofP1 = new P1("developer", 343);
const instanceofP2 = new P2("developer", 13430);

findJobHolder(instanceofP1);
findJobHolder(instanceofP2);


// access modifier
// public, private, protected
class MyAccount {
    accountName: string;
    private balance: number;
    protected id: number;

    constructor(accountName: string, balance: number, id: number) {
        this.accountName = accountName;
        this.balance = balance;
        this.id = id;
    }
}

const amarSommod = new MyAccount("Fahim Ahammed", 34, 101);
//amarSommod.balance = 0;
console.log(amarSommod);

class WifiAccount extends MyAccount {
    show() {
        this.id // protected data accessable in class
    }
}


/// getter and setter method
class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    //getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }

    //setter
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }
}

const myAccount = new BankAccount(444, "Persian", 30);
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);


// Polymorphism -> jar onk rup.. 
class Father {
    showInfo(): void {
        console.log("Father");
    }
}

class Son1 extends Father {
    showInfo(): void {
        console.log("Son-1");
    }
}

class Son2 extends Father {
    showInfo(): void {
        console.log("Son-2");
    }
}

function show(param: Father) {
    param.showInfo();
}

const x = new Father();
const y = new Son1();
const z = new Son2();
show(x);
show(y);
show(z);


// Abstraction
// hide implementaion of a method
// interface
// abstract class 

interface ICar{
    start():void;
    stop():void;
}

class MyCar implements ICar {
    start(): void {
        console.log("Start engine")
    }
    stop(): void {
        console.log("Engine stop")
    }
    ride(){
        console.log("test ride")
    }
}

const car1 = new MyCar();

// abstract class
abstract class MyBus {
    abstract start(): void ;
    abstract stop(): void;
}

class Bus extends MyBus{
    start(): void {
        console.log("start")
    }
    stop(): void {
        console.log("stop")
    }
    ride(){
        console.log("test ride")
    }
}

const bus1 = new Bus();
