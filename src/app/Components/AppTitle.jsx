"use client"
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AppTitle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <header className="text-center py-3 bg-gray-900 text-white ">
            <h1 className="text-4xl font-bold animate-fade-in-up mt-4 gradient-text">ScrollGallery</h1>
            {isVisible && (
                <p className="text-lg mt-3 max-w-2xl mx-auto animate-fade-in-up">
                    ScrollGallery is an infinite scrolling image gallery that lets you explore endless pictures seamlessly. Enjoy a smooth and immersive browsing experience with high-quality images loaded dynamically.
                </p>
            )}
            <div className="flex justify-center mt-2">
                <button
                    className="px-3 py-1.5 text-white rounded transition focus:outline-none hover:bg-gray-600 flex items-center gap-2 relative group"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    <span className="absolute left-[45px] hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded transition">
                        {isVisible ? "Hide Description" : "Show Description"}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default AppTitle;