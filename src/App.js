import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Cards from './component/Cards'
import CartPage from './component/CartPage'
import Main from './component/Main'
import BurgerPage from './component/BurgerPage'
import Cakepage from './component/Cakepage'
import LoginPage from './component/LoginPage'
import FoodPage from './component/FoodPage'
import DrinkPage from './component/DrinksPage'
import RegPage from './component/RegPage'

const App = () => {
  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={
      <>
      <Main/>
      </>
    }/>
    {/* <Route path="/allItems" element={<Cards/>}/> */}
    <Route path='/Cart' element={<CartPage/>}/>
    <Route path='/food' element={<FoodPage/>}/>
    <Route path='/coffee' element={<DrinkPage/>}/>
    <Route path='/Burger' element={<BurgerPage/>}/>
    <Route path='/cake' element={<Cakepage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/Register' element={<RegPage/>}/>

    {/* <Route path='/card' element={<Cards/>}/> */}




   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App