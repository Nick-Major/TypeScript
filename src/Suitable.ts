export default interface Suitable {
    id: number,
    title: string,
    price: number,
    year: number, 
    country: string, 
    slogan: string, 
    genre: string, 
    duration: number,
    discount?: number
};