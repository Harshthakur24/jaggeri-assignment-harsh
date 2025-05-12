import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Land',
    count: 72,
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#2a45cf]"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 16h8M8 12h8M8 8h8" strokeWidth="2" /></svg>
    )
  },
  {
    name: 'Water',
    count: 54,
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#2a45cf]"><path d="M12 2C12 2 4 10 4 15a8 8 0 0016 0c0-5-8-13-8-13z" strokeWidth="2" /></svg>
    )
  },
  {
    name: 'Kids',
    count: 35,
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#2a45cf]"><circle cx="12" cy="8" r="4" strokeWidth="2" /><path d="M6 20v-2a4 4 0 018 0v2" strokeWidth="2" /></svg>
    )
  }
];

// Arc positions for the large circle (tweak as needed for perfect alignment)
const circlePositions = [
  { top: 60, left: 70 },    // Land
  { top: 250, left: 100 }, // Water
  { top: 440, left: 70 }   // Kids
];

const CategorySidebar = ({ selectedCategory, onSelectCategory }) => {
  const selectedIdx = categories.findIndex(cat => cat.name === selectedCategory);

  return (
    <aside className="relative flex flex-col items-center justify-start min-w-[260px] h-[700px]">
      {/* Arc background */}
      <div className="absolute -left-32 top-0 h-[600px] w-[400px] z-0">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400,600 Q200,0 0,600" fill="#F5D85E" />
          <path d="M370,600 Q200,60 30,600" fill="#EDEDED" />
        </svg>
      </div>
      {/* Animated Large Circle */}
      <motion.div
        className="absolute z-10 flex flex-col items-center justify-center"
        animate={{
          top: circlePositions[selectedIdx].top,
          left: circlePositions[selectedIdx].left
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        style={{ width: 220, height: 220 }}
      >
        <div className="rounded-full border-[12px] border-[#F5D85E] bg-white shadow-2xl flex items-center justify-center w-[220px] h-[220px]">
          <motion.div
            key={selectedCategory}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {categories[selectedIdx].icon}
          </motion.div>
        </div>
        {/* Category label and count */}
        <div className="flex flex-col items-center mt-4">
          <span className="text-white text-2xl font-bold drop-shadow-lg">{categories[selectedIdx].name}</span>
          <span className="bg-[#6B6FC5] text-white text-md rounded-full px-5 py-2 mt-2 font-semibold shadow">{categories[selectedIdx].count} Rides</span>
        </div>
      </motion.div>
      {/* Small category icons along the arc */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        {categories.map((cat, idx) => {
          if (idx === selectedIdx) return null;
          return (
            <motion.button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="absolute bg-white border-4 border-[#F5D85E] rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
              style={{
                width: 80,
                height: 80,
                top: circlePositions[idx].top + 70,
                left: circlePositions[idx].left + 60,
                pointerEvents: 'auto'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center">
                <div className="scale-75">{cat.icon}</div>
                <span className="text-xs text-[#232B3B] font-bold mt-1">{cat.name}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
};

export default CategorySidebar; 