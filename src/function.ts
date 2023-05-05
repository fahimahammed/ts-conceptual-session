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


// array and object distructure

const dArray:number[] = [ 2, 3, 4, 5, 7];
const [num1, num2] = dArray;
console.log(num1, num2)

const dObj = {
    heroName: "Khan",
    age: 34
}

const {heroName: myFavHeroName} = dObj;
console.log(myFavHeroName);
