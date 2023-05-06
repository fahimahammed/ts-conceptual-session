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