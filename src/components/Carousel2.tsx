import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "ARROZ QUEBRADO",
    image: "/images/Recurso 13.jpg",
  },
  {
    title: "ARROZ INTEGRAL",
    image: "/images/Recurso 11.jpg",
  },

  {
    title: "ARROZ BLANCO",
    image: "/images/Recurso 14.jpg",
  },
  {
    title: "ARROZ PARBOLIZADO",
    image: "/images/Recurso 15.jpg",
  },
];

export default function CarouselSection() {
  return (
    <section className="relative w-full h-screen bg-white">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Imagen */}
            <Image
              src={slide.image}
              alt={slide.title}
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />

            {/* Texto */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
              <h2 className="bg-green-700 text-white text-2xl font-bold px-6 py-3">
                {slide.title}
              </h2>
              <button className="bg-black text-white px-4 py-2 flex items-center gap-2 mt-2">
                VER MÁS <ChevronRight size={18} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
      <button className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 z-10 rounded-full">
  <ChevronLeft size={24} />
</button>

<button className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 z-10 rounded-full">
  <ChevronRight size={24} />
</button>
    </section>
  );
}
