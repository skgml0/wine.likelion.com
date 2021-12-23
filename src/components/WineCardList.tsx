import { Error, Loading, BeerCard } from '.';
import {Wine} from "../types/Wine";
import { useWineData } from "../hooks/useWineData";

interface WineCardListProps {
    name: string
}

export const WineCardList = ({name}: WineCardListProps) => {
    const {data,error} = useWineData(name);

    if (error) return <Error />
    if (!data) return <Loading />
    return (
        <div>
        <h1>{name} wine</h1>
        <main>
            {data.map((wineData: Wine) => {
                return (
                    <WineCard
                      key={`${name}-wine-list-${wineData.id}`}
                      wineData={wineData}
                      />
                )
            })}
        </main>
    </div>
    )
}