'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  { name: 'KOCHI', img: '/Kochi_cb42a7a748.webp' },
  { name: 'BENGALURU', img: '/Bangalore_a29cdf2e2c.webp', sub: [
    { name: 'PARK', img: '/bangalore-park.webp' },
    { name: 'RESORT', img: '/bangalore-resort.webp' },
  ] },
  { name: 'HYDERABAD', img: '/Hyderabad_44ee040feb.webp' },
  { name: 'BHUBANESHWAR', img: '/Bhubaneswar_b007f8a2ac.webp' },
];

const parksIcon = (
    <div>🛝</div>
);

const Navbar = () => {
  const [showLocations, setShowLocations] = useState(false);
  const [showBengaluruSub, setShowBengaluruSub] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white rounded-2xl shadow-md px-8 py-3 mt-8 z-50 scale-90">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Main_Logo_0ad2299b54.webp" alt="Wonderla Logo" className="h-12 mr-4" onError={e => e.target.style.display='none'} />
        </div>
        {/* Menu */}
        <ul className="flex items-center gap-8 font-bold text-gray-700 text-lg">
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:text-yellow-500"
              onMouseEnter={() => setShowLocations(true)}
            >
              <span role="img" aria-label="location">📍</span> LOCATIONS <span>▼</span>
            </button>
            {showLocations && (
              <div
                className="absolute left-0 top-14 bg-white rounded-3xl shadow-2xl w-96 z-20 p-4 flex flex-col gap-2 scale-95"
                onMouseEnter={() => setShowLocations(true)}
                onMouseLeave={() => setTimeout(() => setShowLocations(false), 200)}
              >
                {locations.map((loc, idx) => (
                  <div key={loc.name} className="flex items-center justify-between hover:bg-gray-100 rounded-xl px-2 py-2 cursor-pointer relative"
                    onMouseEnter={() => loc.name === 'BENGALURU' && setShowBengaluruSub(true) && setShowLocations(true)}
                    onMouseLeave={() => setTimeout(() => loc.name === 'BENGALURU' && setShowBengaluruSub(false) && setTimeout(() => setShowLocations(true), 200))}
                  >
                    <div className="flex items-center gap-4 text-black" onMouseEnter={() => setShowLocations(true)}>
                      <img src={loc.img} alt={loc.name} className="w-14 h-14 rounded-xl object-cover" onError={e => e.target.style.display='none'} />
                      <span className="text-md font-semibold">{loc.name}</span>
                    </div>
                    {loc.name === 'BENGALURU' && <span className="text-2xl">›</span>}
                    {/* Submenu for Bengaluru */}
                    {loc.name === 'BENGALURU' && showBengaluruSub && (
                      <div className="absolute left-full top-0 bg-white rounded-2xl text-black shadow-2xl w-56 p-4 flex flex-col gap-2 z-30 scale-95 ml-5">
                        {loc.sub.map((s) => (
                          <div key={s.name} className="flex items-center gap-4 hover:bg-gray-100 rounded-xl px-2 py-2 cursor-pointer">
                            <img src={s.img} alt={s.name} className="w-14 h-14 rounded-xl object-cover" onError={e => e.target.style.display='none'} />
                            <span className="text-lg font-semibold">{s.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            <span role="img" aria-label="offers">🎟️</span> OFFERS
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            <span role="img" aria-label="rides">🎢</span> RIDES
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            <span role="img" aria-label="restaurants">🍽️</span> RESTAURANTS
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer">
            <span role="img" aria-label="events">🎉</span> EVENTS
          </li>
        </ul>
        {/* Book Tickets Button & Menu */}
        <div className="flex items-center gap-4">
          <button className="bg-[#FAD600] hover:bg-yellow-300 text-blue-900 font-bold px-3 py-3 text-sm rounded-xl shadow flex items-center gap-2">
            BOOK TICKETS <span role="img" aria-label="ticket">🎫</span>
          </button>
          <button className="hover:bg-blue-200 p-3 rounded-xl text-[#2a45cf] hover:cursor-pointer" onClick={() => setSidebarOpen(true)}>
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="2" rx="1" fill="#2a45cf"/><rect x="4" y="11" width="16" height="2" rx="1" fill="#3852d1"/><rect x="4" y="15" width="16" height="2" rx="1" fill="#3852d1"/></svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar onClose={() => setSidebarOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Sidebar = ({ onClose }) => {
  const [parksOpen, setParksOpen] = useState(false);
  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/30 z-[99]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Sidebar */}
      <motion.aside
        className="fixed top-0 right-0 w-[450px] max-w-full h-full bg-white z-[100] shadow-2xl flex flex-col px-6 py-6 overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
      >
        {/* Parks Dropdown */}
        <div className="mb-2">
        <div className="flex items-center mb-6 mt-4">
          <img src="/Main_Logo_0ad2299b54.webp" alt="Wonderla Logo" className="h-12 mr-4" onError={e => e.target.style.display='none'} />
           {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-12 right-4 hover:cursor-pointer bg-white hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors border border-gray-300"
          aria-label="Close sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
        </div>
          <button
            className="flex items-center w-full gap-3 py-3 px-1 focus:outline-none"
            onClick={() => setParksOpen((o) => !o)}
          >
            <span className="text-2xl">{parksIcon}</span>
            <div className="flex-1 text-left hover:cursor-pointer">
              <div className="font-bold text-xl text-[#232B3B]">Parks</div>
              <div className="text-gray-500 text-sm -mt-1">Explore Your favourite Wonderla Park</div>
            </div>
            <motion.div
              animate={{ rotate: parksOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4" stroke="#3852d1" strokeWidth="2" strokeLinecap="round"/></svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {parksOpen && (
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-2 mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {locations.map(loc => (
                  <motion.div 
                    key={loc.name} 
                    className="flex flex-col items-center bg-white rounded-xl shadow p-3 border border-gray-100"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: locations.indexOf(loc) * 0.1 }}
                  >
                    <img src={loc.img} alt={loc.name} className="w-10 h-10 rounded-full mb-2 object-cover" />
                    <span className="text-gray-700 font-semibold text-md">{loc.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <hr className="my-2 border-gray-200" />
        {/* Menu List */}
        <div className="flex flex-col gap-2">
          <SidebarItem icon="🏨" title="Resorts" desc="Get a rejuvenating experience at Wonderla Resort" />
          <SidebarItem icon="🎟️" title="Offers & Combos" desc="Plan the perfect day with exciting offers" />
          <SidebarItem icon="⏰" title="Timings And Guidelines" desc="Know the timings and other guidelines" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <SidebarButton color="yellow" title="Group Booking" desc="Reach Out To Wonderla Team" />
          <SidebarButton color="blue" title="Tour Operator Portal" desc="Reach Out To Wonderla Team" />
          <SidebarButton color="yellow" title="Partner With Us" desc="Reach Out To Wonderla Team" />
        </div>
        <hr className="my-4 border-gray-200" />
        <SidebarItem icon="ℹ️" title="About Us" desc="Know all about Wonderla" />
        <div className="mt-2">
          <SidebarDropdown title="Quick Links">
            <SidebarLink label="Restaurants" />
            <SidebarLink label="Merchandise" />
            <SidebarLink label="Events" />
          </SidebarDropdown>
        </div>
        <hr className="my-4 border-gray-200" />
        <SidebarItem icon="📞" title="Contact Us" desc="Get In Touch Wonderla Team" />
      </motion.aside>
    </>
  );
};

const SidebarItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 py-3 px-1">
    <span className="text-2xl mt-1">{icon}</span>
    <div>
      <div className="font-semibold text-gray-800 text-md leading-tight">{title}</div>
      <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
    </div>
  </div>
);

const SidebarButton = ({ color, title, desc }) => (
  <div className={`rounded-xl px-4 py-3 mb-1 ${color === 'yellow' ? 'bg-[#FAD600] text-[#232B3B]' : 'bg-[#3852d1] text-white'} font-bold shadow flex flex-col gap-1`}>
    <span className="text-md font-semibold">{title}</span>
    <span className="text-xs font-normal">{desc}</span>
  </div>
);

const SidebarDropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="flex items-center justify-between w-full py-2 px-1 font-semibold text-gray-800" onClick={() => setOpen(o => !o)}>
        {title}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4" stroke="#232B3B" strokeWidth="2" strokeLinecap="round"/></svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            className="pl-4 flex flex-col gap-1 pb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SidebarLink = ({ label }) => (
  <div className="py-1 text-sm text-gray-700 cursor-pointer hover:underline">{label}</div>
);

export default Navbar; 