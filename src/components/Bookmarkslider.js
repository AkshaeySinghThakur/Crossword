import React from 'react'
import Data from './bookmark.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
function Bookmarkslider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className='container'>
        <h2 className='bg-warning mt-2'>Bookmarks</h2>
    <div className='row'>
      <Slider {...settings}>
        {Data.bookmarks.map((value) => (
          
          <div className='d-flex flex-row' key={value.id}>
            <div className='p-2'>
            <img src={value.image} alt={''} className="img-fluid d-block mx-auto h-50 w-75"/>
            <h6>{value.name}</h6>
            <p>{value.desc}</p>
             <h6>₹ {value.price}</h6>
             <Button variant="dark"><i class="fa-solid fa-cart-shopping"></i> Buy Now</Button>
             </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default Bookmarkslider
