export interface Beers {
    price: string;
    name: string;
    rating: {
        average: number;
        reviews: number;
        };
    image: string;
    id: number;
} 