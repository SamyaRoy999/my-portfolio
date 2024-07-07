
import { Typewriter } from 'react-simple-typewriter'
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    return (
        <main className=" relative overflow-hidden h-screen">
            <div className="  flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex   relative py-16">
                    <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                        <span className="w-20 h-2  bg-gray-400 mb-12">
                        </span>
                        <h4 className="font-roboto text-2xl font-semibold text-gray-300">  <span className="text-gray-50 p-2 border-2 border-[#905DF7]">Hello</span> , my name is </h4>
                        <h1 className="font-poppins uppercase text-7xl font-extrabold  py-4 leading-none  text-gray-300  bg-gradient-to-r from-[#905DF7]  to-gray-50 inline-block text-transparent bg-clip-text">
                            Samya Roy
                        </h1>
                        <h4 className="font-roboto text-3xl font-semibold  mb-2  bg-gradient-to-r from-[#905DF7]  to-white inline-block text-transparent bg-clip-text">I am 
                            <Typewriter
                                words={[' Front End',' Web developer.']}
                                loop={10005}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            
                        </h4>
                        <p className="text-sm sm:text-base text-gray-500 font-roboto dark:text-white">
                            From Moulvibazar, Bangladesh. I’m a Front End Web developer passionate about creating error-free websites with clean and efficient code. I enjoy discussing innovative ideas and technologies in web development.
                        </p>
                        {/* button dowl. cv */}
                        <div className="mt-5">
                            <div className="relative inline-flex  group">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#9463F7] to-[#1F1034]   rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                </div>
                                <a className="px-6 py-2 flex items-center gap-3  min-w-[130px] text-center text-gray-50 hover:text-black border border-[#9463F7] rounded hover:bg-violet-600  active:bg-indigo-500 focus:outline-none focus:ring"
                                    href="/download">
                                    Download CV <MdOutlineFileDownload className='text-xl text-white'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" sm:w-1/3 lg:w-3/5 relative">
                        <img src="https://i.ibb.co/YhNkgnV/linkdin-Pic2-removebg-10preview.png" className="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero