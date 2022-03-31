cd import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types'
import './index.css'
import Nav from './Nav.js'
import Time from './Time.js'

const HackerNews = () => {
  const news = [
    {
      id: 1,
      info: 'Why i am Suing the US Government',
      site: '(bunniestudios.com)',
      points: 1346,
      comments: 257,
      user: 'ivank',
      timestamp: '2020-03-10 2:24:37',
    },
    {
      id: 2,
      info: 'Zenzizenzizenzic',
      site: '(wikipedia.com)',
      points: 140,
      comments: 40,
      user: 'vinchuco',
      timestamp: '2020-03-10 2:24:37',
    },
    {
      id: 3,
      info: 'A Practical security guide for web developers',
      site: '(github.com)',
      points: 72,
      comments: 6,
      user: 'vinchuco',
      timestamp: '2020-03-10 2:24:37',
    },
  ]
  return (
    <div className='main-container'>
      <div className='template'>
        <Nav />
        {news.map((news) => (
          <div className='new-list' key={news.id}>
            <div className='news'>
              <p className='item_1'>
                {news.id}.
                <i className='fa fa-sort-asc' aria-hidden='true' id='i' />
                <span className='info'>{news.info}</span> {news.site}
              </p>
              <p className='item_2'>
                <Points count={news.points} /> points by {news.user}
                <Time time={news.timestring} /> | flag | {news.comments}
                comments | instapaper | save to pocket
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Points = ({ count }) => (
  <span className='points'>
    {count > 0 && <span className='point-counts'>{count}</span>}
  </span>
)

ReactDOM.render(<HackerNews />, document.querySelector('#root'))
