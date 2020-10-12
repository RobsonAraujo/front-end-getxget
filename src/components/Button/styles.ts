import styled from 'styled-components'
import { COLORS } from 'config/general'
import { IButtonProps } from './IButtonProps'

export const Wrapper = styled.button<IButtonProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  ${(props) =>
    props.primary &&
    `
    background: transparent;
    color: ${COLORS.black};
    border: 2px solid ${COLORS.black};
  `}
  ${(props) =>
    props.secondary &&
    `
    background: ${COLORS.black};
    color: ${COLORS.white};
    border: 2px solid ${COLORS.black};
  `}
  ${(props) =>
    props.tertiary &&
    `
    background: transparent;
    color: ${COLORS.white};
    border: 2px solid ${COLORS.white};
  `}
  ${(props) =>
    props.cta &&
    `
    background: ${COLORS.secondary};
    color: ${COLORS.white};
    border: 2px solid ${COLORS.secondary};
  `}
  
  text-transform: uppercase;
  padding: 12px 50px;
  cursor: pointer;
  font-family: 'open_sansbold';
  transition: 0.5s;
  &:hover {
    ${(props) =>
      props.primary &&
      `
    background: ${COLORS.black};
    color: ${COLORS.white};
  `}
    ${(props) =>
      props.secondary &&
      `
    background: ${COLORS.white};
    color: ${COLORS.black};
  `}

  ${(props) =>
      props.tertiary &&
      `
    background: ${COLORS.white};
    color: ${COLORS.black};
    border: 2px solid ${COLORS.white};
  `}
  ${(props) =>
      props.cta &&
      `
    background: transparent;
    color: ${COLORS.secondary};
    border: 2px solid ${COLORS.secondary};
  `}
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`
