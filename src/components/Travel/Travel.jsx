import React from 'react'
import './Travel.css'
import { ImLocation } from 'react-icons/im'

const Travel = (props) => {
  return (
    <div className='travel_container'>
      <div className='left_travel'>
        <img src={props.img} alt=''/>
      </div>
      <div className='right_travel'>
        <div className='map'>
          <p><ImLocation className='icon'/> {props.location}</p>
          <a href='#'>View on Google Maps</a>
        </div>

        <div className='info'>
          <h1>{props.name}</h1>
          <p>{props.date}</p>
          <span>{props.content}</span>
        </div>
      </div>
    </div>
  )
}

export default Travel