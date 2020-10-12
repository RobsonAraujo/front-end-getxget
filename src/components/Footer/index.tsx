import * as S from './styles'
import { Grid } from '@material-ui/core'

const Footer = () => (
  <S.Wrapper>
    <Grid container sm={6} xs={6}>
      <S.Text>um projeto feito para o Hackathon Emprenda Getnet</S.Text>
    </Grid>
    <Grid container sm={6} xs={6} direction="row" justify="flex-end">
      <S.Text>©2020 getget.</S.Text>
    </Grid>
  </S.Wrapper>
)

export default Footer
