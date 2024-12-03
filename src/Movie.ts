import Suitable from "./Suitable";

export class Movie implements Suitable {
    id: number;
    title: string;
    price: number;
    year: number;
    country: string; 
    slogan: string;
    genre: string;
    duration: number;
    discount?: number

    constructor(
        id: number,
        title: string,
        price: number,
        year: number, 
        country: string, 
        slogan: string, 
        genre: string, 
        duration: number,
        discount?: number
    ) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.year = year,
        this.country = country,
        this.slogan = slogan,
        this.genre = genre,
        this.duration = duration,
        this.discount = discount
    }
};

export const avengers = new Movie(100, 'Avengers', 500, 2002, 'USA', 'Never give up!', 'drama', 120);
export const untouchables = new Movie(101, 'The untouchables', 350, 1987, 'USA', 'Death to the criminals!', 'drama', 120, 15)

console.log(avengers, untouchables);
