import React from 'react';

const RideCard = ({ video, title, location, description }) => (
  <div className="relative w-80 h-[370px] rounded-2xl overflow-hidden shadow-xl group bg-[#232B3B]">
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* Overlay for text */}
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#232B3B]/90 via-[#232B3B]/70 to-transparent p-5 z-10 flex flex-col gap-2">
      <div className="text-white text-lg font-semibold mb-0.5">{title}</div>
      <div className="text-[#F5D85E] text-sm font-medium mb-1">{location}</div>
      <div className="text-white text-sm mb-4 min-h-[40px]">{description}</div>
      <button className="bg-[#F5D85E] text-[#232B3B] font-bold py-2 px-6 rounded-md text-sm hover:bg-yellow-400 transition-all w-fit">
        RIDE DETAILS
      </button>
    </div>
    {/* Card hover effect */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-20" />
  </div>
);

export default RideCard; 