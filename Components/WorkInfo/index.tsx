import React from 'react';
import GetInfoBtn from '../GetInfoBtn';
import Link from 'next/link';

function WorkInfo() {
  return (
    <div className='infoContainer'>
        <div className='leftPart'>
            <h2>We Create The Art Of Stylish Living Stylishly</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.</p>
            <Link href="/contact">012345678</Link>
            <span>Call Us Anytime</span>
            <GetInfoBtn title="Get Free Estimate" to="/projects"/>
        </div>
        <div className='rightPart'>
            
        </div>
        
    </div>
  )
}

export default WorkInfo;