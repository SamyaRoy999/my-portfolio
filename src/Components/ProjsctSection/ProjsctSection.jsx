

import { projects } from "../Data/Data"
import PortfolioCard from "../ProjectCard/ProjectCard"


const ProjsctSection = () => {
    return (
        <div className=" h-[80vh] mt-24  mb-12">
            <div className="w-full text-center mb-10">
                <h1 className="font-poppins font-bold text-3xl lg:text-5xl mx-auto bg-gradient-to-r from-[#905DF7]  to-gray-50 inline-block text-transparent bg-clip-text">My Portfolio</h1>
            </div>
            <div className="mx-auto px-10  max-w-screen-xl grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 " >
                {projects.map((item, ind) => <PortfolioCard key={ind} ditaels={item} />)}
            </div>
        </div>
    )
}

export default ProjsctSection