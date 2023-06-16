import ClientsSay from "../components/ClientsSay"
import Contactus from "../components/Contactus"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import Hero from "../components/Hero"
import HiringRemotly from "../components/HiringRemotly"
import OurRange from "../components/OurRange"
import TrustedBy from "../components/TrustedBy"
import WhatWeDo from "../components/WhatWeDo"



const Home = () => {
    return (
        <article className="App">
            <HeaderMain />
            <Hero />
            <TrustedBy />
            <WhatWeDo />
            <OurRange />
            <HiringRemotly />
            <ClientsSay />
            <FAQ />
            <Contactus />
            <Footer />
        </article>
    )
}

export default Home