
import CountryList from '/pages/CountryList'
import Details from '/pages/Details'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <main>
      <Routes>

        <Route path="/" element={<CountryList/>}/>
          

        <Route path=":name" element={<Details/>}/>
        
         

        </Routes>
        
    </main>
  )
}
