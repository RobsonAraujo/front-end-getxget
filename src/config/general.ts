export interface ISizesProps {
  p: string
  p16: string
  p13: string
  p24: string
  h1: string
  h4: string
  input: string
}

export interface IColorsProps {
  brandDark: string
  brandPure: string
  brandLight: string
  brandLightest: string
  dark: string
  greyDark: string
  grey: string
  greyLight: string
  separation: string
  white: string
}

export const COLORS: IColorsProps = {
  brandDark: '#650B35',
  brandPure: '#93104D',
  brandLight: '#A54471',
  brandLightest: '#D4A0B8',
  dark: '#333347',
  greyDark: '#60606C',
  grey: '#888896',
  greyLight: '#B3B3BC',
  separation: '#DFDFE2',
  white: '#B3B3BC'
}

export const SIZES: ISizesProps = {
  p: '14',
  p13: '13',
  p16: '16',
  p24: '24',
  h1: '32',
  h4: '20',
  input: '16'
}
