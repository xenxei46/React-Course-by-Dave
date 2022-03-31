import React from 'react'
import './index.css'
import moment from 'moment'
import propTypes from 'prop-types'

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>
};

Time.propTypes = {
  time: propTypes.string,
}

export default Time;
