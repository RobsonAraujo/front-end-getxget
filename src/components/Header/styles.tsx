import styled from 'styled-components'
import { COLORS, SIZES } from 'config/general'

export const Wrapper = styled.header`
  min-height: 600px;
  background-size: cover;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`

export const NavBar = styled.nav`
  z-index: 9999;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
  padding: 20px 60px;
  height: 80px;
  background: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img:first-of-type,
  > img:last-of-type {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px;
    > svg {
      display: block;
      font-size: 32px;
    }
    > img:first-of-type {
      width: 20px;
      display: block;
    }
    > img:last-of-type {
      width: 26px;
      display: block;
    }
  }
  ul {
    display: flex;
    align-items: center;
    font-size: ${SIZES.p16}px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    li:not(:last-child) {
      margin-right: 24px;
    }
    li {
      > a {
        display: flex;
        align-items: center;
        > img {
          width: 17px;
        }
      }
    }
  }
`

export const NavContacts = styled.div`
  width: 50%;
  height: 56px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 9998;
  > img {
    border-top: 1px solid red;
  }
  > div {
    display: flex;
    border-top: 1px solid red;
    align-items: center;
    background: #000;
    width: 100%;
    ul {
      display: flex;
      width: 100%;
      justify-content: center;
      li {
        &:not(:last-child) {
          margin-right: 10%;
        }
        a {
          img {
            margin-right: 12px;
          }
          display: flex;
          align-items: center;
          text-transform: uppercase;
          font-family: 'open_sansbold';
          font-size: ${SIZES.p13}px;
        }
      }
    }
  }
  @media only screen and (max-width: 1040px) {
    width: 85%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    > div {
      padding: 10px 0px;
      ul {
        justify-content: space-between;
        li {
          width: 33%;
          &:not(:last-child) {
            margin-right: 0;
          }
          a {
            flex-direction: column;
            font-size: 12px;
            img {
              margin: 0 0 10px 0;
            }
          }
        }
      }
    }
    > img {
      display: none;
    }
  }
`
export const Slider = styled.div`
  .swiper-pagination {
    z-index: 9997;
    width: 80px;
    position: absolute;
    bottom: 27.5%;
    margin-left: 30px;
    left: 0;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    .swiper-pagination-bullet {
      outline: none;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      height: 75px;
      margin-bottom: 10px;
      width: 5px;
      &:not(.swiper-pagination-bullet-active) {
        background: ${COLORS.white};
      }
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: ${COLORS.secondary};
    }
  }
  position: relative;
  z-index: 9998;
  padding: 0;
  width: 100%;
  .swiper-container {
    height: auto;
    padding: 0;
    .swiper-wrapper {
      width: 100%;
      height: 600px;
      @media only screen and (max-width: 768px) {
        min-height: 100vh;
      }
    }
    img {
      min-height: 600px;
      @media only screen and (max-width: 768px) {
        min-height: 100vh;
      }
    }
  }
  .swiper-slide {
    text-align: center;
  }
  .swiper-slide {
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    background: ${COLORS.white};
  }

  @media only screen and (max-width: 768px) {
    .swiper-slide {
      min-height: 100vh;
    }
  }
`

export const Post = styled.div`
  > div {
    max-width: 440px;
  }
  text-align: left;
  padding-left: 70px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    margin-bottom: 16px;
    font-size: ${SIZES.p16}px;
    text-transform: uppercase;
  }
  h1 {
    margin-bottom: 24px;
    font-size: ${SIZES.h1}px;
  }
  p {
    margin-bottom: 24px;
    font-size: ${SIZES.p24}px;
  }
  @media only screen and (max-width: 768px) {
    height: 100vh;
    padding-left: 30px;
  }
`
