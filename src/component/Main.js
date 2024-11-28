import React, { useEffect } from 'react'
import './style/Main.css';
import './style/Navbar.css'
import './style/Cards.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCoffeeToCart, addFoodToCart, addCakeToCart, addBurgerToCart } from '../features/CardSlice1';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import toast from 'react-hot-toast';


const Main = () => {
  const dispatch = useDispatch()
  const coffee = useSelector((state) => (state.allcard.items))
  const food = useSelector((state) => (state.allcard.fooditems))
  const cake = useSelector((state) => (state.allcard.cakeitems))
  const burger = useSelector((state) => (state.allcard.burgeritems))
  const { cart } = useSelector((state) => (state.allcard));
  const notify = () => toast(`Coffee is added to cart successfully ✅`);
  const notify1 = () => toast(`Food is added to cart successfully ✅`);
  const notify2 = () => toast(`Cake is added to cart successfully ✅`);
  const notify3 = () => toast(`Burger is added to cart successfully ✅`);

  // For scroll animation

  useEffect(() => {
    window.AOS.init()
  }, [])




  const HandleInfo = () => {
    const InfoSection = document.getElementById('Info');
    if (InfoSection) {
      InfoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const HandleMenu = () => {
    const MenuSection = document.getElementById('Menu');
    if (MenuSection) {
      MenuSection.scrollIntoView({ behavior: 'smooth' })
    }

  }

  const HandleFood = () => {
    const FoodSection = document.getElementById('FoodItems');
    if (FoodSection) {
      FoodSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const HandleCake = () => {
    const CakeSection = document.getElementById('CakeItems');
    if (CakeSection) {
      CakeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const HandleBurger = () => {
    const BurgerSection = document.getElementById('BurgerItems');
    if (BurgerSection) {

      BurgerSection.scrollIntoView({ behavior: 'smooth' });

    }
  }

  const HandleAbout = () => {
    const AboutSection = document.getElementById('About')
    if (AboutSection) {
      AboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const HandleAllItems = () => {
    const AllSection = document.getElementById('All-items')
    if (AllSection) {
      AllSection.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div>

      {/* -----------------------------------------Navbar-Section---------------------------------------------- */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="#">Farm Restaurant</Link>
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
                      <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#InfoSection" onClick={HandleInfo}>Info</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#MenuSection" onClick={HandleMenu}>Restaurant Menu </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#AllSection" onClick={HandleAllItems}>Full Menu</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#AboutSection" onClick={HandleAbout}>About Us</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login<i ></i></Link>
                    </li>


                    <li className="nav-item">
                      <Link className="nav-link" to="/Cart">Cart <i class="bi bi-cart-check"></i>({cart.length})</Link>
                    </li>
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

      {/* --------------------------------------- Home-image-Section-------------------------------------------*/}


      <section>
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <div className='container-fluid'>
            <div className='row'>
              <div id='main-head-img' className='col-md-12'>
                <h1 className='image-head'>Eat Good ,  Feel Good</h1>
                <h4 className='image-text'>Wonderful Food with Wonderful People </h4>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* -----------------------------------------Restaurant-Info--------------------------------------------------- */}

      <section id='Info' className='pb-5' style={{ background: "#ebe4cc" }}>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 mx-auto  mb-2'>
                <h1 className='book-table-head mt-5 mb-3'>Restaurant Info</h1>
              </div>
            </div>

            <div className='row  '>
              <div className='col-md-12'>

                <div className='info-upper-text'>
                  <h4 className='details-text-bold mt-4'>Opening Every Day Of Week!</h4>
                  <h6 className='details-text'>Monday-Friday</h6>
                  <h6 className='details-text'>11:00 AM - 09:00 PM</h6>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='info-upper-text' >
                  <h4 className='details-text-bold mt-4'>Additional Info:</h4>
                  <h6 className='details-text'><span className='details-text-bold'>Contact Number:</span>8440003711</h6>
                  <h6 className='details-text'><span className='details-text-bold'>Address:</span>Bagru, Near Manipal Univercity</h6>
                  <h6 className='details-text'>Located in the heart of Denver's bustling McGregor Square, The Original, fondly known by locals as "The OG," redefines the brunch experience. Renowned as a premier brunch destination in Denver, The OG excels in crafting exquisite breakfast, lunch and brunch dishes. As a celebrated brunch spot near Coors Field, we pride ourselves on being pioneers in the culinary scene, offering an unforgettable dining experience. Whether you're seeking the best brunch in Denver, a delightful breakfast near Coors Field, or a lunch spot that combines innovation with classic flavors, The OG stands as your go-to destination. Join us at The OG, where every dish is a testament to our passion for exceptional brunch experiences.</h6>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------Restaurant-Menu-------------------------------------------------- */}

      <section id='Menu' style={{ background: "#ebe4cc" }} >
        <div className='container'>
          <div className='row '>
            <div className='col-md-6 mx-auto mt-5 mb-1 mb-2'>
              <h1 className='book-table-head'>Restaurant Menu</h1>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" >
            <div className='row mt-5 mb-5'>

              <div className='col-md-6 my-auto'>
                <h5 className='details-text'> <span className='details-text-bold'>Burger:-</span>"Savor our signature burger, made with fresh veggies and topped with melted cheese."
                  "Juicy beef or chicken patty, crispy lettuce, and melted cheese on a toasted bun."
                  "Classic comfort food at its finest, our burger is a must-try."</h5>
              </div>

              <div className='col-md-6'>
                <Link to="/burger" >
                  <div className='menu-card mx-auto mb-5'>
                    <div className='menu-image'>
                      <img src='burger/Crispy Veggie Burger 2.jpeg' alt='burger' />
                    </div>
                    <div className='menu-content'>
                      <h5 className='details-text-bold'>Burger</h5>
                      <p className='details-text'>Click For More </p>
                    </div>
                  </div></Link>
              </div>

            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" >
            <div className='row mt-5 mb-5'>
              <div className='col-md-6'>
                <Link to="/coffee">
                  <div className='menu-card mx-auto mb-5'>
                    <div className='menu-image'>
                      <img src='coffee/chocolate cappuccino.jpg' alt='...' />
                    </div>
                    <div className='menu-content'>
                      <h5 className='details-text-bold'>Coffee</h5>
                      <p className='details-text'>Click For More </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='col-md-6 my-auto'>
                <h5 className='details-text'><span className='details-text-bold'>Coffee:-</span>"Indulge in our rich and smooth coffee, expertly brewed to perfection."
                  "Wake up to a rich and bold cup of coffee, roasted to bring out the best flavors."
                  "Our coffee is the perfect blend of art and science, crafted to delight your senses."</h5>
              </div>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" >
            <div className='row mt-5 mb-5'>
              <div className='col-md-6 my-auto mb-3'>
                <h5 className='details-text'> <span className='details-text-bold'>Cake:-</span>"Treat yourself to our decadent cakes, made with love and care."
                  "Moist and flavorful, our cakes are the perfect way to satisfy your sweet tooth."
                  "Indulge in a slice of heaven, our cakes are baked fresh daily."</h5>
              </div>

              <div className='col-md-6'>
                <Link to="/cake">
                  <div className='menu-card mx-auto mb-5'>
                    <div className='menu-image'>
                      <img src='Burger Farm/Nutella choco brownie.jpeg' alt='...' />
                    </div>
                    <div className='menu-content'>
                      <h5 className='details-text-bold' >Cake</h5>
                      <p className='details-text'>Click For More </p>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>


          <div data-aos="fade-right" data-aos-duration="1000" >
            <div className='row mt-5 mb-5'>
              <div className='col-md-6  '>
                <Link to="/food">
                  <div className='menu-card mx-auto'>
                    <div className='menu-image'>
                      <img src='Burger Farm/Farm Spicy Chicken wrap.jpeg' alt='...' />
                    </div>
                    <div className='menu-content'>
                      <h5 className='details-text-bold'>Veg Rolls</h5>
                      <p className='details-text'>Click For more </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-6 my-auto mt-3'>
                <h5 className='details-text'><span className='details-text-bold'>Veg Rolls:-</span>"Enjoy our crispy veg rolls, filled with spicy chicken and fresh veggies."
                  "Savor the flavors of our veg rolls, packed with crunchy veggies and savory spices."
                  "A healthy and delicious option, our veg rolls are a must-try."</h5>
              </div>


            </div>
          </div>

        </div>



      </section >
      {/* ---------------------------------------------About-Section-------------------------------------------- */}

      <section id='About'>

        <div className="container">
          <div className="row">
            <div className='col-md-6 mx-auto  mb-2'>
              <h1 className='About-head mt-5 mb-3'>About Restaurant</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" >
              <div className='row'>
                <div className='col-md-8'>
                  <h5 className='About-text'><span className='About-text-head'>Welcome to our Farm restaurant,</span><br />
                    The Farm is where culinary innovation meets the timeless charm of breakfast and lunch classics. Our menu, a treasure trove of gourmet pancakes, artisanal breakfast cocktails, and the best mimosas in Denver, promises an unrivaled dining experience.<br />

                    Savor the flavors of Denver from decadent French toast to savory benedicts, each dish at The Farm is crafted to perfection, making us the go-to spot for weekend brunch in Denver. Whether you're indulging in a family-friendly brunch or seeking the perfect brunch spot for a lazy Sunday, The Farm's unique menu caters to all.<br />
                    where we serve up delicious food and  drinks in a warm and inviting atmosphere.<br /> Our menu features a variety of options to suit every taste,  from classic comfort food to international flavors. We're passionate about using only the freshest ingredients and cooking  methods to bring out the best flavors in every dish. Whether you're in the mood for a quick  bite or a leisurely  meal, we've got you covered. Come visit us today and taste  the difference for yourself! </h5>

                </div>
                <div className='col-md-4 my-auto'>

                  <div className='about-image'>
                    <img src='MainPageImage/restaurant.jpg' alt="..." />
                  </div>

                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" >
              <div className='row mt-5'>

                <div className='col-md-8 '>
                  <h5 className='About-text'><span className='About-text-head'>The Farm Experience,</span><br />Located within the Rally Hotel, across 20th Street from Coors Field, we offer a brunching experience for both the young and young at heart.<br />

                    Our two-toned Terrazzo floor mirrors the South Platte River as it winds through Denver, leading you through the restaurant to an outdoor patio located within McGregor Square for a front row seat to the bustling plaza and expansive outdoor screen.<br />

                    Whether you're looking to kick-start your day, unwind on the weekends, or simply relish the joys of a leisurely brunch, The Farm is your ultimate destination. Join us in celebrating the art of brunch, where every plate tells a story and every guest becomes part of our "OG" family.<br />

                    Come and discover why "The Original" holds a special place in the hearts of locals and visitors alike, as we continue to redefine the essence of brunch in the heart of Denver, Colorado.

                    Come take a bite out of Denver at The Farm -- we'll see you soon!</h5>
                </div>
                <div className='col-md-4 my-auto '>
                  <div className='about-image '>
                    <img src='MainPageImage/image3.jpg' alt='...' />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" >

              <div className='row mt-5'>
                <div className='col-md-8'>
                  <h5 className='About-text'> <span className='About-text-head'> Meet Our Executive Chef,</span><br /> <span style={{ fontWeight: "bold" }}>Stephen Greer</span> is the executive chef of The Original, located within The Rally Hotel at McGregor Square and operated by Sage Restaurant Concepts. The Original reinvents the neighborhood eatery,<br></br> combining timeless inspiration from classic Americana with inventive and playful modern flair.

                    Greer began his culinary career as head chef at Embassy Suites Hotel in Denver, and he’s since garnered more than 15 years of culinary experience at esteemed restaurants, hotels and clubs in Colorado, Texas and California.<br /> Most recently, he served as executive chef of Frank’s Chophouse in Boulder, Colo., where he helped redevelop the restaurant under new ownership during the turbulency of the pandemic, overseeing a team of 20 with a successful and profitable return.

                    Greer utilizes his expertise and knowledge as it pertains to utilizing the highest quality proteins, local sourcing, scratch cooking and fine dining to demonstrate even simple, delicious comfort food can be an elevated and quality experience.<br /> He is a graduate of Paragon Culinary School in Colorado Springs, where he obtained his Certificate of Culinary Mastery.</h5>
                </div>

                <div className='col-md-4  my-auto'>

                  <div className='chef-image'>
                    <img src='MainPageImage/chef.jpg' alt="..." />
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ---------------------------------------------full-Menu-section-------------------------------------------- */}
      <section id="All-items">
        <div className="container-fluid mt-5">
          <div className='row'>
            <div className='col-md-6 mx-auto  mb-2'>
              <h1 className='About-head mt-5 mb-3'>Full Menu Of Restaurant</h1>
            </div>

          </div>

          <div data-aos="flip-up" data-aos-duration="500">
            <div className="row">
              <div className=' col-md-6  select-item-div mx-auto mt-4'>
                <span className="nav-item">
                  <Link className="nav-link" to="#">Coffee
                    <img className='icon-image mb-2' src='/coffee-cup.png' /></Link>
                </span>

                <span className="nav-item">
                  <Link className="nav-link" to="#FoodItems"

                    onClick={HandleFood}>Sandwich  <img className='icon-image mb-2' src='/sandwich.png' /></Link>

                </span>

                <span className="nav-item">
                  <Link className="nav-link" to="#CakeItems"
                    onClick={HandleCake}>Cake<img className='icon-image mb-2 ms-1' src='/cake.png' /></Link>
                </span>

                <span className="nav-item">
                  <Link className="nav-link" to="#BurgerItems"
                    onClick={HandleBurger}
                  >Burger<img className='icon-image mb-2 ms-1' src='/burger.png' /></Link>
                </span>

              </div>


            </div>
          </div>

        </div>
      </section>

      <section>
        <div data-aos="fade-right">
          <section id='DrinkItems'>
            <div className='container-fluid'>

              <div className='row'>
                <div className="seven mt-5 p-0">
                  <h1>farm's Special Coffee</h1>
                </div>
              </div>


              <div className='row '>
                {coffee
                  // .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
                  .map((data) => (
                    <div className=' col-6 col-sm-4 col-md-3    mt-2 p-0 '>
                      <div className="product-card">
                        <div className="image-container">
                          <img src={data.image} alt="Morning Set" />
                          <span className="favorite-star">★</span>
                        </div>
                        <div className="product-info">
                          <h2 id='food-head'>{data.name}</h2>
                          <p id='food-des'>{data.description}</p>
                          <div className="tags">
                            <span className="tag">{data.flavorProfile1}</span>
                            <span className="tag">{data.flavorProfile2}</span>
                            <span className="tag">{data.flavorProfile3}</span>
                          </div>
                          <div className="price-order">
                            <span className="price">₹{Math.abs(data.price)}</span>
                            <button onClick={() => { dispatch(addCoffeeToCart(data)); notify() }} className="order-button">Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </section>
        </div>

        <div data-aos="fade-right">
          <section id='FoodItems'>
            <div className='container-fluid'>

              <div className='row'>
                <div className="seven mt-5 p-0">
                  <h1>farm's Special Food</h1>
                </div>
              </div>

              <div className='row'>
                {food
                  // .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
                  .map((foodData) => (
                    <div className='col-6 col-sm-4 col-md-3   mt-3 p-0 '>
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
                            <button onClick={() => { dispatch(addFoodToCart(foodData)); notify1() }} className="order-button">Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </section>
        </div>

        <div data-aos="fade-right">
          <section id='CakeItems'>
            <div className='container-fluid'>

              <div className='row'>
                <div className="seven mt-5 p-0">
                  <h1>farm's Special Cake</h1>
                </div>
              </div>

              <div className='row'>
                {cake
                  // .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
                  .map((cakeData) => (
                    <div className=' col-6 col-sm-4 col-md-3   mt-3 p-0 '>
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
                            <button onClick={() => { dispatch(addCakeToCart(cakeData)); notify2() }} className="order-button">Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </section>
        </div>


        <div data-aos="fade-right">
          <section id='BurgerItems'>
            <div className='container-fluid mb-10'>

              <div className='row'>
                <div className="seven mt-4 p-0">
                  <h1>Farm's Special Burger</h1>
                </div>
              </div>

              <div className='row '>
                {burger
                  // .filter((el) => el && el.name && el.name.toLowerCase().includes(inputtext))
                  .map((burgerData) => (
                    <div className=' col-6 col-sm-4 col-md-3    mt-2 p-0 '>
                      <div className="product-card">
                        <div className="image-container">
                          <img src={burgerData.image} alt="Morning Set" />
                          <span className="favorite-star">★</span>
                        </div>
                        <div className="product-info">
                          <h2 id='food-head'>{burgerData.name}</h2>
                          <p id='food-des'>{burgerData.description}</p>
                          <div className="tags">
                            <span className="tag">{burgerData.flavorProfile1}</span>
                            <span className="tag">{burgerData.flavorProfile2}</span>
                            <span className="tag">{burgerData.flavorProfile3}</span>
                          </div>
                          <div className="price-order">
                            <span className="price">₹{Math.abs(burgerData.price)}</span>
                            <button onClick={() => { dispatch(addBurgerToCart(burgerData)); notify3() }} className="order-button">Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </section>
        </div>

      </section>

      {/* -----------------------------------------------Footer--------------------------------------------------- */}

      <section>
      <div data-aos="fade-up">
        <div>
          <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
              <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='facebook-f' />
                </Link>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='twitter' />
                </Link>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='google' />
                </Link>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='instagram' />
                </Link>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='linkedin' />
                </Link>
                <Link to='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='github' />
                </Link>
              </div>
            </section>

            <section className=''>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      <MDBIcon color='secondary' icon='gem' className='me-3' />
                      Farm Restaurant
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                      <Link to='/coffee' className='text-reset'>
                        Coffee
                      </Link>
                    </p>
                    <p>
                      <Link to='/food' className='text-reset'>
                        Food
                      </Link>
                    </p>
                    <p>
                      <Link to='/burger' className='text-reset'>
                        Burger
                      </Link>
                    </p>
                    <p>
                      <Link to='/cake' className='text-reset'>
                        cake
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                      <Link to='#' className='text-reset'>
                        Pricing
                      </Link>
                    </p>
                    <p>
                      <Link to='#!' className='text-reset'>
                        Settings
                      </Link>
                    </p>
                    <p>
                      <Link to='#!' className='text-reset'>
                        Orders
                      </Link>
                    </p>
                    <p>
                      <Link to='#!' className='text-reset'>
                        Help
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      Bagru , Near Manipal Univercity
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      abhidagar6319@gmail.com
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' />  + 8440003711
                    </p>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              © 2024 Copyright:
              <Link className='text-reset fw-bold' to='#'>
                Farm Restaurant
              </Link>
            </div>
          </MDBFooter>
        </div>
        </div>
      </section>

    </div >
  )
}

export default Main