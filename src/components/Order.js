import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Order() {
  return (
    <div className='App'>
      <h3>Sign in with</h3>
      <Button variant="primary"><i class="fa-brands fa-facebook-f"></i>  Facebook</Button>{' '}
      <Button variant="primary"><i class="fa-brands fa-twitter"></i>  Twitter</Button>{' '}
      <Button variant="danger"><i class="fa-brands fa-google"></i>Google</Button>{' '}
      <Button variant="primary"><i class="fa-brands fa-linkedin"></i>  Linkdin</Button>{' '}
      <h3 className='mb-4 mt-2'>OR</h3>
      
        <Link className='p-2 text-warning link1 fs-3'>Login</Link>
        <Link className='p-2 link1 text-dark'>New User? Register</Link>
      
      <form className='mt-4'>
        <input type="email" placeholder='Email'/><br/><br/>
        <input type="password" placeholder='Password'/><br/><br/>
        <Button variant="dark">Login</Button><br/><br/>
        <Link to="" className='link1 text-dark'>Forgot password? Reset it!</Link>
      </form>
    </div>
  )
}

export default Order
