import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCakeToCart } from '../features/CardSlice1'
import toast from 'react-hot-toast'


const Cakepage = () => {
  const dispatch = useDispatch()
  const cake = useSelector((state) => (state.allcard.cakeitems))
  const [inputtext, setInputtext] = useState("");
  const notify = () => toast(`Cake is added to cart successfully ✅`);


  return (
    <div>
      <section id='cakeItems'>

        <div className='container-fluid'>

          <div className='row'>
            <div className="seven mt-5 p-0">
              <h1>Today's Special Cake</h1>
            </div>
          </div>
          <div className='row  m-1 mx-auto w-50 mt-2 '>
            <input id='search-item' type='search' placeholder='Search Your Product ' aria-label='Search' aria-describedby='search-addon' value={inputtext} onChange={(e) => setInputtext(e.target.value)} />
          </div>

          <div className='row'>
            {cake
            .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
              .map((cakeData) => (
                <div className=' col-md-4 col-lg-3 col-6  mt-3 p-0 '>
                  <div className="product-card">
                    <div className="image-container">
                      <img src={cakeData.image} alt="Morning Set" />
                      <span className="favorite-star">★</span>
                    </div>
                    <div className="product-info">
                      <h2 id='food-head'>{cakeData.name}</h2>
                      <p id='food-des'>{cakeData.description}</p>
                      <div className="tags">
                        <span className="tag">{cakeData.flavorProfile1}</span>
                        <span className="tag">{cakeData.flavorProfile2}</span>
                        <span className="tag">{cakeData.flavorProfile3}</span>
                      </div>
                      <div className="price-order">
                        <span className="price">₹{Math.abs(cakeData.price)}</span>
                        <button onClick={() => { dispatch(addCakeToCart(cakeData));notify()}} className="order-button">Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Cakepage