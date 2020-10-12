import * as S from './styles'
import { Grid } from '@material-ui/core'
import { Facebook, Twitter, YouTube, Instagram } from '@material-ui/icons'
import { MENU_FOOTER, MENU_INSTITUCIONAL } from 'config/menu_footer'
import NavItems from './NavItems'

const Footer = () => (
  <S.Wrapper>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {MENU_FOOTER.map((e) => (
        <NavItems {...e} key={e.id} />
      ))}
    </Grid>
    <S.Social>
      <p>
        <b>MIT nas redes</b>
      </p>
      <Facebook />
      <Twitter />
      <YouTube />
      <Instagram />
    </S.Social>

    <S.Institucional>
      {MENU_INSTITUCIONAL.map((e) => (
        <li key={e.name}>
          <a href={e.url}>{e.name}</a>
        </li>
      ))}

      <li>© The Colt Car Company 2020. All rights reserved.</li>
    </S.Institucional>
  </S.Wrapper>
)

export default Footer
