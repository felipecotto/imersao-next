import { createGlobalStyle, ThemeProvider } from 'styled-components'; 
import db from '../db.json'; 

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    background-color: ${({ theme }) => themeDark.colors.bg};
    color: ${({ theme }) => themeDark.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const themeDark = db.themeDark; 
const themeLight = db.themeLight; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}



