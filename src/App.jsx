
import { Route , Routes , Navigate } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Wishlist' element={<Wishlist/>}></Route>
  <Route path='/Cart' element={<Cart/>}></Route>
  <Route path='/View/:id' element={<View/>}></Route>
  <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>

  
</Routes>
<Footer/>

    </>
  )
}

export default App
