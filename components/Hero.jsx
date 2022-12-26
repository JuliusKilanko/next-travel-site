import React from 'react'
import Link from 'next/link'

function Hero({title, message}) {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/70 z-[1]'/>
      <div className='text-white p-5 z-[2] text-center'>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className='py-5 text-2xl'>{message}</p>
        <Link href='/'><button className='px-8 py-2 border'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Hero
