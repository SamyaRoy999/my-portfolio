
import Hero from '../Hero/Hero';
import { StickyNavbar } from '../Navbar/Navbar';

import ProjsctSection from '../ProjsctSection/ProjsctSection';
const Main = () => {
    return (
        <div className='bg-gradient-to-br  from-[#0F0715] to-[#211138]'>
            <StickyNavbar />
            <Hero />
            <ProjsctSection />
            {/* <Hero /> */}
            
        </div>
    )
}

export default Main

