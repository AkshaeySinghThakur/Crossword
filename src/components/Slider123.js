import React,{useState} from 'react';
import Data from './db.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Buynow from './Buynow';
function Slider123() {
  const navigate=useNavigate();
  console.log(Data)
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
      <div className='row'>
        <Slider {...settings}>
          {Data.books.map((value) => (
            
            <div className='d-flex flex-row align-items-center' key={value.id}>
              <div className='p-2'>
              <img src={value.image} alt={''} className="img-fluid d-block"/>
              <h6>{value.bookname}</h6>
              <p>{value.author}</p>
               <h6>₹ {value.price}</h6>
                <Button variant="dark" onClick={()=>navigate('/Buynow')}><i class="fa-solid fa-cart-shopping"></i> Buy Now</Button>
                
               </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Slider123;
