import * as S from './styles'
import Img from 'components/Img'

const NavContacts = () => (
  <S.NavContacts>
    <img src="/static/img/webp/navcontents-left.webp" alt="nav" />
    <div>
      <ul>
        <li>
          <a href="">
            <Img
              src="/static/img/webp/concessionarias_icon.webp"
              alt="Concessionárias"
            />{' '}
            Concessionárias
          </a>
        </li>
        <li>
          <a href="">
            <Img src="/static/img/webp/test_icon.webp" alt="Test-Drive" />{' '}
            Test-Drive
          </a>
        </li>
        <li>
          <a href="">
            <Img src="/static/img/webp/whatsapp_icon.webp" alt="Whatsapp" />{' '}
            Whatsapp
          </a>
        </li>
      </ul>
    </div>
    <Img src="/static/img/webp/navcontents-right.webp" alt="nav" />
  </S.NavContacts>
)

export default NavContacts
