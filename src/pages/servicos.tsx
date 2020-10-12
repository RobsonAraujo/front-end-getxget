import styled from 'styled-components'
import Header from 'components/Header'
import Card from 'components/Card'

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </Wrapper>
  )
}
