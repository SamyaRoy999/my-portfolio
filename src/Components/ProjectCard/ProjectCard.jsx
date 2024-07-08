
const PortfolioCard = ({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
}) => {
    return (
        <>
            <div className="relative mb-12 ">
                <div className="overflow-hidden rounded-[10px]">
                    <img src='https://i.ibb.co/q0s8dG9/point3d-commercial-imaging-ltd-Swg04-CP0b-U-unsplash.jpg' alt="portfolio" className="w-full" />
                </div>
                <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                    <span className="text-primary mb-2 block text-sm font-medium">
                    Branding
                    </span>
                    <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">Creative Agency</h3>
                    <a
                        href={buttonHref}
                        className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                    >
                        view details
                    </a>
                </div>
            </div>
        </>
    );
};

export default PortfolioCard;