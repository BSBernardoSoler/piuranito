"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Recurso 1.png",
    "/Recurso 1.png",
    "/Recurso 1.png",
  ];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>

      {/* Carousel */}
      <div className="relative text-center max-w-4xl mx-auto my-10">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
          onClick={handlePrev}
        >
          &#9664;
        </button>
        <Image
          src={slides[currentSlide]}
          alt="Carousel slide"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
          onClick={handleNext}
        >
          &#9654;
        </button>

        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full mx-1 cursor-pointer ${
                index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        <button
          className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={() => alert('Más contenido pronto!')}
        >
          Ver más
        </button>
      </div>


    </div>
  );
}
