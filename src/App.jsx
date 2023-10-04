import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Astros from './components/Astros.jsx'
import AppBar from './components/AppBar.jsx'
import Progress from './components/Progres.jsx'
import About from './components/About'


function App() {

  const linksData = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Astros', href: '/astros' },
  ]

  return (
    <>
      <Navbar links={linksData} />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />

        <Route
          path='/astros'
          element={<Astros />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>

    </>
  )
}

export default App
