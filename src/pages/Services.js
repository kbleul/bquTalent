import Advantages from "../components/Advantages"
import HeaderMain from "../components/HeaderMain"
import HeroSecondary from "../components/HeroSecondary"
import PeopleSay from "../components/PeopleSay"
import Proffession from "../components/Proffession"
import Footer from "../components/Footer"



const Services = () => {
    return (
        <article>
            <HeaderMain />
            <HeroSecondary
                title="Enhance Efficiency and Drive Growth "
                para="Explore Our Specialized Outsourcing Services. Get everything you need for your business from various fields at a higher quality." />
            <Proffession />
            <Advantages />
            <PeopleSay />
            <Footer />
        </article>
    )
}

export default Services