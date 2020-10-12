import styled from 'styled-components'
import { COLORS, SIZES } from '../../config/general'
import { IOpenArrowProps } from './IFooterProps'

export const Wrapper = styled.footer`
  width: 100%;
  background: ${COLORS.black};
  padding: 30px 60px;
  font-size: ${SIZES.p}px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`
export const NavItems = styled.ul`
  &:last-child {
    li {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        a {
          font-family: 'open_sansbold';
        }
      }
    }
  }
  div > li {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  > li {
    margin-bottom: 16px;
    &:first-child {
      svg {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    width: 20%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    > li {
      &:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0;

        svg {
          font-size: 32px;
          display: block;
        }
      }
    }
    > div {
      display: ${(props: IOpenArrowProps) => (props.open ? 'block' : 'none')};
      margin: 20px 0;
    }
    > li:not(:last-child) {
      border-bottom: 1px solid white;
      margin-bottom: 0px;
      padding: 20px 0;
    }
  }
`

export const Social = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  p {
    margin-right: 30px;
  }
  svg {
    margin-right: 30px;
    font-size: 24px;
    &:last-child {
      margin: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 0;
    justify-content: end;
  }
`

export const Institucional = styled.ul`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: row wrap;
  li {
    margin: 0px 10px;
    &:last-child {
      font-size: 12px;
      margin: 0;
    }
    &:first-child {
      margin: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    li {
      margin: 10px 15px;
      &:first-child {
        margin: 10px 15px;
      }
      &:last-child {
        margin: 20px 0 0 0;
        text-align: center;
        width: 100%;
      }
    }
  }
`
