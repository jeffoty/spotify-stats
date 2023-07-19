import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
