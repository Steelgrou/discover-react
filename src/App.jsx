import './App.css'
import { useTranslation } from 'react-i18next'


//React-Router-dom
import { Routes, Route } from 'react-router-dom'
import Aboutpage from './Pages/Aboutpage/Aboutpage'
import Homepage from './Pages/Homepage/Homepage'
import Projectpage from './Pages/Projectpage/Projectpage'
import Contactpage from './Pages/Contactspage/Contactpage'
import { ToastContainer } from 'react-toastify'

function App() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Projectpage" element={<Projectpage />} />
        <Route path="/Contact" element={<Contactpage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
