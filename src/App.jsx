import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import GlobalStyle from './styles/GlobalStyle'

const theme = {
  colors: {
    primary: '#FF9999',
    secondary: '#FFE5E5',
    text: '#333333',
    background: '#FFFFFF',
    accent: '#FF6B6B'
  },
  fonts: {
    chinese: '"Noto Sans SC", sans-serif',
    english: '"Poppins", sans-serif'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <MainContent />
    </ThemeProvider>
  )
}

export default App 