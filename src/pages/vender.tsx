import styled from 'styled-components'
import Header from 'components/Header'
import Button from 'components/Button'
import Footer from 'components/Footer'

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

const ContainerRegister = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 16px auto;
  padding: 16px;
`

const Select = styled.select`
  width: 100%;
  height: 56px;
  background: #ceced3;
  border-radius: 4px 4px 0px 0px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #60606c;
`
const TextArea = styled.textarea`
  background: #ceced3;
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 160px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #60606c;
  margin-top: 16px;
`
const Input = styled.input`
  background: #ceced3;
  border-radius: 4px 4px 0px 0px;
  height: 56px;
  border: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #60606c;
  width: 100%;
  margin-right: 10px;
`

const ContainerInput = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const ButtonImage = styled.div`
  margin: 16px 0;
  background: #ffffff;
  border: 1px solid #333347;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #333347;
  cursor: pointer;
`

export default function Servicos() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>vender um serviço</Title>
        <Subtitle>
          preencha as informações do serviço que deseja vender
        </Subtitle>
      </Container>
      <ContainerRegister>
        <Select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select>
        <TextArea id="w3review" name="w3review" rows={4} cols={50}>
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </TextArea>
        <ContainerInput>
          <Input type="text" id="lname" name="lname" />
          <Select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Select>
        </ContainerInput>
        <ButtonImage>incluir uma imagem do serviço</ButtonImage>
        <Button>finalizar</Button>
      </ContainerRegister>
      <Footer />
    </Wrapper>
  )
}
