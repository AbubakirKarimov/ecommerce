import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect} from 'react';
import { HomePage } from './Pages/home/HomePage.jsx';
import { CheckoutPage } from './Pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './Pages/orders/OrdersPage.jsx';
import { TrackingPage } from './Pages/TrackingPage.jsx';
import { NotFoundPage } from './Pages/NotFoundPage.jsx';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }

  useEffect(() => {
    
    loadCart();
     
  }, [])
  
 

  return (
    <>
    <Routes>
       <Route index element={<HomePage cart={cart} loadCart={loadCart}/>}/>
       <Route path='/checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>}/> 
       <Route path='/orders' element={<OrdersPage cart={cart}/>}/>
       <Route path='/tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>}/>
       <Route path="*" element={<NotFoundPage cart={cart}/>} />
    </Routes>
    </>
  )
}

export default App
