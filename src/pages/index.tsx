import Grid from '@material-ui/core/Grid'
import Footer from 'components/Footer'
import Button from 'components/Button'
import FirstHeader from 'components/FirstHeader'
import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  padding-left: 74px;
`

export const VideoArea = styled.div`
  width: 100%;
  height: 360px;
  background: #dfdfe2;
`

export const TextDigital = styled.h1`
  color: white;
  max-width: 300px;
  padding-bottom: 30px;
`

export default function Home() {
  return (
    <Wrapper>
      <FirstHeader />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <VideoArea />
        </Grid>
        <Grid item xs={12} sm={6} container direction="column" justify="center">
          <TextDigital>
            inicie aqui a transformação digital da sua empresa
          </TextDigital>
          <Link href="/servicos">
            <Button>Veja a lista de serviços</Button>
          </Link>
        </Grid>
      </Grid>
      <div
        style={{
          width: '100%',
          paddingRight: '74px',
          marginTop: '205px'
        }}
      >
        <Footer />
      </div>
    </Wrapper>
  )
}
