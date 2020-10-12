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

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function Servicos() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>serviços</Title>
        <Subtitle>encontre um serviço que deseja contratar</Subtitle>
      </Container>
      <List>
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada"
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada"
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />{' '}
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada"
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />{' '}
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada"
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />{' '}
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada"
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />{' '}
        <Card
          img="https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_1371462110.jpg"
          title="Criação de conteúdo"
          actor="John Doe"
          description="Criação de conteúdo institucional, mídias sociais, blogs, entre outros."
          price="30,00"
          way="por texto"
        />
        <Card
          img="https://www.page1.com.br/wp-content/uploads/2016/07/img-wordpress-sites.jpg"
          title="Criação de website"
          actor="John Doe"
          description="Criação de website simples com 4 páginas para explicar o seu negócio"
          price="2.000,00"
          way="R$500,00 por página"
        />
        <Card
          img="https://www.webnode.com.br/blog/files/2019/11/Nocoes-basicas-de-SEO.jpg"
          title="Otimização para mecanism..."
          actor="John Doe"
          description="Melhorar o ranqueamento no Google e outros buscadores do seu website "
          price="80,00"
          way="por hora trabalhada "
        />
        <Card
          img="https://blog.hotmart.com/blog/2014/09/BLOG_emailmarketing-ALTERACAO-670x419.png"
          title="E-mail marketing"
          actor="John Doe"
          description="Serviço de disparo de e-mail marketing e criação de mailing"
          price="100,00"
          way="por e-mail"
        />
      </List>
    </Wrapper>
  )
}
