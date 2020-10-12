import styled from 'styled-components'
import { IImgStyleProps } from './IImgProps'

export const Wrapper = styled.img<IImgStyleProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '')};
  @media only screen and (max-width: 768px) {
  }
`
