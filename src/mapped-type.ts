// mapped types

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

