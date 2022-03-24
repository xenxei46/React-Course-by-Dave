import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function AddressLabel({ person }) {
  return (
    <div className='address'>
      <p>{person.name},</p>
      <p>{person.address},</p>
      <p>{person.city}</p>
      <Envelope />
      <CreditCard />
      <IconButton />
    </div>
  )
}

function Envelope() {
  return (
    <div className='Envelope'>
      <div className='container'>
        <div className='sender'>
          <p>{people.fromPerson}</p>
          <p>{people.address}</p>
          <p>{person.city}</p>
        </div>
        <div className='stamp'>
          <div className='pad'>
            <strong>STAMP</strong>
          </div>
        </div>
      </div>
      <div className='receiver'>
        <p>{people.toPerson}</p>
        <p>{people.address}</p>
        <p>{person.city}</p>
      </div>
    </div>
  )
}
function CreditCard() {
  return (
    <div className='card'>
      <div className='title'>
        <p>
          <strong>{cardInfo.bank}</strong>
        </p>
      </div>
      <div className='num'>
        <p>
          {cardInfo.number}
          <br />
        </p>
      </div>
      <div className='mini-no'>1234</div>
      <div className='exp'>
        <p className='validity'>
          VALID <br />
          THRU
        </p>
        <p>{cardInfo.expDate}</p>
      </div>
      <div className='holder'>{cardInfo.name}</div>
    </div>
  )
}

function IconButton({ children }) {
  return <button>{children}</button>
}

;<IconButton children={'Do The Thing'}></IconButton>

const person = {
  name: 'Wisdom John Ikoi',
  address: 'N0.9 Royal Paragon Avenue',
  city: 'Rivers State, PHC',
}

const people = {
  toPerson: 'Mr. Wale CAD',
  fromPerson: 'Internal Audit CAD',
  address: 'No.10 Woji CAD ',
}

const cardInfo = {
  name: 'IKOI WISDOM JOHN',
  expDate: '05/22',
  number: '1234 5678 8756 7898',
  bank: 'First Bank, Nig.',
}

ReactDOM.render(<children />, document.querySelector('#root'))
