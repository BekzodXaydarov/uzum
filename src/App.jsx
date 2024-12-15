import './App.css'
import NavbarMain from './components/Navbar/NavbarMain'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Likes from './pages/Likes/Likes'
import Savat from './pages/Savat/Savat'
import Kirish from './pages/Kirish/Kirish'
import Home from './pages/Home/Home'
import SingleRoute from './pages/SingleRoute/SingleRoute'
// import Banner from './components/Banner/Banner'

function App() {
  return (
    <>
      <NavbarMain />
      {/* <Banner /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/likes' element={<Likes></Likes>} ></Route>
        <Route path='/savat' element={<Savat></Savat>} ></Route>
        <Route path='/kirish' element={<Kirish></Kirish>} ></Route>
        <Route path='/product/:id' element={<SingleRoute />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
