import type { NextPage } from 'next';
import { Error, Loading, BeerCard } from '../../components';
import { useBeerData } from '../../hooks/useBeerData';
import { Beers } from '../../types/Beer';

const AlePage: NextPage = () => {
    const name = 'ale';
    const { data, error } = useBeerData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Ale Beer</h1>
            <main>
                {data.map((beerData: Beers) => {
                    return <BeerCard key={`ale-beer-list-${beerData.id}`} beerData={beerData} />;
                })}
            </main>
        </div>
    );
};

export default AlePage;