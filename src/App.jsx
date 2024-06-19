import './App.css'



//React-Router-dom
import { Routes, Route } from 'react-router-dom'
import Aboutpage from './Pages/Aboutpage/Aboutpage'
import Homepage from './Pages/Homepage/Homepage'
import Projectpage from './Pages/Projectpage/Projectpage'
import Contactpage from './Pages/Projectpage/Projectpage'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Projectpage" element={<Projectpage/>} />
        <Route path="/Contactpage" element={<Contactpage/>} />
      </Routes>

     
   


     
     
      
     

    </>
  )
}

export default App
