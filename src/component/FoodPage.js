import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFoodToCart } from '../features/CardSlice1'
import toast from 'react-hot-toast'


const FoodPage = () => {
  const dispatch = useDispatch()
  const food = useSelector((state) => (state.allcard.fooditems))
  const [inputtext, setInputtext] = useState("");
  const  notify = () => toast(`Food is added to cart successfully ✅`);


  return (
    <div>
      <section id='FoodItems'>

        <div className='container-fluid'>

          <div className='row'>
            <div className="seven mt-5 p-0">
              <h1>Today's Special Food</h1>
            </div>
          </div>
          <div className='row  m-1 mx-auto w-50 mt-2 '>
            <input id='search-item' type='search' placeholder='Search Your Product ' aria-label='Search' aria-describedby='search-addon' value={inputtext} onChange={(e) => setInputtext(e.target.value)} />
          </div>

          <div className='row'>
            {food
            .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
              .map((foodData) => (
                <div className=' col-md-4 col-lg-3 col-6   mt-3 p-0 '>
                  <div className="product-card">
                    <div className="image-container">
                      <img src={foodData.image} alt="Morning Set" />
                      <span className="favorite-star">★</span>
                    </div>
                    <div className="product-info">
                      <h2 id='food-head'>{foodData.name}</h2>
                      <p id='food-des'>{foodData.description}</p>
                      <div className="tags">
                        <span className="tag">{foodData.flavorProfile1}</span>
                        <span className="tag">{foodData.flavorProfile2}</span>
                        <span className="tag">{foodData.flavor}</span>
                      </div>
                      <div className="price-order">
                        <span className="price">₹{Math.abs(foodData.price)}</span>
                        <button onClick={() => { dispatch(addFoodToCart(foodData));notify()}} className="order-button">Order Now</button>
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

export default FoodPage