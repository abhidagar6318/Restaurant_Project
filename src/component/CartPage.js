import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../features/CardSlice1'
import './style/Cartpage.css'
import './style/Navbar.css'
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => (state.allcard))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="#">Apna Farm</Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">
                                    <ul className="navbar-nav mx-auto gap-3">

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home<i class="bi bi-house"></i></Link>
                                        </li>


                                        {/*                                

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">About</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login<i ></i></Link>
                                        </li>



                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Cart">Cart <i class="bi bi-cart-check"></i>({cart.length})</Link>
                                        </li> */}
                                    </ul>

                                    <span >
                                        <img className='logo-image' src='date.webp' alt='...' />
                                    </span>


                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>

            {/* --------------------------------------cart-section----------------------------------------- */}

            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div id='cart-page-card' className="card mb-4">
                                <div className="card-header py-3 ">
                                    <h5 className="card-heading mb-0">Your Selected Items : {cart.length}</h5>

                                </div>
                                <div className="card-body">
                                    {cart.map((cartdata) => {
                                        return (
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={cartdata.image} className="w-100" alt="coffee" />
                                                    </div>
                                                </div>
                                                <div className="card-product-name col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    <p><strong> {cartdata.name}</strong></p>
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item" onClick={() => { dispatch(removeItem(cartdata)) }}>
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init title="Move to the wish list">
                                                        <i className="fas fa-heart" />
                                                    </button>
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                    <div className="d-flex mb-4" style={{ maxWidth: 300 }}>

                                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2" onClick={() => (dispatch(decreaseItemQuantity(cartdata)))}>
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <div data-mdb-input-init className="form-outline">

                                                            <input id="form1" min={0} name="quantity" Value={cartdata.quantity} type="number" className="form-control" />

                                                        </div>
                                                        <button className="btn btn-primary px-3 ms-2" onClick={() => (dispatch(increaseItemQuantity(cartdata)))}>
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    <p className="text-start text-md-center">
                                                        <strong className='cart-text' >₹{Math.max(0, cartdata.price*cartdata.quantity)}</strong>
                                                    </p>
                                                </div>
                                            </div>)
                                    })}
                                    <hr className="my-4" />

                                </div>
                            </div>


                        </div>
                        <div className="col-md-4">
                            <div id='cart-page-card' className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="card-heading mb-0">Total Details Of Your Order</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">

                                        <li className="cart-text d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong className='cart-text'>Total quantity:</strong>

                                            </div>
                                            <span><strong className='cart-text'>{totalQuantity}</strong></span>
                                        </li>
                                        <li className="cart-text d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong className='cart-text'>Total amount:</strong>

                                            </div>
                                            <span><strong className='cart-text'>₹{totalPrice}</strong></span>
                                        </li>
                                    </ul>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
                                        Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CartPage