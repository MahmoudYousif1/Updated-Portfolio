import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden" id='about'>
      <div className="md:w-1/2 w-full">
        <img src="src/assets/mahmoud.jpg" alt="Mahmoud Yousif" className="w-full h-full object-cover"/>
      </div>

      <div className="md:w-1/2 w-full bg-black text-white flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-1xl">
          Hello! I'm Mahmoud Yousif, a passionate software developer with a knack for building applications that solve real-world problems. With expertise in languages like Java, Python, and C, I focus on clean, efficient code and innovative solutions.
        </p>
        <p className="text-lg md:text-1xl mt-4">
          Beyond coding, I'm deeply interested in AI and machine learning, continuously learning and adapting to new technologies. I believe in the power of technology to transform lives and strive to make a positive impact through my work.
        </p>
      </div>
    </div>
  );
}

export default About;
