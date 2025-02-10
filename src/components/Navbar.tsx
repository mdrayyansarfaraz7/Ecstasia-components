"use client";
import { useState, useRef } from "react";
import { GiMusicSpell } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <nav className="relative z-50 bg-transparent text-white font-misteri">
            {/* Main Navbar */}
            <div className="flex justify-between items-center px-4 py-4 sm:px-8 md:px-12 lg:px-16">
                {/* Logos */}
                <div className="flex gap-4 items-center">
                    <img src="/uem.png" alt="UEM" className="w-16 sm:w-24 md:w-28 lg:w-32" />
                    <img src="/logo.png" alt="ECSTASIA" className="w-20 sm:w-28 md:w-32 lg:w-36" />
                </div>

                {/* Icons (Music Icon + Hamburger Menu) */}
                <div className="flex items-center gap-6">
                    {/* Music Button */}
                    <button
                        onClick={toggleAudio}
                        className={`text-white text-4xl sm:text-5xl md:text-6xl transition-all duration-500 ${
                            isPlaying ? "animate-float text-purple-400" : "text-white"
                        }`}
                    >
                        <GiMusicSpell />
                    </button>

                    {/* Hamburger Menu */}
                    <GiHamburgerMenu
                        className="text-white text-4xl sm:text-5xl md:text-6xl cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/audio.mp3" />

            {/* Sidebar (Slide-in Menu) */}
            <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-screen bg-black bg-opacity-60 backdrop-blur-lg transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 text-light-purple">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <IoClose className="text-4xl cursor-pointer text-light-purple" onClick={() => setIsOpen(false)} />
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-center my-6">
                        <button className="px-20 py-3 rounded-full text-3xl font-misteri text-white border-2 border-purple-400 bg-transparent transition-all duration-300 hover:bg-purple-500 hover:text-black hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20">
                            Login
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <ul className="space-y-10 text-xl font-misteri">
                        <li className="hover:text-purple-400 cursor-pointer text-3xl">Home</li>
                        <li className="hover:text-purple-400 cursor-pointer text-3xl">Events</li>
                        <li className="hover:text-purple-400 cursor-pointer text-3xl">Timeline</li>
                        <li className="hover:text-purple-400 cursor-pointer text-3xl">Ecstasia Family</li>
                    </ul>

                    {/* Social Links */}
                    <div className="flex flex-col items-center mt-20 space-y-4">
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <span className="cursor-pointer hover:text-purple-400 text-xl sm:text-2xl md:text-3xl">Facebook</span>
                            <span className="cursor-pointer hover:text-purple-400 text-xl sm:text-2xl md:text-3xl">Instagram</span>
                            <span className="cursor-pointer hover:text-purple-400 text-xl sm:text-2xl md:text-3xl">LinkedIn</span>
                            <span className="cursor-pointer hover:text-purple-400 text-xl sm:text-2xl md:text-3xl">YouTube</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
