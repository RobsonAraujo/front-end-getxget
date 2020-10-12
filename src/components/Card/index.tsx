import styled from 'styled-components'

const Card = styled.div`
  width: 280px;
  height: 360px;
  background: white;
  margin: 16px;
  cursor: pointer;
`

const CarImage = styled.div`
  width: 100%;
  height: 180px;
  background: black;
`

const TitleCard = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  /* Neutral / dark */

  color: #333347;
`
const CardActor = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* Neutral / Grey */

  color: #888896;
`
const DescriptionCard = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  /* Neutral / dark */
  margin: 16px 0;
  color: #333347;
`
const PriceCard = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #93104d;
`
const DescrpitonPriceCard = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* Neutral / Grey */

  color: #888896;
`

const CardComponent = ({ img, title, actor, description, price, way }) => (
  <Card>
    <CarImage>
      <img width="100%" src={img} />
    </CarImage>
    <div style={{ padding: '16px' }}>
      <TitleCard>{title}</TitleCard>
      <CardActor>por {actor}</CardActor>
      <DescriptionCard>{description}</DescriptionCard>
      <PriceCard> $RS {price}</PriceCard>
      <DescrpitonPriceCard>{way}</DescrpitonPriceCard>
    </div>
  </Card>
)

export default CardComponent
