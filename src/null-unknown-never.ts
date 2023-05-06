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
