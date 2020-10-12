import * as S from './styles'
import { KeyboardArrowDown } from '@material-ui/icons'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Img from 'components/Img'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const mobile = isMobile ? -50 : -200

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < mobile) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })
  return (
    <S.NavBar style={scrolled ? { position: 'fixed', width: '100%' } : {}}>
      <Img src="/static/img/webp/login.webp" alt="Entre na sua conta" />
      <Link href="/">
        <a>
          <Img src="/static/img/logo.svg" alt="Mitsubishi Motors" />
        </a>
      </Link>
      <Img src="/static/img/webp/mobile-icon.webp" alt="Menu" />
      <ul>
        <li>
          <Link href="/veiculos">
            <a>
              Modelos <KeyboardArrowDown />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              Comprar um MIT <KeyboardArrowDown />
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Vendas Diretas</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>MIT Assinatura</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              Serviços <KeyboardArrowDown />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              Mundo MIT <KeyboardArrowDown />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Img src="/static/img/webp/login.webp" alt="Entre na sua conta" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Img src="/static/img/location.png" alt="Entre na sua conta" />
            </a>
          </Link>
        </li>
      </ul>
    </S.NavBar>
  )
}

export default NavBar
