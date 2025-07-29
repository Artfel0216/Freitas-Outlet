'use client'

import { useState } from 'react'
import FreitasOutlet1 from '@/public/Arte 1.png'
import FreitasOutlet2 from '@/public/Arte 2.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [FreitasOutlet1, FreitasOutlet2]

export default function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative mt-[2rem] w-full mx-auto">
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full rounded-lg shadow-md animate-fade-right animate-duration-[3000ms]"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-[2rem] bg-gray-500 w-[2rem] h-[2rem] flex items-center justify-center rounded cursor-pointer font-bold hover:bg-black hover:text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 w-[2rem] h-[2rem] flex items-center justify-center bg-gray-500 rounded cursor-pointer font-bold hover:bg-black hover:text-white"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
