import * as S from './styles'
import NavBar from './NavBar'
import Slider from './Slider'
import NavContacts from './NavContacts'

import { images_principal } from 'config/slider'

const Header = () => (
  <S.Wrapper>
    <NavBar />
    <Slider images={images_principal} />
    <NavContacts />
  </S.Wrapper>
)

export default Header
