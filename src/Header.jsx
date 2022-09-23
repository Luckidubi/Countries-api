import { Flex, Box, Spacer} from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Header(){
    const ElemBg = useColorModeValue('hsl(0, 0%, 100%)','hsl(209, 23%, 22%)')
  const textColor = useColorModeValue('hsl(200, 15%, 8%)','hsl(0, 0%, 100%)')
    return(
      <Flex p='1em' maxWidth="1440px" bg={ElemBg} color={textColor} boxShadow="md">
      <Box fontSize='16px' fontWeight='bold' px={5} >
        Where in the world?
      </Box>
        <Spacer/>
      <Box >
        <MoonIcon color={textColor}/>{' '}Dark Mode
      </Box>
      </Flex>
    )
  
}