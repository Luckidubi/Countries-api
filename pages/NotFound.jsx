import Header from '/src/components/Header'
import {  Heading, Flex, Button, Box } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ElemBg, textColor } from '/src/style.jsx'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function NotFound({ error }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
    window.location.reload()
    
  }

  return (

    <div>

      <Box h="100vh" color={textColor} bg={ElemBg}>
        <Header />

        <Flex >
          <Box m={2} my={6}>
            <Button onClick={handleClick} variant="outline" leftIcon={<ArrowBackIcon boxSize={5} />} w="6em">
              Back
            </Button>
          </Box>
        </Flex>
        <Flex justify="center">

          <Heading as='h1' size='2xl' >
           Page Not Found
            {error.message}
          </Heading>

        </Flex>

      </Box>


    </div>
  )
}