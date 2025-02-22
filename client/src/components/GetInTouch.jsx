// import React from 'react'

const GetInTouch = () => {
    return (
        <div className="w-full h-2/3 bg-[#a193f8] grid grid-cols-2">
            <div className=" w-full h-full flex flex-col items-start pl-24 gap-y-2 justify-center">
                <h1 className="text-white text-7xl font-bold">Get In Touch.</h1>
                <p className="text-white text-2xl font-light">Send us a note or catch us on the interwebs.</p>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute bg-[#1c1c1c] size-44 rounded-full bottom-[11.12rem] left-16 flex items-center justify-center text-[#a193f8] text-2xl font-bold">
                    Facebook
                </div>
                <div className="absolute bg-[#1c1c1c] size-47 rounded-full bottom-0 flex items-center justify-center text-[#a193f8] text-2xl font-bold">
                    Instagram
                </div>
                <div className="absolute bg-[#1c1c1c] size-54 rounded-full bottom-[14.56rem] right-[16.86rem] flex items-center justify-center text-[#a193f8] text-2xl font-bold">
                    Linkedin
                </div>
                <div className="absolute bg-[#1c1c1c] size-62 bottom-0 right-84 rounded-full flex items-center justify-center text-[#a193f8] text-3xl font-bold">
                    Contact
                </div>
                <div className="absolute bg-[#1c1c1c] size-80 rounded-full bottom-0 right-5 flex items-center justify-center text-[#a193f8] text-3xl font-bold">
                    Info@devigram.com
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
