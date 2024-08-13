import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos CSS
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
      <Home/>
      <Footer/>
        
    </>
  )
}

export default App
