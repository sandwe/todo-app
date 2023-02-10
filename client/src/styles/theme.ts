declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    red: string;
    blue: string;
    bgBlue: string;
    borderGray: string;
    textGray: string;
    skeletonGray: string;
  }
}

const theme = {
  white: '#fff',
  red: '#fd8a8a',
  blue: '#4b56d2',
  bgBlue: '#ebf4ff',
  borderGray: '#d8d9cf',
  textGray: '#6e6e6e',
  skeletonGray: '#f2f2f2',
};

export default theme;
