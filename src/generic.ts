// generic- generalization... 

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

const abc: manualMovieType = 'name';
const def: movieTypeKeyOf = 'duration'

const getValue = <X, Y extends keyof X>(data: X, key: Y) => {
    console.log(data[key]);
}

const a = getValue({name: "fahim", duration: 23, catagory: "Cinema"}, 'name');
