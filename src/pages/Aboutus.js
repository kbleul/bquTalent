
import HeaderMain from "../components/HeaderMain"
import Footer from "../components/Footer"
import HeroSecondary from "../components/HeroSecondary"
import Culture from "../components/Culture"
import MissionVision from "../components/MissionVision"
import Founder from "../components/Founder"
import TrustedBy from "../components/TrustedBy"
import Ignit from "../components/Ignit"


const Aboutus = () => {
    return (
        <article>
            <HeaderMain />
            <HeroSecondary
                title="Innovate. Scale. Succeed: 
Elevate Your Business with BquTalent"
                para="Our expert outsourcing services empower your business to thrive in today's competitive landscape. Harness the power of strategic partnerships, unleash your potential, and elevate your growth trajectory."
            />
            <Culture />
            <MissionVision />
            <Founder />
            <TrustedBy bgOn={true} />
            <Ignit />
            <Footer />
        </article>
    )
}

export default Aboutus