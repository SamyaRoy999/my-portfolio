import { FaArrowTrendUp } from "react-icons/fa6";
import { projects } from "../Data/Data";
import { useState } from "react";
console.log(projects);
const PortfolioCard = ({ ditaels }) => {
    const [modulData, setModulData] = useState(null)
    const { coreFeatures = [], projectName, technologyUsed, liveLink, githubLinks = {}, description, } = ditaels;
    
    const hendelName = (name)=>{
       const findData = projects.find(item => item.projectName === name);
       
       setModulData(findData)
    }

    return (
        <>
            <div className="relative  bg-[#140C1C] p-5 rounded-md ">
                <div className="overflow-hidden rounded-[10px]">
                    <img className='' src='https://i.ibb.co/q0s8dG9/point3d-commercial-imaging-ltd-Swg04-CP0b-U-unsplash.jpg' alt="portfolio" />
                    <span className="  text-white text-xl font-medium  ">
                        {projectName}
                    </span>
                </div>
                <div className="relative text-white bg-gradient-to-br  from-[#9463F7] to-[#211138] z-10 mx-7 opacity-0 hover:opacity-100 mb-0 pb-0 duration-300 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                    {/* <span className="text-primary mb-3 block text-sm font-medium">
                        {projectName}
                    </span> */}
                    <h3 className="text-dark dark:text-white mb-4 text-xl font-bold">Creative Agency</h3>
                    <span onClick={() =>{ document.getElementById('my_modal_4').showModal(); hendelName(projectName)}} className="flex items-center gap-3 cursor-pointer justify-center border border-b-4 border-[#9463F7] rounded hover:bg-violet-600">view details  <FaArrowTrendUp /></span>
                    <dialog  id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl text-black">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
};

export default PortfolioCard;