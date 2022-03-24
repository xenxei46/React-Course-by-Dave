import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import moment from 'moment'
import propTypes from 'prop-types'

function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreoptionsButton />
        </div>
      </div>
    </div>
  )
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/3b04bce969b9e2733076b01dcde24b3c${hash}`
  return <img src={url} className='avatar' alt='avatar' />
}

function Message({ text }) {
  return <div className='message'>{text}</div>
}

Message.propTypes = {
  message: propTypes.string,
}

function Author({ author }) {
  const { name, handle } = author
  return (
    <span className='author'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  )
}

Author.propTypes = {
  author: propTypes.shape({
    name: propTypes.string,
    handle: propTypes.string,
  }),
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow()
  return <span className='time'>{timeString}</span>
}

Time.propTypes = {
  time: propTypes.string,
}

function getRetweetCount(count) {
  if (count > 0) {
    return <span className='retweet-count'>{count}</span>
  } else {
    return null
  }
}
const ReplyButton = () => <i className='fa fa-reply reply-button' />

const RetweetButton = ({ count }) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet' />
    {getRetweetCount(count)}
  </span>
)

RetweetButton.propTypes = {
  count: propTypes.number,
}

const LikeButton = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
)

LikeButton.propTypes = {
  count: propTypes.number,
}

const MoreoptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
)

//..

const testTweet = {
  message: 'I am becoming a react Ninja',
  gravatar: 'xyz',
  author: {
    handle: 'Tech_xenxei',
    name: 'wisdom ikoi',
  },
  likes: 21,
  retweets: 20,
  timestamp: '2022-03-10 2:24:37',
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'))
