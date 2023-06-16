import { useState } from "react"
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';



const FAQ = () => {

    const [active, setActive] = useState(0)

    const QUESTIONS = [
        {
            title: "What is BquTalent?",
            para: "BquTalent specializes in recruiting, coaching, and interviewing the best tech talent in Ethiopia and connecting them with companies worldwide.. Our extensive network and deep understanding of the market enables us to provide tailored solutions that meet the unique needs of both candidates and client companies. BquTalent's commitment to streamlining the hiring process and delivering exceptional results have made us a trusted partner for businesses seeking to build high-performing teams with top tech talent."
        },
        {
            title: "How does BquTalent works?",
            para: "BquTalent connects companies with the best talent that meets their requirements through a streamlined process. Companies submit their talent requirements, followed by an extensive search to identify eligible candidates. Rigorous interviewing, training, and evaluation ensure only the most qualified candidates move forward. After a thorough assessment, we connect the best-matched talent to the company, ensuring a smooth transition. BquTalent saves time and effort while connecting companies with exceptional professionals."
        },
        {
            title: "What does the vetting process look like?",
            para: "The vetting process at BquTalent is thorough and meticulous to ensure the highest quality talent for our clients. Once potential candidates are identified, we conduct in-depth interviews to assess their skills, experience, and compatibility with client requirements. We also provide specialized training and evaluate their performance to ensure they meet the desired standards. Our stringent vetting process guarantees that only the most qualified and exceptional candidates progress to the final selection. We prioritize delivering top-tier talent to our clients, fostering successful partnerships and driving organizational growth."
        },
        {
            title: "How  does BquTalent guarantee the quality of its development teams?",
            para: "BquTalent guarantees the quality of its development teams through a rigorous process that ensures exceptional standards. We carefully select and vet candidates based on their technical skills, experience, and industry knowledge. Our comprehensive interviewing, training, and evaluation procedures ensure that only the most qualified and proficient professionals join our development teams. We also emphasize continuous improvement, providing ongoing support and feedback to enhance the skills and expertise of our teams. By prioritizing quality at every stage, BquTalent guarantees that our development teams deliver top-notch solutions, exceeding client expectations and driving project success."
        },
        {
            title: "How much does it cost to hire a web, app or product developer?",
            para: "Getting started is easy and risk-free! Send us an inquiry with your interests and our team will reach out to learn more about your requirements. "
        }
    ]

    return (
        <article className="bg-gray-100 mt-36 py-16 px-2">
            <h3 className="font-bold text-2xl md:text-3xl w-full text-center pb-2">FAQs</h3>
            <p className="text-center">Here are some frequently asked questions and the answers to them.</p>

            <div className="mt-8">
                {QUESTIONS.map((question, index) => (
                    <Question key={index} index={index} question={question} active={active} setActive={setActive} />
                ))}
            </div>
        </article>
    )
}


const Question = ({ index, question, active, setActive }) => {

    return (<article onClick={() => {
        active === index ? setActive(-1) : setActive(index)
    }} className="bg-white py-3 flex md:w-3/5 md:ml-[20%] rounded-xl mb-8 cursor-pointer">
        <div className="w-[10%] flex  justify-center">
            {active === index ? <AiOutlineMinusCircle className="w-6 h-6 md:w-8 h-8 text-[#003366]" /> : <AiOutlinePlusCircle className="w-6 h-6 md:w-8 h-8 text-[#003366]" />}
        </div>
        <section className="w-[82%]">
            <h5 className="text-[#003366] font-bold pt-1">{question.title}</h5>
            {active === index && <p className="leading-8 md:leading-6 my-3 px-4 border-l-2 border-l-[#FF2E00] ">{question.para}</p>}
        </section>
    </article>)
}
export default FAQ