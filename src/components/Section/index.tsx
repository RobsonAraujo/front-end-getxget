import * as S from './styles'
import { ISectionProps } from './ISectionProps'

const Section = ({ bg, title, subTitle, color, children }: ISectionProps) => (
  <S.Wrapper color={color} bg={bg}>
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
    {children}
  </S.Wrapper>
)

export default Section
