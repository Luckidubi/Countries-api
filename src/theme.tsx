import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      main: {
      
        color: mode('hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)')(props),
        bg: mode('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')(props),
        minW: 'sm',
        maxW: '1440px',
       
      },
    }),
  },
  
})

export default theme