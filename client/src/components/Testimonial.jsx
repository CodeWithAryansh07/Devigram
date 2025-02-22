import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { gsap } from 'gsap';
import TestimonialCard from './TestimonialCard';
import { TestimonialsData } from '../constants';

const Testimonial = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleTestimonials = TestimonialsData.slice(startIndex, startIndex + 4);
    const containerRef = useRef(null);

    // GSAP animation on index change
    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current.children,
                { opacity: 0, x: startIndex > 0 ? 50 : -50 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
            );
        }
    }, [startIndex]);

    const handleNext = () => {
        if (startIndex + 4 < TestimonialsData.length) {
            setStartIndex(startIndex + 4);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 4);
        }
    };

    return (
        <div className='w-full h-full bg-[#000000] flex flex-col items-center justify-start'>
            <div className="w-full py-8 flex items-center justify-center text-6xl font-bold text-[#a193f8] mt-12">
                Testimonials From Students
            </div>
            <div className="flex w-full h-full pl-10 items-center">
                {/* Left Arrow (Only Visible if startIndex > 0) */}
                {startIndex > 0 && (
                    <div className="h-full w-16 ml-7 flex items-center justify-center">
                        <div className="size-16 bg-white/85 hover:bg-white/95 transition ease-in-out rounded-2xl cursor-pointer" onClick={handlePrev}>
                            <ChevronLeft className='w-full h-full' />
                        </div>
                    </div>
                )}

                {/* Testimonial Cards Container with GSAP Animations */}
                <div ref={containerRef} className="grid grid-cols-4 w-full h-full px-10 py-20 gap-x-5 gap-y-10">
                    {visibleTestimonials.map((testimonial) => (
                        <TestimonialCard 
                            key={testimonial.id} 
                            name={testimonial.name} 
                            testimonial={testimonial.testimonial} 
                        />
                    ))}
                </div>

                {/* Right Arrow (Only Visible if there are more testimonials left) */}
                {startIndex + 4 < TestimonialsData.length && (
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

export default Testimonial;
