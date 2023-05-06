// type assertion
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