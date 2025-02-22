import { Facebook, Instagram, Linkedin } from 'lucide-react';

// import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-black h-4/5 text-white flex flex-col items-center justify-start px-20 pt-10'>
            <div className="grid grid-cols-4 w-full h-2/3">
                <div className="flex items-center justify-center pb-20 text-4xl font-bold">
                    Devigram
                </div>
                <div className="flex flex-col items-start justify-start py-10 px-8 text-lg gap-y-2">
                    <span className=" cursor-pointer">Home</span>
                    <span className=" cursor-pointer">About Us</span>
                    <span className=" cursor-pointer">Contact Us</span>
                    <span className=" cursor-pointer">Pricing</span>
                    <span className=" cursor-pointer">Privacy Policy</span>
                    <span className=" cursor-pointer">Terms & Conditions</span>
                    <span className=" cursor-pointer">Cancellation / Refund Policy</span>
                </div>
                <div className="flex flex-col items-start justify-start py-10 px-8 text-lg gap-y-2">
                    <span className=" cursor-pointer">Devigram&apos;s DSA Sheet</span>
                    <span className=" cursor-pointer">Devigram&apos;s DSA Playlist</span>
                    <span className=" cursor-pointer">CS Subject</span>
                    <span className=" cursor-pointer">Devigram&apos;s CP Sheet</span>
                </div>
                <div className="flex flex-col items-start justify-start py-10 px-8 text-lg gap-y-2">
                    <div className='flex w-full gap-x-2'>
                        <Facebook className="cursor-pointer" />
                        <span className=" cursor-pointer">Facebook</span>
                    </div>
                    <div className='flex w-full gap-x-2'>
                        <Instagram className="cursor-pointer" />
                        <span className=" cursor-pointer">Instagram</span>
                    </div>
                    <div className='flex w-full gap-x-2'>
                        <Linkedin className="cursor-pointer" />
                        <span className=" cursor-pointer">LinkedIn</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] my-3 bg-white/40 rounded-2xl"></div>
            <div className="w-full h-1/5 flex items-center justify-center text-xl">
                Copyright © 2024 Devigram | All rights reserved
            </div>
        </div>
    )
}

export default Footer
