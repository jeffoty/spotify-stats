import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Login/>
      <Outlet/>
    </div>
  )
}

export default App
