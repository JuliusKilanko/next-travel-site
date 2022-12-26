import React from 'react'
import Image from 'next/image'
import {FaInstagram} from 'react-icons/fa'

const Instagrammer = ({socialImg}) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive'/>

      {/* Overlay Design */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 right-0 left-0 bottom-0 hover:bg-black/50 group cursor-pointer'>
      <p className='text-gray-300 hidden group-hover:block'>
      <FaInstagram size={30} className='z-10'/>
      </p>
      </div>
    </div>
  )
}

export default Instagrammer
