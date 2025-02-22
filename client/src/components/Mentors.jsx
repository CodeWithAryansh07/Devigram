import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from "lucide-react";
import { MentorsData } from "../constants";
import { gsap } from 'gsap';

const Mentors = () => {
    const [startIndex, setStartIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
        }
    }, [startIndex]);

    const handleNext = () => {
        if (startIndex + 1 < MentorsData.length) {
            gsap.to(containerRef.current, {
                x: -100, opacity: 0, duration: 0.4, ease: "power2.in",
                onComplete: () => setStartIndex(startIndex + 1),
            });
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            gsap.to(containerRef.current, {
                x: 100, opacity: 0, duration: 0.4, ease: "power2.in",
                onComplete: () => setStartIndex(startIndex - 1),
            });
        }
    };

    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-start">
            <div className="w-full p-10 flex items-center justify-center text-6xl font-bold text-[#a193f8] mt-12">
                Meet Our Exceptional Mentor
            </div>
            <div className="flex w-full h-full">
                {startIndex > 0 && (
                    <div className="h-full w-16 ml-7 flex items-center justify-center">
                        <div className="size-16 bg-white/85 hover:bg-white/95 transition ease-in-out rounded-2xl cursor-pointer" onClick={handlePrev}>
                            <ChevronLeft className='w-full h-full' />
                        </div>
                    </div>
                )}

                <div ref={containerRef} className="grid grid-cols-2 w-full h-full px-20 gap-x-10">
                    <div className="w-full h-full p-12 flex items-center justify-center">
                        <div className="bg-[#1c1c1c] size-[450px] rounded-full"></div>
                    </div>
                    <div className="w-full h-full flex items-start justify-center flex-col p-20">
                        <h1 className="text-6xl font-extrabold text-[#a193f8] my-7">{MentorsData[startIndex].name}</h1>
                        <p className="text-[#F6F8ED] text-xl font-semibold">{MentorsData[startIndex].description}</p>
                    </div>
                </div>

                {startIndex + 1 < MentorsData.length && (
                    <div className="h-full w-16 mr-7 flex items-center justify-center">
                        <div className="size-16 bg-white/85 hover:bg-white/95 transition ease-in-out rounded-2xl cursor-pointer" onClick={handleNext}>
                            <ChevronRight className='w-full h-full' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mentors;
