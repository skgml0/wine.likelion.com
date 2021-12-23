import type { NextPage } from "next";
import axios from 'axios';
import useSWR from "swr";
import {Wine} from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";

const RedsPage: NextPage = () => {
    const name = 'reds';
    const {data,error} = useWineData(name);
    if (error) return <div>Failed to Loading...</div>;
    if (!data) return <div>...Loading</div>;    
    return (
      <div>
        <h1>RedsPage</h1>
        <main>
          {data.map((wineData: Wine) => {
            return (
              <div key={`reds-wine-list-${wineData.id}`}>
                <h1>{wineData.wine}</h1>
                <p>{wineData.winery}</p>
              </div>
            );
          })}
        </main>
      </div>
    );
  };

export default RedsPage;