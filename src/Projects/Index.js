import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Process from './Pages/Process'
import Contacts from './Pages/Contacts'
import Details from './Components/Details'
// import Details from './Components/Details'
import Footer from './Components/Footer'

const Index = () => {
  return (
    <div>
      {/* <BrowserRouter>

      <Navbar />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/portfolio' element={<Portfolio />}/>
              <Route path='/services' element={<Portfolio />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/process' element={<Process />}/>
              <Route path='/details' element={<Contacts />}/>
          </Routes>
      </BrowserRouter> */}

      <Navbar />
    
      <Home />
      <br />
      <br />  
      <About />

      <BrowserRouter>
      <Portfolio />
      </BrowserRouter>      
      <br />
      <br />

      <Process />
      
      <br />
      <br /> 

      <Contacts />
      <br />
      <br />

      <Footer />
    </div>
  )
}

export default Index


