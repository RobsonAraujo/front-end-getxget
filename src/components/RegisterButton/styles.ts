import styled from 'styled-components'
import { COLORS } from 'config/general'
import { IButtonProps } from './IButtonProps'

export const Wrapper = styled.button<IButtonProps>`
  width: 330px;
  height: 120px;
  background: #93104d;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`
