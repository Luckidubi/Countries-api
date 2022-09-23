import { Select, Box} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function Filter(){
    const ElemBg = useColorModeValue('hsl(0, 0%, 100%)','hsl(209, 23%, 22%)')
  const textColor = useColorModeValue('hsl(200, 15%, 8%)','hsl(0, 0%, 100%)')

  return(
    <Box bg={ElemBg}  m={5} maxW="sm">
      <Select boxShadow="md" color={textColor} focusBorderColor={ElemBg} placeholder='Filter by Region'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
    
    </Box>
  )
}