import * as S from './styles'
import { IButtonProps } from './IButtonProps'

const Button = (props: IButtonProps) => (
  <S.Wrapper {...props}>{props.text}</S.Wrapper>
)

export default Button
