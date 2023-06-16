import { useState } from 'react'
import { Dots } from './PeopleSay'


import img1 from "../assets/culture/1.png"
import img2 from "../assets/culture/2.png"
import img3 from "../assets/culture/3.png"

const CULTURE = [
    {
        name: "Customer-Centric Service",
        para: "At the core of our company culture is a relentless focus on putting our customers first. We strive to deeply understand their needs, exceed their expectations, and provide personalized solutions with exceptional care and attention.",
        img: img1
    },
    {
        name: "Timeliness",
        para: "We value the importance of delivering our services with utmost timeliness. We are committed to meeting deadlines and ensuring prompt responses, allowing our clients to stay on track and achieve their goals efficiently.",
        img: img2
    },
    {
        name: "Communication & Transparency",
        para: "We believe in fostering open and transparent communication with our clients. We keep them informed at every step, listen attentively to their feedback, and maintain clear lines of communication to ensure a collaborative and trust-based partnership.",
        img: img3
    }
]


const Culture = () => {

    const [active, setActive] = useState(0)

    const handleScroll = () => {
        console.log("scroll", active)
        active >= CULTURE.length - 1 ?
            setActive(0)
            : setActive(prev => ++prev)
    }


    return (
        <article className="mt-14  md:mt-32">
            <h2 className="font-bold text-2xl text-center w-full text-[#003366] uppercase py-2">Company Culture</h2>
            <p className="text-center px-2">Join us on this exciting journey and be a part of a company culture that values passion, integrity, and a shared commitment to success.</p>

            <section className="hidden md:flex items-center justify-center mt-8 py-8 w-4/5 ml-[10%]">
                {CULTURE.map((item, index) => (
                    <div className={index === 0 ? "flex flex-col items-center justify-center px-8  gap-y-2" : "flex flex-col items-center justify-center px-8  gap-y-2 border-l border-l-orange-400"}>
                        <img className="w-16 h-16" src={item.img} alt="" />
                        <h5 className="text-[#003366] font-bold">{item.name}</h5>
                        <p className="text-center leading-6">{item.para}</p>
                    </div>
                ))}
            </section>

            <section onTouchEnd={handleScroll} className="w-[90%] ml-[5%] mt-8 flex md:hidden flex-col items-center justify-center px-2 md:px-8  gap-y-2 border-r border-r-orange-400">
                <img className="w-16 h-16" src={CULTURE[active].img} alt="" />
                <h5 className="text-[#003366] text-center text-xl font-bold">{CULTURE[active].name}</h5>
                <p className="text-center  leading-6">{CULTURE[active].para}</p>
            </section>

            <section className='flex items-center justify-center mt-10 gap-x-2 md:hidden '>
                {CULTURE.map((item, index) => (
                    <Dots key={index} active={active === index} />
                ))}
            </section>
        </article>
    )
}

export default Culture