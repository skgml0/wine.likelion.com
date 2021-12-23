import type { NextPage } from 'next';
import { Error, Loading, BeerCard } from '../../components';
import { useBeerData } from '../../hooks/useBeerData';
import { Beers } from '../../types/Beer';

const StoutsPage: NextPage = () => {
    const name = 'stouts';
    const {data,error} = useBeerData(name);
    if (error) return <div>Failed to Loading...</div>;
    if (!data) return <div>...Loading</div>;    
    return (
      <div>
        <h1>Stouts</h1>
        <main>
          {data.map((beerData: Beers) => {
            return (
              <div key={`stouts-wine-list-${beerData.id}`}>
                <h1>{beerData.name}</h1>
                <p>{beerData.price}</p>
              </div>
            );
          })}
        </main>
      </div>
    );
  };

export default StoutsPage;