
import { useState } from 'react'
import img1 from '../assets/ServicesPage/c1.png'
import img2 from '../assets/ServicesPage/c2.png'
import clientImg from "../assets/client.png"

import { GrNext } from 'react-icons/gr';


const CLIENTS = [
    {
        name: "Eli Westerwood",
        "para": "As a tech startup, finding skilled programmers who align with our company's vision and culture is crucial for our success. The process of recruiting and interviewing candidates, however, can be daunting and time-consuming. That's when we discovered BquTalent, and they have been a game-changer for us. BquTalent understood our unique needs and connected us with talented programmers based in Ethiopia. Their skills, expertise, and dedication have been instrumental in propelling our startup forward. Thanks to BquTalent, we have been able to build a strong team of programmers who share our passion and drive, helping us achieve our goals and make our mark in the tech industry",
        "job": "Director of Product Marketing",
        img: img1
    },
    {
        name: "James Alen",
        "para": "Finding the right talent for our company is crucial, but the process of recruiting, coaching, and interviewing can be overwhelming. That's why I turned to BquTalent for assistance, and they exceeded my expectations. BquTalent came to my rescue by connecting me with a skilled talent based in Ethiopia. Despite the geographical distance, communication and collaboration were seamless. BquTalent has become an invaluable resource for me, helping me streamline my interview process and find the best tech talent for our company with ease.",
        "job": "Project Manager",
        img: clientImg
    },
    {
        name: "Hanna Weeler",
        "para": "Recruiting, coaching, and interviewing top-notch tech talent is essential for our company's success, but it can be a time-consuming and overwhelming process. That's why I turned to BquTalent, and I am incredibly pleased with the results. BquTalent stepped in and connected me with exceptional talent based in Ethiopia, who have proven to be a perfect fit for our organization.With BquTalent's support, we have been able to attract and hire the best tech talent, empowering our company to thrive in a competitive industry.",
        "job": "Chief Executive Officer",
        img: img2
    },
]


const PeopleSay = () => {

    const [active, setActive] = useState(0)

    const handleScroll = () => {
        active >= CLIENTS.length - 1 ?
            setActive(0)
            : setActive(prev => ++prev)
    }


    return (
        <article className='mt-12 md:mt-32'>
            <h2 className="font-bold text-xl text-center w-full text-[#003366] uppercase py-2">What people say about our services</h2>

            <section className='flex justify-center items-center mt-10'>
                <div className='w-2/5'>{CLIENTS.map((client, index) => (
                    <div key={index} onClick={() => active !== index && setActive(index)}
                        className={active === index ? 'shadow-lg  rounded-2xl gap-8 my-4 hidden md:flex items-center justify-start px-4 py-4 w-3/5 ml-[20%]' : ' gap-8 my-4 hidden md:flex items-center justify-start px-4 py-4 w-3/5 ml-[20%] cursor-pointer'}>
                        <div>
                            <img className='w-14 h-14 rounded-full' src={client.img} alt="" />
                        </div>
                        <div>
                            <h5 className='text-[#003366] font-bold'>{client.name}</h5>
                            <p className='text-sm'>{client.job}</p>
                        </div>
                    </div>
                ))}</div>

                <ClientMsg active={active} setActive={setActive} />

            </section>
            <div
                className='shadow-lg rounded-2xl gap-8 md:hidden flex items-center justify-start px-4 py-4 w-4/5 ml-[10%] mt-8'

                onTouchEnd={handleScroll}

            >
                <div>
                    <img className='w-14 h-14 rounded-full' src={CLIENTS[active].img} alt="" />
                </div>
                <div>
                    <h5 className='text-[#003366] font-bold'>{CLIENTS[active].name}</h5>
                    <p className='text-sm'>{CLIENTS[active].job}</p>
                </div>
            </div>

            <section className='flex items-center justify-center mt-10 gap-x-2 md:hidden '>
                {CLIENTS.map((item, index) => (
                    <Dots key={index} active={active === index} />
                ))}
            </section>
        </article>
    )
}

const ClientMsg = ({ active, setActive }) => {


    return (<article className='relative md:w-3/5 md:pr-16 leading-8 px-4 '>
        <p>{CLIENTS[active].para}</p>
        <GrNext onClick={() => {
            CLIENTS[active + 1] ? setActive(prev => ++prev) : setActive(0)
        }} className="h-8 w-8 rounded-full bg-gray-200 p-2 md:h-10 md:w-10 absolute right-2 top-[40%] cursor-pointer" />

    </article>)
}

export const Dots = ({ active, bg }) => {

    const class1 = bg ? " w-3 h-3 rounded-full bg-" + bg : " w-3 h-3 rounded-full bg-[#003366]"
    const class2 = bg ? " w-2 h-2 rounded-full bg-" + bg : " w-2 h-2 rounded-full bg-[#003366]"

    return (<div className={active ? class1 : class2}></div>)
}

export default PeopleSay