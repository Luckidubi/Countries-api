import { Flex, Box } from '@chakra-ui/react'
import Search from './Search'
import Filter from './Filter'

export default function SearchFilter(){

  return(
     <Flex justify="space-between"
       sx={{
    '@media screen and (max-width: 760px)': {
      flexDirection: 'column',
      maxW: 'lg'
    },
  }}>
     <Search/>
       <Filter/>
     
     </Flex>
  )
}
  