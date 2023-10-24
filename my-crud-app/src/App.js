
import './App.css'
import Hero from './components/Hero'
import Create from './components/Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'


function App() {
 
return(
  <Router>
  <div className='main'>
    <Hero/>
    <Routes> 
    <Route exact path='/create' element= {<Create/>} />
    </Routes>
    <Routes>
    <Route exact path='/' element= {<Read/>} />
    </Routes>
    <Routes>
    <Route path='/update' element= {<Update/>} />
    </Routes>
  </div>
  </Router>
)

}

export default App
