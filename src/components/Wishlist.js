import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Wishlist() {
  return (
    <div className='container'>
      
      <h4>WishList</h4>
      <div className='d-flex'>
      <p>Your Wish List is empty</p>
      <Link to="/" className='ms-4'><Button variant="dark">CONTINUE SHOPPING</Button></Link>
      </div>
      
    </div>
  )
}

export default Wishlist
