import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types'
import './index.css'
import Header from './Header'
import Navbar from './Navbar'

const AE = () => {
  const card = [
    {
      id: 1,
      title: 'DIY - Tips Tricks Ideals Repair',
      sub: 'Aviation Explorer',
      pad: '4,850',
      banner: `https://i.pinimg.com/236x/e4/0f/da/e40fdae2c3e6a3303165ce6a06f1b972.jpg`,
      img1: `https://i.pinimg.com/236x/32/43/2e/32432e59e01985098684824476bd5e4b.jpg`,
      img2: `https://i.pinimg.com/236x/6b/1e/10/6b1e1031313b5fa32264ac36282d7c4a.jpg`,
      img3: `https://i.pinimg.com/236x/c9/90/ff/c990ffd83c84f854bfcfe014597bb486.jpg`,
    },
    {
      id: 2,
      title: 'AVIATION',
      sub: 'Aviation Explorer',
      pad: '641',
      banner: `https://i.pinimg.com/236x/91/2d/3a/912d3a7bab66320d18b082f82c91ea65.jpg`,
      img1: `https://i.pinimg.com/236x/0f/92/ef/0f92ef9ec746465a20b092613e859279.jpg`,
      img2: `https://i.pinimg.com/236x/61/36/63/6136638e4e7d1635bfbe3974ab250d7e.jpg`,
      img3: `https://i.pinimg.com/236x/55/4f/da/554fdab65b6be30baf72d5a2fb310710.jpg`,
    },
    {
      id: 3,
      title: 'Exceptional Aviation',
      sub: 'Aviation Explorer',
      pad: '209',
      banner: `https://i.pinimg.com/236x/7e/aa/87/7eaa8762d4c136603d8f7d656601bc87.jpg`,
      img1: `https://i.pinimg.com/236x/d5/dc/03/d5dc03978de2fa493dcf27c14a90963f.jpg`,
      img2: `https://i.pinimg.com/236x/30/90/6e/30906e54cfd18e2ac545a0cf338887b5.jpg`,
      img3: `https://i.pinimg.com/236x/1f/0a/a7/1f0aa71c71fc15decec6b90930179c1a.jpg`,
    },
    {
      id: 4,
      title: 'AEROSPACE',
      sub: 'Aviation Explorer',
      pad: '1,495',
      banner: `https://i.pinimg.com/236x/3e/91/74/3e9174f6769e5c7207d58cde5dbf71da.jpg`,
      img1: `https://i.pinimg.com/236x/68/d9/ba/68d9ba97b59bad84b045e9c38e5e6139.jpg`,
      img2: `https://i.pinimg.com/236x/99/bf/49/99bf49effc30d4b5e263c8f8851744f7.jpg`,
      img3: `https://i.pinimg.com/236x/c7/85/88/c78588b57ada514fa918a99639b6b701.jpg`,
    },
    {
      id: 5,
      title: 'WHY FLYING WAS WORT...',
      sub: 'Aviation Explorer',
      pad: '209',
      banner: `https://i.pinimg.com/236x/eb/2a/2e/eb2a2e70b65c60045331a208022aa418.jpg`,
      img1: `https://i.pinimg.com/236x/e3/ba/27/e3ba276a58ebe14ca2639c9af3f16f24.jpg`,
      img2: `https://i.pinimg.com/236x/14/17/d5/1417d553acafecc0b4c3a0e5ebc847a0.jpg`,
      img3: `https://i.pinimg.com/236x/75/cc/1a/75cc1a646ac1d0717bfb2914ec4d8aa2.jpg`,
    },
    {
      id: 6,
      title: 'Aircraft Recycled into Furni...',
      sub: 'Aviation Explorer',
      pad: '75',
      banner: `https://i.pinimg.com/236x/d9/13/ff/d913fffd64ee432770c7a39429ca7344.jpg`,
      img1: `https://i.pinimg.com/236x/43/6e/22/436e225cbe0dbf311e624a84b386b10c.jpg`,
      img2: `https://i.pinimg.com/236x/35/f8/18/35f8186f265f1d2c08540e028597d80a.jpg`,
      img3: `https://i.pinimg.com/236x/c7/06/7f/c7067ff7d0bf348ca4511f62ea396d5c.jpg`,
    },
  ]
  return (
    <div className='main-container'>
      <header>
        <Header />
        <Navbar />
      </header>
      <div className='bg'>
        <div className='template'>
          {card.map((card) => (
            <div className='card-preview' key={card.id}>
              <div className='card'>
                <div className='title'>
                  <h4>{card.title}</h4>
                  <p>{card.sub}</p>
                </div>
                <span className='image'>
                  <span className='img-box'>
                    <img src={card.banner} alt='banner' className='img' />
                    <span className='pad'>
                      <p>
                        <i class='fa fa-map-pin' aria-hidden='true'></i>
                        {card.pad}
                      </p>
                    </span>
                  </span>

                  <div className='gallery'>
                    <span className='flex'>
                      <img src={card.img1} alt='img' className='img_gallery' />
                      <img src={card.img2} alt='img' className='img_gallery' />
                      <img src={card.img3} alt='img' className='img_gallery' />
                    </span>
                  </div>
                  <span>
                    <button>Follow</button>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<AE />, document.querySelector('#root'))
