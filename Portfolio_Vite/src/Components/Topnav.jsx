import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Topnav() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
    console.log("State has changed");
  };


  const smoothScroll = (anchorId) => {
    const anchor = document.querySelector(anchorId);
    if (anchor) {
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <AiOutlineMenu onClick={showMenu} className="absolute top-6 right-4 z-[99] md:hidden text-white" />
      <div className='flex justify-between items-center py-3 px-7 bg-black text-white'>
        <img src="src/assets/mahmoud.jpg" alt="Profile" style={{ borderRadius: '50%', width: '3rem', height: '3rem', marginRight: '1rem', border: '2px solid black' }} />

        <div className="flex-grow flex justify-left items-center">
          <h1 className='text-2xl font-bold pl-1'>MAHMOUD YOUSIF</h1>
        </div>

        <div className='hidden md:flex'>
          <button onClick={() => smoothScroll('#Home')} className='text-1xl font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out px-2'>Home</button>
          <button onClick={() => smoothScroll('#project')} className='text-1xl font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out px-2'>Projects</button>
          <button onClick={() => smoothScroll('#about')} className='text-1xl font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out px-2'>About</button>
        </div>
      </div>
      <div className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-[98] transform ${menu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out`}>
        <div className='flex flex-col items-center justify-center h-screen'>
          <button onClick={() => smoothScroll('#Home')} className='text-3xl text-white font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out'>Home</button>
          <button onClick={() => smoothScroll('#project')} className='text-3xl text-white font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out'>Projects</button>
          <button onClick={() => smoothScroll('#about')} className='text-3xl text-white font-bold py-2 uppercase hover:tracking-widest transition-all duration-500 ease-in-out'>About</button>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
