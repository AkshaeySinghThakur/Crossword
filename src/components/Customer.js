import React from 'react'
import Card from 'react-bootstrap/Card';
function Customer() {
  return (
    <div className='container'>
      <h4>Contact Us</h4>
      <h4>Contact Information</h4>
      <div className='d-flex flex-row'>
        <div className='p-4'>
          <Card>
            <Card.Body>
              <div className='row'>
                <div className='col-3'>
                  <img src='images/orderrelatedquery01.jpg' alt='' className='h-50' />
                </div>
                <div className='col-9'>
                  <Card.Title>Order Related Query</Card.Title>
                  <Card.Text>
                    Issues related to order tracking, order not fulfilled properly, cancel, change order, returns, refunds; pretty much everything related to orders.
                  </Card.Text>

                  <Card.Link href="#" className='link1 text-dark'>CLICK TO PROCEED &gt;</Card.Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='p-4'>
          <Card>
            <Card.Body>
              <div className='row'>
                <div className='col-3'>
                  <img src='images/somethingelsequery01.jpg' alt='' className='h-50' />
                </div>
                <div className='col-9'>
                  <Card.Title>Something Else</Card.Title>
                  <Card.Text>
                    Pages not working, Payments, Deals, Offers, rentals, Promotions, Product features, Business opportunities, and everything thats not about product.
                  </Card.Text>

                  <Card.Link href="#" className='link1 text-dark'>CLICK TO PROCEED &gt;</Card.Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <p>You may be able to find an answer to your query in our help pages.</p>
      <p>If our help pages did not provide an answer to your question, please complete the form below. Mandatory fields are marked with *</p>
      <div className='row shadow mt-4'>
        <div className='col-2'><p>For any queries or complaints:</p></div>
        <div className='col-3'><p>1800 3000 1203</p></div>
      </div>
      <div className='row shadow mt-4'>
        <div className='col-3'><p>Registered Office Address:</p></div>
        <div className='col-9'><p>Crossword Bookstores Limited, 601, 6th Floor, Sourabh Hall, Opp. Jehangir Nursing Home, Pune 411001, Maharashtra</p></div>
      </div>
      <div className='row shadow mt-4'>
        <div className='col-2'>
          <p>For Bulk Orders and Gift Voucher Sales Contact:</p>
          <p>To advertise with Crossword Contact:</p>
        </div>
        <div className='col-10 mt-4'>
          <p>Mr. Amit Popat - 98204 85707 / amit.popat@crossword.in</p>
          <p className='mt-5'>Mr. Ajinkya Mohite - 98192 24243 / ajinkya.mohite@crossword.in</p>
        </div>
      </div>
    </div>
  )
}

export default Customer
