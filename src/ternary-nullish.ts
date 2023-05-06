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