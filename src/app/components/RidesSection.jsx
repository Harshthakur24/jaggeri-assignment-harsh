'use client'
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CategorySidebar from './CategorySidebar';
import RideCard from './RideCard';
import CarouselControls from './CarouselControls';
import rideData from './rideData.json';

const RidesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Water');
  const [direction, setDirection] = useState(1); 
  const visibleCards = 3;

  
  const filteredRides = rideData.filter(ride => ride.category === selectedCategory);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? filteredRides.length - visibleCards : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === filteredRides.length - visibleCards ? 0 : prev + 1));
  };

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (filteredRides.length > visibleCards) {
        setDirection(1);
        handleNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, selectedCategory]);


  const groupVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
    }),
  };

  return (
    <section className="relative bg-[#22304A] flex flex-row gap-0 max-w-[1400px] mx-auto min-h-[700px] items-start">
      <CategorySidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="flex-1 flex flex-col items-center pt-10">
        <div className="flex flex-row items-center w-full mb-8 mt-20">
          <h2 className="text-6xl font-extrabold text-white tracking-tight text-left flex-1 ml-28 mt-6 mb-4">OUR ICONIC RIDES</h2>
          <div className="flex flex-row gap-4 mr-24">
            <CarouselControls onPrev={handlePrev} onNext={handleNext} inline />
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <div className="flex gap-8 overflow-hidden w-[900px] justify-center relative h-[370px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                custom={direction}
                variants={groupVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
                className="flex gap-8 w-full h-[370px]"
                style={{ position: 'absolute' }}
              >
                {filteredRides.slice(currentIndex, currentIndex + visibleCards).map((ride) => (
                  <div key={ride.id} className="w-80 h-[370px]">
                    <RideCard {...ride} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
        <button className="mt-12 mb-8 bg-[#F5D85E] text-[#232B3B] font-bold py-4 px-16 rounded-full text-xl hover:bg-yellow-400 transition-all shadow-lg tracking-tight">
          Explore All Rides!
        </button>
       
      </div>
    </section>
  );
};

export default RidesSection; 