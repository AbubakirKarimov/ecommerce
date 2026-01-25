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

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  }, [])
  
 

  return (
    <>
    <Routes>
       <Route index element={<HomePage cart={cart}/>}/>
       <Route path='/checkout' element={<CheckoutPage cart={cart}/>}/> 
       <Route path='/orders' element={<OrdersPage cart={cart}/>}/>
       <Route path='/tracking' element={<TrackingPage/>}/>
       <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  )
}

export default App
