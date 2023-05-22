import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';
function Firstnav() {
  return (
    <div className='bg-dark d-flex flex-row'>      
        <Container>          
          <div>                    
            <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <img src='./images/logo.png' alt=''/>
            <Link to="/" className='bg-dark text-warning link1'>Home</Link>
            <Link to="/Login" className='bg-dark text-warning link1'>Login</Link>
            <Link to="/Account" className='bg-dark text-warning link1'>My Account</Link>
            <Link to="/Giftcard" className='bg-dark text-warning link1'>Gift Card Balance</Link>
            <Link to="/Order" className='bg-dark text-warning link1'>Track your Order</Link>
            <Link to="/Wishlist" className='bg-dark text-warning link1'>My Wishlist</Link>
            <Link to="/Customer" className='bg-dark text-warning link1'><Button variant="dark" className='text-warning'>Customer Care</Button> </Link>
            </div>          
           
            </div>
            <div className='d-flex flex-row justify-content-end align-items-center'>
           <input type="search" className='w-50'/>                 
        <Button variant="warning" size='md' className='ms-4'><i class="fa-solid fa-cart-shopping"></i> My Cart</Button>{' '}                           
        </div> 
                                      
        </Container>   
      </div>      
    
  )
}

export default Firstnav
