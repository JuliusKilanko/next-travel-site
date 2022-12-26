import React, {useState} from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'


const Slider = ({slides}) => {
    const[current, setCurrent] =useState(0);
    const length = slides.length

    const nextSlide =()=>{
        setCurrent(current === length-1 ? 0 :current + 1)
    }
    const preSlide =()=>{
        setCurrent(current === 0 ? length -1 :current - 1)
    }

    if (!Array.isArray(slides) || slides.length <=0){
        return null;
    }
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center'>Gallery</h1>

      <div className='relative'>
        {SliderData.map((slide, index)=>{
            return(
               <div key={index} className={index === current ?  'opacity = [1] ease-in duration=1000' : 'opacity-0'}>
               <FaArrowCircleLeft 
               onClick={preSlide} size ={20} className='absolute top-[50%] left-[30px] text-white/100 cursor-pointer select-none z-[2]'/>
                    {index === current &&(
                        <Image src={slide.image} alt="" className='w-[1440px] h-[450px] m-auto object-cover mt-10 relative'/>
                    )}
               <FaArrowCircleRight 
               onClick={nextSlide}
               size ={20} className='absolute top-[50%] right-[30px] text-white/100 cursor-pointer select-none z-[2] group flex justify-center items-center'/>
               <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/60 flex justify-center items-center gap-5 flex-col'>
               <p className='text-white group-hover:block text-2xl text-center'>{slide.title}</p>
               <p className=' text-white max-w-[650px] text-center'>{slide.paragraph}</p>
               <button className='px-8 py-2 border text-white'>{slide.btn}</button>
               </div>
               </div>
                )
        })}
      </div>
    </div>
  )
}

export default Slider
