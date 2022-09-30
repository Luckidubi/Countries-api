import { Box, Image } from '@chakra-ui/react'
import { ElemBg, textColor } from '/src/style'
import { useNavigate } from 'react-router-dom'

export default function Country({ imgUrl, name, population, region, capital }) {
  let navigate = useNavigate()


  return (
    <Box _hover={{ boxShadow: 'lg', cursor: 'pointer' }} maxW='sm' borderWidth='1px'
      onClick={() => navigate(`/${name}`)}
      borderRadius='lg' overflow='hidden'
      bg={ElemBg}
      color={textColor}
      minH="100%"
    >

      <Box>
        <Image
          fallbackSrc='https://via.placeholder.com/150'

          src={imgUrl}
          w="100%"
          h="100%"

          objectFit="cover"
          boxSizing="border-box"
        />
      </Box>
      <Box p={4} w='100%' h="100%" >
        <Box
          mt='1'
          mb='3'
          fontWeight='bold'
          as='h3'
          lineHeight='tight'
          noOfLines={1}

        >
          {name}
        </Box>
        <Box noOfLines={1}><b>Population:</b> {population}</Box>
        <Box noOfLines={1}><b>Region:</b> {region}</Box>
        <Box noOfLines={1}><b>Capital: </b>{capital}</Box>

      </Box>

    </Box>
  )

}