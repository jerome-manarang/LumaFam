// DIFFICULTY: Hard

// Developer: [FARIN SORIANO]
// Date Start: [3/11/2025]
// Date End: [MM/DD/YYYY]

/*
 TODO: Create an animated sticky header for the luma fam website

 Inspo: https://lahacks.com/home

 It will have the follow sections:

Hangouts
Fam Heads
FUSION at UCI
Directory

You can be creative as you want with this. It should have a star as the animation, and
it should move as you scroll down.

The headers should be clickable and bring you to the section.



*/

import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import LumaLogo from '../assets/luma-logo.png'; // Adjust path if needed

export default function StickyHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;

      setScrollPosition(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftPosition = 30 + scrollPosition * 50;
  return (
    <>
      <img 
        src={LumaLogo} 
        alt="Luma Fam" 
        className="fixed top-9 transform -translate-x-1/2 z-20 h-12" 
        style={{ left: `${leftPosition}%` }}
      />
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 p-6 rounded-full z-10 bg-yellow-400 w-full max-w-[80%]">
        <div className="container mx-auto flex items-center px-4 w-[75%]">
          <div className="flex justify-between w-full lg:text-xl md:text-md">
            <HashLink smooth to="#hangouts" className="px-2">Hangouts</HashLink>
            <HashLink smooth to="#famheads" className="px-2">Fam Heads</HashLink>
            <HashLink smooth to="#fusion" className="px-2">FUSION at UCI</HashLink>
            <HashLink smooth to="#directory" className="px-2">Directory</HashLink>
          </div>
        </div>
      </nav>
    </>

  );
}
