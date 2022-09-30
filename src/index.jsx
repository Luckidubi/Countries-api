import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'
import CountryProvider from './CountryProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import NotFound from '/pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        
<Router>
  <ErrorBoundary>
        <App />
    </ErrorBoundary>
</Router>
          
      </ChakraProvider>
    </CountryProvider>
  </React.StrictMode>
)