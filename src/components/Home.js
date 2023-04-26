import React from 'react'
// import logo from './img/iphone.png'
function Home() {
  return (
    <div>
    <h1>Home Component</h1>
    <div className='add-to-cart'>
      <img src="https://media.istockphoto.com/id/1034718796/photo/3d-rendering-e-commerce-symbol-on-white-background.jpg?s=612x612&w=0&k=20&c=2ocTK4FujFYf0Ie3o69pGcm5wcT0i9w7g9CzMek38sk=" alt="" />
    </div>
    <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
    </div>
    </div>
  )
}
export default Home