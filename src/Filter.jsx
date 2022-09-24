import { Select, Box} from '@chakra-ui/react'
import {ElemBg, textColor} from './style'

export default function Filter(){
    

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