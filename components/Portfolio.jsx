import React from 'react'
import Image from 'next/legacy/image'
import Travel1 from '../images/travel1.jpg'
import Travel2 from '../images/travel2.jpg'
import Travel3 from '../images/travel3.jpg'
import Travel4 from '../images/travel4.jpg'
import Travel5 from '../images/travel5.jpg'

function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photography</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <Image 
                src={Travel1}
                    alt='/'
                    width={677}
                    height={451}
                    layout='responsive'

                />
        </div>
        <div className='w-full h-full'>
        <Image 
        src={Travel2} alt='/'
        width={215}
        height={217}
        layout='responsive'
        objectFit='cover'
         />
        </div>
        <div className='w-full h-full'>
        <Image 
        src={Travel3} alt='/'
        width={215}
        height={217}
        layout='responsive'
        objectFit='cover'
         />
        </div>
        <div className='w-full h-full'>
        <Image 
        src={Travel4} alt='/'
        width={215}
        height={217}
        layout='responsive'
        objectFit='cover'
         />
        </div>
        <div className='w-full h-full'>
        <Image 
        src={Travel5} alt='/'
        width={215}
        height={217}
        layout='responsive'
        objectFit='cover'
         />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
