import Grid from '@material-ui/core/Grid'
import Footer from 'components/Footer'
import Button from 'components/Button'
import FirstHeader from 'components/FirstHeader'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 74px;
`

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
`

export const Subtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  width: 280px;
  height: ${(props) => (props.fast ? '300px' : '243px')};
  background: #ffffff;
  padding: 32px;
`

const TitleCard = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${(props) => (props.fast ? '#93104D' : '#333347')};
  text-decoration: underline;
`

const PriceCard = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.fast ? '40px' : '32px')};
  line-height: 39px;
  text-align: center;
  color: ${(props) => (props.fast ? '#93104D' : '#333347')};
  margin-top: 40px;
`
const TextMonth = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #b3b3bc;
`
const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #60606c;
  margin-top: 24px;
`

export default function Home() {
  return (
    <Wrapper>
      <FirstHeader />

      <Grid container direction="row" justify="center" alignItems="center">
        <Title>planos</Title>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Subtitle>selecione um dos nossos planos</Subtitle>
      </Grid>

      <Grid
        container
        sm="12"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          sm="3"
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Card>
            <TitleCard>getfree</TitleCard>
            <PriceCard>R$0</PriceCard>
            <TextMonth>por mês</TextMonth>
            <Description>apenas procure serviços</Description>
          </Card>
        </Grid>
        <Grid
          container
          sm="3"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Card fast>
            <TitleCard fast>getfast</TitleCard>
            <PriceCard fast>R$29,90</PriceCard>
            <TextMonth>por mês</TextMonth>
            <Description>
              procure e ofereça serviços de forma limitada
            </Description>
          </Card>
        </Grid>

        <Grid
          container
          sm="3"
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Card>
            <TitleCard>getsuper</TitleCard>
            <PriceCard>R$49,90</PriceCard>
            <TextMonth>por mês</TextMonth>
            <Description>procure e ofereça serviços à vontade</Description>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        sm="12"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button style={{ marginTop: '50px' }}>Finalizar</Button>
      </Grid>

      <div
        style={{
          width: '100%',
          paddingRight: '74px',
          marginTop: '80px'
        }}
      >
        <Footer />
      </div>
    </Wrapper>
  )
}
