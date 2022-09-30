
import CountryList from '/pages/CountryList'
import Details from '/pages/Details'
import NotFound from '/pages/Details'
import {Routes, Route} from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'


export default function App() {
  return (
    
    <main>
      <Routes>

        <Route path="/" element={<CountryList/>}/>
          

        <Route path=":name" element={<Details/>}/>

        <Route path="*" element={<NotFound/>}/>
        
         

        </Routes>
        
    </main>
      
  )
}
