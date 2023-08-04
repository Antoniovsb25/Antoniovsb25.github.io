import { useState } from 'react';

function MainBanner() {
  const images = [
    '/images/mainbanner.png',
    '/images/mainbanner.png',
    '/images/mainbanner.png',
    '/images/mainbanner.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="flex justify-center overflow-hidden relative">
      <div
        className="w-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/mainbanner-mobile.png" />
              <img
                className="max-w-full w-full m-auto h-auto"
                src={image}
                alt={`Banner ${index + 1}`}
              />
            </picture>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded"
        onClick={handlePrevSlide}
      >
        <img src="/images/_icon-prev.png" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded"
        onClick={handleNextSlide}
      >
        <img src="/images/_icon-next.png" />
      </button>
    </div>
  );
}

export default MainBanner;
