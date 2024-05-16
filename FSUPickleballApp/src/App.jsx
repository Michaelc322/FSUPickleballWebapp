import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<Home/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/donate" element={<Donate/>}/>
          <Route path ="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
