import styled from 'styled-components'
import { SIZES } from 'config/general'

export const Wrapper = styled.section`
  min-height: 790px;
  background: url('/static/img/webp/veiculos_chamada.webp') center center
    no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  display: flex;
  padding-left: 10%;
  h1 {
    margin-bottom: 16px;
    font-size: ${SIZES.h1}px;
  }
  p {
    margin-bottom: 24px;
    font-size: ${SIZES.h4}px;
  }
  button {
    padding-left: 80px;
    padding-right: 80px;
  }
`
