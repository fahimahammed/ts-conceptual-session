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