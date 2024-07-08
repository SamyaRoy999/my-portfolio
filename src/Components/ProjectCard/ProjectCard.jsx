import { FaArrowTrendUp } from "react-icons/fa6";
import { projects } from "../Data/Data";
import { useState } from "react";

const PortfolioCard = ({ ditaels }) => {
    const [modulData, setModulData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { coreFeatures = [], image, projectName, technologyUsed, liveLink, githubLinks = {}, description } = ditaels;

    const handleName = (name) => {
        const findData = projects.find(item => item.projectName === name);
        setModulData(findData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative bg-[#140C1C] p-5 rounded-md">
                <div className="overflow-hidden">
                    <img className='h-44 w-full object-cover' src={image} alt="portfolio" />
                    <span className="text-[#9463F7] text-xl font-medium">
                        {projectName}
                    </span>
                </div>
                <div className="relative text-white bg-gradient-to-br from-[#9463F7] to-[#211138] z-10 mx-7 opacity-0 hover:opacity-100 mb-0 pb-0 duration-300 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                    <h3 className="text-dark dark:text-white mb-4 text-xl font-bold">{projectName}</h3>
                    <span onClick={() => handleName(projectName)} className="flex items-center gap-3 cursor-pointer justify-center border border-b-4 border-[#9463F7] rounded hover:bg-violet-600">view details <FaArrowTrendUp /></span>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto text-gray-500   bg-smoke-light flex">
                    <div className="relative p-8  bg-[#140C1C] w-full max-w-3xl m-auto flex-col flex rounded-lg">
                        <img src={modulData.image} alt={modulData.projectName} className="w-full font-poppins h-64 object-cover rounded-md mb-4"/>
                        <h3 className="font-bold text-lg mb-2">{modulData.projectName}</h3>
                        <p className="py-2 font-roboto">{modulData.description}</p>
                        <div className="py-2">
                            <h4 className="font-semibold">Core Features:</h4>
                            <ul className="list-disc list-inside">
                                {modulData.coreFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-2">
                            <h4 className="font-semibold">Technology Used:</h4>
                            <ul className="list-disc list-inside">
                                {modulData.technologyUsed.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                        <h4 className="font-semibold">liveLink: <a href={liveLink} className="hover:text-[#211138]" target="_blank">{liveLink}</a></h4>
                        <h4 className="font-semibold">github client Link: <a href={githubLinks.client} className="hover:text-[#211138]" target="_blank">{githubLinks.client}</a></h4>
                        <h4 className="font-semibold">github server Link: <a href={githubLinks.server} className="hover:text-[#211138]" target="_blank">{githubLinks.server}</a></h4>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="btn bg-[#9463F7] text-white py-2 px-4 rounded" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioCard;
