// Primitive types
/**
 * string
 * number
 * boolean
 * null
 * undefined
 */
const str:string = "Programming Hero";
const age: number = 23;
const isStudent: boolean = true;

//  use any type is not best practice.
let hello;
hello = "ssd";
hello = 23;
hello = null;

// =======================================================================
// array and tuples
// =======================================================================
const heros:string[] = ["Sakib Khan", "Bapparaj", "Ananta Jalil", "Siam"];
const numbers:number[] = [4, 2, 6, 7];
const heroInfo = ["Sakib Khan", "Actor", 30, true];
heroInfo.push(false)

// tuples
const heroTuple: [number, string, boolean] = [ 40, "Khan", false];
heroTuple[0] = 30;


// object in ts
const heroObj: {
    readonly name: string;
    age: number;
    profession: string;
    isMarried: boolean;
    wifeName?: string; // optional type
    cinemaName: string;
} = {
    name: "Sakib",
    age: 30,
    profession: "Actor",
    isMarried: false,
    cinemaName: "Ami tomar"
}
//heroObj.name = "Khan"; // readonly property

//=======================================================================
// function in Ts
// ======================================================================

// normal function
function heroFunc(name:string, age: number = 45):string { // default any use kora jabe na
    return `Name: ${name}, Age: ${age}`;
}
heroFunc("khan")

// arrow function
const heroArrowFunc = (name: string, age: number):string => {
    return `Name: ${name}, Age: ${age}`;
}

const heroBank: {
    name: string;
    currentBalance: number;
    deposite(money: number):  number
} = {
    name: "Khan",
    currentBalance: 40000,
    deposite(money: number){
        return this.currentBalance + money;
    }
}

// =======================================================================
// Spread Operator and Rest Parameter
// =======================================================================

// spread operator 
const heroArr1 = ["khan", "anika", "sithy", "agun"];
const heroArr2 = ["sakib", "faruk", "fahim", "mezba"];
heroArr1.push(...heroArr2);
console.log(heroArr1);

// rest parameter
const heroScore = (...scores: number[]): string =>{
    let sum: number = 0;
    scores.map(element => {
        sum = sum + element;
    });
    return `Scores are : ${sum}`
}

console.log(heroScore(3, 4, 5, 6, 56));

// =======================================================================
// array and object distructure
// =======================================================================

const dArray:number[] = [ 2, 3, 4, 5, 7];
const [num1, num2] = dArray;
console.log(num1, num2)

const dObj = {
    heroName: "Khan",
    age: 34
}

const {heroName: myFavHeroName} = dObj;
console.log(myFavHeroName);


// =======================================================================
// Type alias
// =======================================================================
type heroSingleType = boolean;
const isHeroSingle:heroSingleType = true;

type heroIncomeType = number | string;
const heroIncome: heroIncomeType = 34353;

type heroType = {
    name: string;
    age: number;
    isBooked: boolean;
}

const hero1:heroType = {
    name:"Khan",
    age: 23,
    isBooked: false
}

const hero2: heroType = {
    name:"Bappi",
    age: 30,
    isBooked: true
}

// type in function return
type incType = (a: number, b: number) => number
const increaseNum = (
    num1:number, 
    num2: number,
    increaseFunc: incType
    ) => {
        return increaseFunc(num1, num2);
    }

console.log(increaseNum(10, 20, (a, b)=> a*b+2))
console.log(increaseNum(10, 20, (a, b)=> a/b+2))
console.log(increaseNum(10, 20, (a, b)=> a-b+2))

// =======================================================================
// interface
// =======================================================================

interface IHero{
    name: string,
    age: number
}

type Hero={
    name: string,
    age: number
}

// type HeroFunc = (name: string, age:number) => string
// type action = string
// type alias => object, function, array

const HeroInfo:Hero = {
    name: "khan",
    age: 42
}

// =======================================================================
// UNION and INTERSECTION
// =======================================================================
type heroTypeA = {
    name: string,
    age: number
}

// type heroTypeB = {
//     name: string,
//     age: number,
//     experience: string,
//     actingSector: string
// }
// enum heroCategory {
//     natok = "natok",
//     cinema = "cinema",
//     shortFlim = "short flim"
// }
type heroTypeB = heroTypeA & {
    experience: string,
    actingSector: string
    category: "natok" | "cinema" | "shortFlim"
}

const myFavHero: heroTypeA | heroTypeB = {
    name: "Ananta Jalil",
    age: 32,
    experience: "3 year",
    actingSector: "soto porda",
    category: "natok"
}

// =======================================================================
// NULL, UNKNOWN and NEVER
// =======================================================================
// null type
const myHero = (name: string | null):void =>{
    if(name === null){
        console.log("I have no hero!");
    }
    else{
        console.log(`My hero is ${name}`);
    }
}

myHero("khan");
myHero(null);

// unknown type
const guessSomething = (myGuess: unknown) =>{
    console.log(myGuess);
}
guessSomething(34)
guessSomething("Pakhi")
guessSomething(null)
guessSomething(undefined)


// never type - koono kisu return korbe na. error throw korbe.
const errorMsg = (message: string, errorCode: number): never =>{
    throw new Error(`${errorCode} : ${message}`);
}
errorMsg("Bhai amr vul hoya gasa", 401);

// =======================================================================
// TERNARY and NULLISH
// =======================================================================
// ternary operator
const isHeroAvailable: boolean = true;

if(isHeroAvailable){
    console.log("Hero is available!");
}
else{
    console.log("Hero is not available")
}

// with ternary operator
const checkAvailablity:string = isHeroAvailable ? "Hero is available" : "Hero is not available"
console.log(checkAvailablity)

