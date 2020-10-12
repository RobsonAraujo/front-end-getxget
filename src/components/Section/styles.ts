import styled from 'styled-components'
import { COLORS, SIZES } from 'config/general'
import { ISectionStyleProps } from './ISectionProps'

export const Wrapper = styled.section<ISectionStyleProps>`
  width: 100%;
  height: auto;
  padding: 80px 0;
  background: ${(props) => (props.bg ? props.bg : COLORS.white)};
  text-align: center;
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.color ? props.color : COLORS.black)};
  > div:first-child {
    max-width: 70%;
  }

  h1 {
    margin-bottom: 12px;
    font-size: ${SIZES.h1}px;
  }
  p {
    margin-bottom: 30px;
    font-size: ${SIZES.h4}px;
    @media only screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }
  button:not(:last-child) {
    margin-right: 60px;
    @media only screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
    > div:first-child {
      max-width: 90%;
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 24px;
      }
    }
  }
`
