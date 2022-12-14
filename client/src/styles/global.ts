import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-black-400: rgb(0,0,0);
    --clr-white-400: rgb(255, 255, 255);
    --clr-white-600: rgb(232, 232, 232);
    --clr-red-100: rgb(255, 86, 86);
    --clr-red-300: rgb(208, 24, 24);
    --clr-blue-400: rgb(1, 91, 234);
    --clr-blue-200: rgb(97, 170, 230);

   --fs-300: .9rem;
   --fs-400: 1rem;
   --fs-500: 1.2rem;
   --fs-900: 3rem;

    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Barlow', sans-serif;
    --ff-tertiary: 'Barlow Condensed', sans-serif;

    --td-slow: 1s;
    --td-medium: 500ms;
    --td-fast: 200ms;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export { GlobalStyle }
