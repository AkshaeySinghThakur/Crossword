import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function Crosswordfooter() {
  return (
    <div className='d-flex flex-row justify-content-evenly bg-light mt-4'>
      <div className='p-2 text-start'>
        <h5>Shop With Confidence</h5>
        <Dropdown.Item eventKey="1">Secure shopping</Dropdown.Item>
        <Dropdown.Item eventKey="2">Customer Care</Dropdown.Item>
        <Dropdown.Item eventKey="3">Privacy Policy</Dropdown.Item>
        <Dropdown.Item eventKey="4">Terms of use</Dropdown.Item>
        <Dropdown.Item eventKey="5">Shipping Policy</Dropdown.Item>
        <Dropdown.Item eventKey="6">Returns Policy</Dropdown.Item>
        <Dropdown.Item eventKey="7">Payment Option</Dropdown.Item>
        <Dropdown.Item eventKey="8">Delivery Area</Dropdown.Item>
        <Dropdown.Item eventKey="9">How to shop</Dropdown.Item>
        <Dropdown.Item eventKey="10">Shoppers Stop</Dropdown.Item>
        </div>
       
      <div className='p-2 text-start'>
        <h5>About Us</h5>
        <Dropdown.Item eventKey="1">About Us</Dropdown.Item>
        <Dropdown.Item eventKey="2">Our Directors</Dropdown.Item>
        <Dropdown.Item eventKey="3">Crossword Book Award</Dropdown.Item>
        <Dropdown.Item eventKey="4">Advertise with us</Dropdown.Item>
        <Dropdown.Item eventKey="5">Crossword Stores</Dropdown.Item>
        <Dropdown.Item eventKey="6">Crossword Franchisee</Dropdown.Item>
        <Dropdown.Item eventKey="7">Help / FAQ</Dropdown.Item>
        <Dropdown.Item eventKey="8">Contact us</Dropdown.Item>
        <Dropdown.Item eventKey="9">Feedback</Dropdown.Item>
        </div>
        
      <div className='p-2 text-start'>
        <h5>My Account</h5>
        <Dropdown.Item eventKey="1">My Accout</Dropdown.Item>
        <Dropdown.Item eventKey="2">My Orders</Dropdown.Item>
        <Dropdown.Item eventKey="3">My Shopping Cart</Dropdown.Item>
        <Dropdown.Item eventKey="4">My Wish List</Dropdown.Item>
        </div>
      <div className='p-2 text-start'>
        <h5>Payment Option</h5>
        <Dropdown.Item eventKey="1">Credit Card</Dropdown.Item>
        <Dropdown.Item eventKey="2">Net Banking (All Major Indian Banks)</Dropdown.Item>
        <Dropdown.Item eventKey="3">Debit Card</Dropdown.Item>
        <Dropdown.Item eventKey="4">Cash on Delivery</Dropdown.Item>
        <Dropdown.Item eventKey="4">Crossword Gift Cards</Dropdown.Item>
        <h5 className='mt-2'>Follow Us On</h5>
        <div className='d-flex flex-row mt-4'>
        <Dropdown.Item eventKey="1"><i class="fa-brands fa-facebook size"></i></Dropdown.Item>
        <Dropdown.Item eventKey="2"><i class="fa-brands fa-twitter size"></i></Dropdown.Item>
        <Dropdown.Item eventKey="3"><i class="fa-brands fa-square-instagram size"></i></Dropdown.Item>
        </div>
      </div>
    </div>
  )
}

export default Crosswordfooter
