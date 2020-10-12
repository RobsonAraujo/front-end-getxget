import * as S from './styles'
import { IButtonProps } from './IButtonProps'

const Button = (props: IButtonProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Button
