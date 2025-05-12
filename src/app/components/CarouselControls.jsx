import React from 'react';

const CarouselControls = ({ onPrev, onNext, inline }) => (
  inline ? (
    <div className="flex flex-row gap-4">
      <button
        aria-label="Previous"
        onClick={onPrev}
        className="bg-[#F5D85E] hover:cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:bg-yellow-400 transition-all"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#232B3B" strokeWidth="3"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button
        aria-label="Next"
        onClick={onNext}
        className="bg-[#F5D85E] hover:cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:bg-yellow-400 transition-all"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#232B3B" strokeWidth="3"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  ) : (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-full justify-between z-20 px-2">
      <button
        aria-label="Previous"
        onClick={onPrev}
        className="bg-[#F5D85E] hover:cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:bg-yellow-400 transition-all"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#232B3B" strokeWidth="3"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button
        aria-label="Next"
        onClick={onNext}
        className="bg-[#F5D85E] hover:cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:bg-yellow-400 transition-all"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#232B3B" strokeWidth="3"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  )
);

export default CarouselControls; 