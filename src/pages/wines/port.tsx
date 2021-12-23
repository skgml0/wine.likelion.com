import type { NextPage } from "next";
import axios from 'axios';
import useSWR from "swr";
import {Wine} from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";

const PortPage: NextPage = () => {
    const name = 'port';
    const {data,error} = useWineData(name);
    if (error) return <div>Failed to Loading...</div>;
    if (!data) return <div>...Loading</div>;    
    return (
      <div>
        <h1>Port</h1>
        <main>
          {data.map((wineData: Wine) => {
            return (
              <div key={`port-wine-list-${wineData.id}`}>
                <h1>{wineData.wine}</h1>
                <p>{wineData.winery}</p>
              </div>
            );
          })}
        </main>
      </div>
    );
  };

export default PortPage;