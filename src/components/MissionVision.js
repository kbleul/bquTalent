
import mission from "../assets/AboutUs/Mission.png"
import vision from "../assets/AboutUs/Vission.png"


const MissionVision = () => {
    return (
        <article className="mt-32 px-2 md:px-[10%] py-20 missionContainer">
            <section className="block md:flex items-center justify-around md:gap-x-[10%]">
                <div className="md:w-3/5 md:justify-self-end ">
                    <h2 className="pl-4 md:pl-0 font-bold text-2xl  w-full text-[#003366] uppercase py-2">Mission</h2>
                    <img className="w-full md:hidden" src={mission} alt="" />
                    <p className="px-4 md:px-2 leading-8 md:leading-6">At BquTalent, our mission is to connect exceptional talent with opportunities that empower businesses to thrive in the digital era. We are committed to delivering outstanding outsourcing solutions, bridging the gap between client needs and top-notch professionals. By fostering innovation, embracing diversity, and providing unparalleled service, we strive to be the preferred partner for organizations seeking to unlock their full potential.</p>
                </div>
                <div className="hidden md:block w-2/5">
                    <img className="w-[300px]" src={mission} alt="" />
                </div>
            </section>
            <section className="flex items-center justify-around gap-x-[10%] mt-12">
                <div className="hidden md:block w-2/5">
                    <img className="w-[300px]" src={vision} alt="" />
                </div>
                <div className="md:w-3/5 md:justify-self-end ">
                    <h2 className="pl-4 md:pl-0 font-bold text-2xl  w-full text-[#003366] uppercase py-2">Vision</h2>
                    <img className="w-full md:hidden" src={vision} alt="" />
                    <p className="px-4 md:px-2 leading-8 md:leading-6">Our vision at BquTalent is to revolutionize the outsourcing industry by redefining how businesses access talent and achieve growth. We envision a world where every organization can seamlessly tap into a global pool of skilled professionals, leveraging their expertise to drive success. Through our cutting-edge platform, unwavering commitment to quality, and collaborative approach, we aim to empower businesses to scale, innovate, and thrive in the digital landscape.</p>
                </div>

            </section>
        </article>
    )
}

export default MissionVision