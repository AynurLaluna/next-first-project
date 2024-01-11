import React from 'react'
import Button from '../Button';
function Banner() {
  return (
    <div className='banner'>
        <div className='bannerContainer'>
        <h1>Let Your Home Be Unique</h1>
        <p>There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
        <Button title="Get Started" to="/"/>
        </div>
    </div>
  )
}

export default Banner;