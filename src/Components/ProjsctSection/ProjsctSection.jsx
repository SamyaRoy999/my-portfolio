import PortfolioCard from "../ProjectCard/ProjectCard"


const ProjsctSection = () => {
    return (
        <div className="mx-auto max-w-screen-xl grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <PortfolioCard/>
        </div>
    )
}

export default ProjsctSection