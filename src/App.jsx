import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import SideBar from './components/SideBar'

import Home from './pages/Home'
import User from './pages/User'
import UserMocked from './pages/UserMocked'
//import Error from './pages/Error'
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

function App() {
  return (
    <Router>
      <Header />
      <section className="containerHome containerUser">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:id" element={<User />} />
          <Route path="/UserMocked/:id" element={<UserMocked />} />
          {/*
        <Route path="*" element={<Error />} />
        */}
        </Routes>
      </section>
    </Router>
  )
}

export default App
