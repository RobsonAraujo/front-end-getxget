import * as S from './styles'
import { IImgProps } from './IImgProps'

const Img = ({ src, alt, fullWidth }: IImgProps) => (
  <S.Wrapper loading="eager" src={src} alt={alt} fullWidth={fullWidth} />
)

export default Img
