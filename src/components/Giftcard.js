import React from 'react'
import Button from 'react-bootstrap/Button';
function Giftcard() {
  return (
    <div className='container'>
      <img src='./images/giftcardbanner.jpg' alt=' '/>
      <p>Crossword aims to be a point of cultural and social interaction where authors and poets hold court, where children are regaled, where people gravitate to be <br/>
      informed, to be entertained or even enlightened. Crossword Gift Card is an ideal gifting option for all occasions with a wide range of Books, Toys, Stationery, Gifts and Accessories.</p>
      <form>
        <label>Gift card number</label>
        <input type="text" className='ms-4'/><br/><br/>
        <hr/>
        <label>Pin number</label>
        <input type="text" className='ms-5'/><br/><br/>
        <hr/>
        <Button variant="dark">CHECK BALANCE</Button>
      </form>
      <h6 className='mt-4'>Terms & Conditions:</h6>
      <p>The Crossword Gift card is redeemable on merchandise at Crossword owned stores and crossword.in only.<br/>
      Not valid at Franchisees.<br/>
      The card holds no value until activated (minimum load value of Rs 250.)<br/>
The card cannot be redeemed for cash or credit.<br/>
If the card is lost or stolen, neither will a new card be issued nor will the money be reimbursed in any manner.<br/>
Qwikcilver Solutions and Crossword are not responsible if the voucher is lost, stolen or used without permission. The holder of this Gift Card is solely responsible. Such lost, stolen or used without permission E-Gift Card cannot be replaced or re-issued.<br/>
The holder of this card shall be solely responsible for the safe custody of the card and the credentials mentioned on it.<br/>
The card is valid for a period of 1 year from the date of activation.<br/>
Crossword reserves the right to amend the terms & conditions at its discretion without prior notice.<br/>
Dispute/s if any, are subject to Mumbai jurisdiction only.<br/>
The Gift Card cannot be used for a payment in case of home delivery.<br/>
If the order value exceeds the value of the Gift Card, the balance must be paid by Credit Card / Debit Card / Internet Banking or cash.<br/>
This Gift Card cannot be exchanged for Cash or Credit Note.<br/>
The validity of this E-Gift Card cannot be extended.<br/>
E-Gift Cards: (Gift Cards received on E-mail or SMS)<br/>
The E-Gift Card can be redeemed only once. It cannot be redeemed partly.<br/>
The entire value should be used in a single transaction.<br/>
E-Gift Cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 - 48 hours.<br/>
      </p>
    </div>
  )
}

export default Giftcard
