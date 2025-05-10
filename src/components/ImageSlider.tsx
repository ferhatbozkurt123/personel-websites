import { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = () => {
    setShowFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Ana Slider */}
      <div className="relative h-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Görsel ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
            onClick={openFullscreen}
          />
        </div>

        {/* Slider Kontrolleri */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePrevClick}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextClick}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Nokta Göstergeleri */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Görsel ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tam Ekran Görüntüleyici */}
      {showFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-50"
          onClick={closeFullscreen}
        >
          <div className="relative w-screen h-screen flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Görsel ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={100}
              />
            </div>

            {/* Tam Ekran Kontrolleri */}
            <button
              onClick={handlePrevClick}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-6 rounded-full hover:bg-black/70 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextClick}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-6 rounded-full hover:bg-black/70 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Kapatma Butonu */}
            <button
              onClick={closeFullscreen}
              className="fixed top-4 right-4 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Görsel Sayacı */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-3 rounded-full text-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 