// nullish operator
// check null and undefined
const inputSomething:unknown = null;
const outSomething = inputSomething ?? "No input";
const outSomething2 = inputSomething ? "kisu asa" : "kisu nai"
console.log(outSomething);
console.log(outSomething2);

// =======================================================================
// Type Assertion
// =======================================================================

const thinkSomething:unknown = 34.9484;
console.log((thinkSomething as number).toFixed(2))

const myLuckyNum = (num: string | number):number | string | undefined=>{
    if(typeof num === 'string'){
        return `My lucky num is ${num}`
    }
    else if(typeof num === 'number'){
        return num;
    }
}

const lucky1 = myLuckyNum("34") as string;
const lucky2 = myLuckyNum(34) as number;
console.log(lucky1, lucky2);

// =======================================================================
// GENERIC
// =======================================================================

// generic ->>>> generalization... 

// const myNumbers: Array<number> =  [1, 2, 3, 4, 5];
// const myStrings: Array<string> = ['hello', 'hi', 'ok', 'thanks'];
// const myBooleans: Array<boolean> = [true, false, false, true];

type myGeneric<T> = Array<T>

const myNumbers: myGeneric<number> =  [1, 2, 3, 4, 5];
const myStrings: myGeneric<string> = ['hello', 'hi', 'ok', 'thanks'];
const myBooleans: myGeneric<boolean> = [true, false, false, true];

type ourInfoType = {
    name: string,
    age: number,
    profession: string
}

const ourInfo: myGeneric<ourInfoType> = [
    {name: "Fahim", age: 32, profession: "Engineer"},
    {name: "Mezba", age: 22, profession: "Web developer"},
    {name: "Jhankar", age: 39, profession: "Web developer"},
    {name: "Shanto", age: 12, profession: "Student"}
]

// generic with tuple
type myGenTuple<X, Y> = [X, Y];
const A: myGenTuple<string, number> = ["Fahim", 32]; 

// generic in interface
interface heroInterface<T, P = null>{
    name: string;
    status: T;
    age?: P
}

const Hero1:heroInterface<string> = {
    name: "KHan",
    status: "Available"
}
const Hero2:heroInterface<boolean> = {
    name: "KHan",
    status: false
}


// generic in function
const myFunc = <X, Y>(param1: X, param2: Y): string =>{
    return `Param1: ${param1} and Param2:${param2}`;
}

const mySalary = myFunc<string, number>("Fahim", 400000000);
const mySalary1 = myFunc<string, string>("Karim", "400000000");
const mySalary2 = myFunc<string, null>("Sokina", null);
const mySalary3 = myFunc<number, string>(23, "Chumki");


// generic constraints
// generic function create kora sakane object hisabe <t> patabo ata
// kisu problem hobe jakono object input korta parbo tai extends korbo
type engineerType= { // amra chaila interface o use korta pari
    name: string;
    age: number;
    position: string;
    salary: number
}
//mandatory type o toiri korta pari
const EngineerInfo = <T extends engineerType>(info: T) =>{
    const newInfo = {...info, status: "Active"};
    return newInfo;
}

const engineer1:engineerType = {
    name: "Fahim",
    age: 23,
    position: "Web Developer",
    salary: 500000000
}

// const newEngineerInfo = EngineerInfo({issa: "Kisu dibo na"})
const newEngineerInfo = EngineerInfo(engineer1)


// generic keyof contraints
type movieType = {
    name: string;
    duration: number;
    catagory: string;
}

type manualMovieType = "name" | "duration" | "category" ;
type movieTypeKeyOf = keyof movieType // "name" | "duration" | "category"

const getValue = <X, Y extends keyof X>(data: X, key: Y) => {
    console.log(data[key]);
}

const a = getValue({name: "fahim", duration: 23, catagory: "Cinema"}, 'name');


// =======================================================================
// conditional type
// =======================================================================

// a type  is depend on another type

const p:number = 7;
const q:number = (p>0) ? 1 : 0;
console.log(q);

// conditional type
type typeA = null;
type typeB = typeA extends string ? string : null;

type typeC = string;
type typeD = number;

// nested conditional type
type typeE = typeC extends string ? string : typeD extends number ? number : null;

/// example
type friend = {
    friend1: string;
    friend2: string;
    friend3: string;
}

// type searchFriend<T, U> = T extends U ? true : false;
// type result1 = searchFriend<friend, {friend5: string}>;

type friendKey = keyof friend; // friend1 | friend2 | friend3
type searchFriend<T, U> = U extends keyof T ? true : false;
type result1 = searchFriend<friend, 'friend2'>;

// remove friend
type myFriendList = 'faruk' | 'sokina' | 'beder maya';
type removeFriend<T, R> = T extends R ? never : T;
type currentList = removeFriend<myFriendList, 'sokina'>;

// =======================================================================
// Mapped type
// =======================================================================

const myLuckyNumbers = [1, 2, 3, 4, 5];
const myLuckyStrings = myLuckyNumbers.map(num => num.toString());
console.log(myLuckyStrings);

type listOfFriend = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: string;
}

type readOnlyListOfFriend = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: string;
}

type listofFriendWithKey<T> = {
    //[key in keyof listOfFriend] : listOfFriend[key];
    readonly [key in keyof T] : T[key];
}

const f:listofFriendWithKey<{name: string}> = {name: "fahiim"};
//f.name = 'khan'; // cannot assign name because it is readonly

// =======================================================================
// OOP
// =======================================================================
// =======================================================================
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
// key of  guard
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

// ===================================================================
// access modifier
// ===================================================================
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


// encapsulation
//private, protected