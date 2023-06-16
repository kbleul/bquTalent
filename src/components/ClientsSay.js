import { useState } from "react"
import clientImg from "../assets/client.png"
import img1 from '../assets/ServicesPage/c1.png'
import img2 from '../assets/ServicesPage/c2.png'


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


const ClientsSay = () => {

    const [active, setActive] = useState(0)

    return (
        <article className="mt-16 md:mt-36 md:w-4/5 md:ml-[10%] relative">
            <h2 className="capitalize text-[#003366] text-2xl md:text-4xl w-full text-center font-bold mb-10">What clients say</h2>
            <Clients active={active} />

            <GrNext onClick={() => {
                CLIENTS[active + 1] ? setActive(prev => ++prev) : setActive(0)
            }} className="h-8 w-8 rounded-full bg-gray-200 p-2 md:h-10 md:w-10 absolute right-2 top-[40%] cursor-pointer" />
        </article>
    )
}


const Clients = ({ active }) => {


    return (<article>
        <section className="">
            <p className="quote w-[88%] ml-[6%] leading-8 md:leading-8 text-center">{CLIENTS[active].para}</p>
        </section>

        <section className="flex items-center justify-center mt-10 md:mt-16">
            <img className="w-12 h-12 md:w-16 md:h-16 rounded-full" src={CLIENTS[active].img} alt="" />
            <div className="flex flex-col ml-4">
                <h5 className="text-base text-[#003366] font-bold">{CLIENTS[active].name}</h5>
                <p className="text-sm">{CLIENTS[active].job}</p>
            </div>
        </section>
    </article>)
}

export default ClientsSay