import { Flex, Box, Spacer} from "@chakra-ui/react"
import {ElemBg, textColor} from '/src/style'
import { MoonIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'

export default function Header(){
  const { colorMode, toggleColorMode } = useColorMode()
   
    return(
      <Flex p='1em' maxWidth="1440px" bg={ElemBg} color={textColor} boxShadow="md" mb={.5}>
      <Box fontSize='16px' fontWeight='bold' px={5} >
      <Link to="/">  Where in the world? </Link>
      </Box>
        <Spacer/>
      <Box  cursor="pointer" onClick={toggleColorMode}>
        <MoonIcon color={textColor}/>{' '}
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Box>
      </Flex>
    )
  
}
  