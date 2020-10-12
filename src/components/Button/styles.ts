import styled from 'styled-components'
import { COLORS } from 'config/general'
import { IButtonProps } from './IButtonProps'

export const Wrapper = styled.button<IButtonProps>`
  background: #93104d;
  width: 168px;
  height: 48px;
  color: white;
  border: 0;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`
