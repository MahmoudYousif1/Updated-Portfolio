import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';  // Updated to include GitHub and remove Facebook and Twitter

function Footer() {
  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub />  {/* GitHub icon added */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
        
        {/* About the Site */}
        <div className="text-center mb-4">
          <p>© 2024 Mahmoud Yousif. All rights reserved.</p>
          <p>Passionate developer dedicated to crafting quality software and applications.</p>
        </div>
        
        {/* Contact Information */}
        <div className="text-center">
          <p>Contact me at:</p>
          <a href="mailto:MahmoudYousif@gmail.com" className="hover:underline">MahmoudYousif@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

