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

type heroSingleType = boolean;
const isHeroSingle:heroSingleType = true;

type heroIncomeType = number | string;
const heroIncome: heroIncomeType = 34353;


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