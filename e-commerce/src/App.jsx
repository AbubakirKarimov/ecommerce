import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage.jsx';
import { CheckoutPage } from './Pages/CheckoutPage.jsx';
import { OrdersPage } from './Pages/OrdersPage.jsx';
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
       <Route index element={<HomePage/>}/>
       <Route path='/checkout' element={<CheckoutPage/>}/> 
       <Route path='/orders' element={<OrdersPage/>}/>
    </Routes>
    </>
  )
}

export default App
