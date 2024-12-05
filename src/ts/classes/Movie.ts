import Acquired from "../interfaces/Acquired";

export default class Movie implements Acquired {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly price: number,
        readonly year: number | string,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly time: number,        
    ) {
    }
}


// import Acquired from "../interfaces/Acquired";

// export class Movie implements Acquired {
//     constructor(
//         readonly id: number,
//         readonly title: string,
//         readonly price: number,
//         readonly year: number, 
//         readonly country: string, 
//         readonly slogan: string, 
//         readonly genre: string, 
//         readonly duration: number,
//         readonly discount: number
//     ) {}
// };

// export const avengers = new Movie(100, 'Avengers', 500, 2002, 'USA', 'Never give up!', 'drama', 120, 5);
// export const untouchables = new Movie(101, 'The untouchables', 350, 1987, 'USA', 'Death to the criminals!', 'drama', 120, 15)

// console.log(avengers, untouchables);
