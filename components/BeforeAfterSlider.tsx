import React, { useState, useRef, useEffect } from 'react';
import { ImageInfo } from '../types';

interface BeforeAfterSliderProps {
  beforeImage: ImageInfo;
  afterImage: ImageInfo;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleInteractionStart = () => setIsDragging(true);

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl select-none shadow-2xl border-4 border-white group"
           ref={containerRef}>
        {/* After Image (Base) - Clean */}
        <img
          src={afterImage.placeholder_src || afterImage.src}
          alt={afterImage.label}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded shadow-lg z-10">
          {afterImage.label}
        </div>

        {/* Before Image (Overlay) - Dirty */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage.placeholder_src || beforeImage.src}
            alt={beforeImage.label}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            // Added filters here to simulate "dirty" look programmatically
            style={{ 
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              filter: 'sepia(40%) brightness(70%) contrast(120%) grayscale(30%)'
            }}
          />
           <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded shadow-lg z-10">
            {beforeImage.label}
          </div>
        </div>

        {/* Slider Handle Button */}
        <div
          className="absolute inset-y-0"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-ew-resize text-brand-blue z-20 hover:scale-110 transition-transform"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
          >
            <i className="fa-solid fa-arrows-left-right"></i>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        <i className="fa-solid fa-hand-pointer mr-2"></i>
        Kéo thanh trượt trái/phải để xem kết quả
      </p>
    </div>
  );
};

export default BeforeAfterSlider;