import React from 'react'
import ImG1 from '../images/ig-img-1.jpeg'
import ImG2 from '../images/ig-img-2.jpeg'
import ImG3 from '../images/ig-img-3.jpeg'
import ImG4 from '../images/ig-img-4.jpeg'
import ImG5 from '../images/ig-img-5.jpeg'
import ImG6 from '../images/ig-img-6.jpeg'
import Instagrammer from './Instagrammer'

function Instagram() {
  return (
    <div className='max-w-[1270px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@iWealt Captur</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
      <Instagrammer socialImg={ImG1}/>
      <Instagrammer socialImg={ImG2}/>
      <Instagrammer socialImg={ImG3}/>
      <Instagrammer socialImg={ImG4}/>
      <Instagrammer socialImg={ImG5}/>
      <Instagrammer socialImg={ImG6}/>
      </div>
    </div>
  )
}

export default Instagram
