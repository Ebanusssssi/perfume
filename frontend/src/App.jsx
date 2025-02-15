import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import OrdersList from './pages/OrdersList'
import Navbar from './components/Navbar'
import Quiz from './pages/Quiz'
import Collections from './pages/Collections'
import Footer from './components/Footer'
import SidebarMenu from './components/SidebarMenu'
import SearchModal from './components/SearchModal'

const App = () => {
  return (
    <div className="font-custom">

      <Navbar />
      <SidebarMenu />
      <SearchModal />

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/products' element={ <Products/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/product/:productId' element={ <Product/> }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/place-order' element={ <PlaceOrder/> }/>
        <Route path='/orders-list' element={ <OrdersList/> }/>
        <Route path='/quiz' element={ <Quiz/> }/>
        <Route path='/collections' element={ <Collections/> }/>
      </Routes>
      
      <Footer />

    </div>
  )
}

export default App