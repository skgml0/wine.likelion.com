import { Beer } from '../types/Beer';

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
    const {
        price,
        name,
        rating: { reviews }
    } = beerData;

    return (
        <div>
            <h1>name: {name}</h1>
            <h3>price: {price}</h3>
            <h3>reviews: {reviews}</h3>
        </div>
    );
};