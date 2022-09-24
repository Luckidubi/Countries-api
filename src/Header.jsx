import { Flex, Box, Spacer} from "@chakra-ui/react"
import {ElemBg, textColor} from './style'
import { MoonIcon } from '@chakra-ui/icons'

export default function Header(){
   
    return(
      <Flex p='1em' maxWidth="1440px" bg={ElemBg} color={textColor} boxShadow="md" mb={.5}>
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