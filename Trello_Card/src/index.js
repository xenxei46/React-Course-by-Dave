import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types'
import './index.css'
import Bottom from './bottom'
import Title from './Title'

const TrelloCard = () => {  
  const card = [
    {
      id: 1,
      body: 'Subwoofer',
    },
    {
      id: 2,
      body: 'Non-porous, washable',
    },
    {
      id: 3,
      body: 'Wings',
    },
    {
      id: 4,
      body: 'Beveled Bezel',
    },
    {
      id: 5,
      body: 'Bezeled Bevel',
    },
    {
      id: 6,
      body: 'Seedless',
    },
  ]
  return (
    <div className='main-container'>
      <div className='template'>
        <Title />
        {card.map((card) => (
          <div className='blog-preview' key={card.id}>
            <div className='card'>
              <p>{card.body}</p>
            </div>
          </div>
        ))}
        <Bottom/>
      </div>
    </div>
  )
}






ReactDOM.render(<TrelloCard />, document.querySelector('#root'))
