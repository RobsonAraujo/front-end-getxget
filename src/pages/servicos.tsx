import styled from 'styled-components'
import Header from 'components/Header'

const Wrapper = styled.div`
  padding-left: 74px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;
  color: #ffffff;
`
const Subtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`

const Card = styled.div`
  width: 280px;
  height: 360px;
  background: white;
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

const List = styled.div``

export default function Servicos() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>serviços</Title>
        <Subtitle>encontre um serviço que deseja contratar</Subtitle>
      </Container>
      <List>
        <Card>
          <CarImage>
            <img
              width="100%"
              src="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
            />
          </CarImage>
          <div style={{ padding: '16px' }}>
            <TitleCard>Criação de conteúdo</TitleCard>
            <CardActor>por John Doe</CardActor>
            <DescriptionCard>
              Criação de conteúdo institucional, mídias sociais, blogs, entre
              outros.
            </DescriptionCard>
            <PriceCard>R$30,00</PriceCard>
            <DescrpitonPriceCard>por texto</DescrpitonPriceCard>
          </div>
        </Card>
      </List>
    </Wrapper>
  )
}
