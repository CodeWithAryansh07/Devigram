// import React from 'react'
import { GraduationCap, Users, Code, ArrowRight, ChevronDown } from 'lucide-react';
// import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="w-full h-auto">
            <main className="px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-gray-200 mb-4 text-3xl">Gear Up for Success:</div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Your Ultimate<br />Preparation Hub!
                        </h1>
                        <p className="text-gray-200 text-lg mb-8">
                            Join thousands of developers mastering their craft through structured learning paths and hands-on projects.
                        </p>
                        <button className="px-8 py-4 cursor-pointer bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center space-x-2">
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Elevate Your Learning Journey with Devigram Course
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Structured Learning Paths</h3>
                                    <p className="text-gray-200">Curated courses designed for your success</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Hands-on Projects</h3>
                                    <p className="text-gray-200">Build real-world applications</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Community Support</h3>
                                    <p className="text-gray-200">Learn alongside fellow developers</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full cursor-pointer mt-8 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white transition flex items-center justify-center space-x-2">
                            <span>Explore</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex justify-end items-center mt-8 px-10 gap-2">
                        <p className='text-md font-light text-white'>Scroll to Explore</p>
                        <div className='bg-white p-2 rounded-xl'>
                            <ChevronDown className="w-7 h-7 text-black " />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero;
