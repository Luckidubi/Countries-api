import Header from "./Header"
import Search from "./Search"
import Filter from "./Filter"
import SearchFilter from "./SearchFilter"
import {Container} from '@chakra-ui/react'
import CountryList from './CountryList'
import Details from './Details'

export default function App() {
  return (
    <main>
      
     <Header/>
      <Container maxW="1440px">
      <SearchFilter/>
      <CountryList/>
        <Details/>
        </Container>
    </main>
  )
}
