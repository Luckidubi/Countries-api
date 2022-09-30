import { Flex, Box } from '@chakra-ui/react'
import Search from '/src/components/Search'
import Filter from '/src/components/Filter'

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
  