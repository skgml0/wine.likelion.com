import styled from "@emotion/styled";
import { Beer } from "../types/Beer";

interface BeerCardProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price, rating } = beerData;
  return (
    <Container>
      <h2>
        {name}
        <Average>{rating.average}</Average>
      </h2>
      <p>가격: {price}</p>
      <p>리뷰개수: {rating.reviews}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background: #2ac1bc;
  border-radius: 3px;
`;
