// conditional type
// a type  is depend on another type

const p:number = 7;
const q:number = (p>0) ? 1 : 0;

console.log(q);

// conditional type
type typeA = null;
// type typeB = typeA extends string ? string : null;

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
