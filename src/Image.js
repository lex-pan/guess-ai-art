import React from 'react'

export default function Image() {
  return (
        <div className='imageSection'>
            <img className='image' src={require('./photo.png')}></img>
        </div>
  )
}