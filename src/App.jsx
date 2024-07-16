import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App