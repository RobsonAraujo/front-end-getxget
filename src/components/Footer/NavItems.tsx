import * as S from './styles'
import { useState, useEffect } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { IFooterProps } from './IFooterProps'

const NavItems = ({ category, links }: IFooterProps) => {
  const [openArrow, setOpenArrow] = useState(false)
  useEffect(() => {
    if (category === '') {
      setOpenArrow(true)
    }
  }, [category])
  return (
    <S.NavItems open={openArrow}>
      {category !== '' && (
        <li>
          <b>{category}</b>
          {!openArrow ? (
            <KeyboardArrowDown onClick={() => setOpenArrow(!openArrow)} />
          ) : (
            <KeyboardArrowUp onClick={() => setOpenArrow(!openArrow)} />
          )}
        </li>
      )}
      <div>
        {links.map((e) => (
          <li key={e.name}>
            <a href={e.url}>{e.name}</a>
          </li>
        ))}
      </div>
    </S.NavItems>
  )
}

export default NavItems
