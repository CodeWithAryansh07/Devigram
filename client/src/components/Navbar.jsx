import { Sun } from 'lucide-react';

// import React from 'react'

const Navbar = () => {
    return (
        <div className="flex flex-row w-full h-[120px] justify-between items-center pt-12 pb-4">
            <div className="text-white pl-10 text-4xl font-bold cursor-pointer">
                Devigram
            </div>
            <div className="bg-black w-auto text-white h-auto flex flex-row justify-center items-center gap-x-7 py-1.5 px-5 rounded-xl border-2">
                <div>
                    <Sun className="text-white/90 cursor-pointer" />
                </div>
                <div className="text-white/40 cursor-pointer">
                    Manifesto
                </div>
                <div className="text-white/40 cursor-pointer">
                    Careers
                </div>
                <div className="text-white/40 cursor-pointer">
                    Discover
                </div>
                <div className="flex flex-row gap-2">
                    <div className="text-white border border-white/40 py-2 px-8 rounded-2xl cursor-pointer">
                        Login
                    </div>
                    <div className="text-black bg-[#F6F8ED] py-2 px-8 rounded-2xl cursor-pointer">
                        Sign Up
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;