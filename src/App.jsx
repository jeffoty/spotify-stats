import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
<<<<<<< HEAD
=======
// import Home from './components/Home'
>>>>>>> 42047df8ec788e8a3a2c19b3568f1e836febae48
import Login from './components/Login'

function App() {

  return (
    <div className="app">
      <Navbar/>
    < Login/>
      <Outlet/>
    </div>
  )
}

export default App
