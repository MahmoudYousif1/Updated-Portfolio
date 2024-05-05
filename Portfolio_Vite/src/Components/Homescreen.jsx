import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Homescreen() {
    const [menu, setMenu] = useState(false);
    const showMenu = () => {
        setMenu(!menu);
        console.log("State has changed");
    };

    return (
        <div className="relative h-screen overflow-hidden" id='Home'>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed animate-zoomPan"
                 style={{ backgroundImage: "url('src/assets/w1.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="z-10 relative flex flex-col justify-start pt-20 pl-10 md:pl-18 text-white">
                <div className="text-6xl md:text-8xl font-bold">
                    Upcoming <br />Developer &<br />Code Enthusiast
                </div>
                <div className="text-lg max-w-md md:max-w-lg pt-6">
                    Hello! my name is Mahmoud Yousif and I am a passionate developer with a strong affinity for C programming, Python, Java, and app development.
                </div>
            </div>
        </div>
    );
}

export default Homescreen;
