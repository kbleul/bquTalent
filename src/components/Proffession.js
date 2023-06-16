import { useState } from "react"
import img1 from "../assets/pro/1.png"
import img2 from "../assets/pro/2.png"
import img3 from "../assets/pro/3.png"
import img4 from "../assets/pro/4.png"
import img5 from "../assets/pro/5.png"
import img6 from "../assets/pro/6.png"

import { Dots } from "./PeopleSay"


const PRO = [
    {
        name: "Software Development",
        para: "(Web and Mobile app development)",
        img: img1,
        related: ["Web Development", "Mobile Development", "Desktop app Development", "Algorithm designs"]
    },
    {
        name: "Creative Designs",
        para: "(UI/UX, Graphics, Motion design and Video editing)",
        img: img2,
        related: ["UI/UX design", "Graphics Design", "3D and Motion Graphics", "Photo and Video Editing"]
    },
    {
        name: "Digital Marketing",
        para: "(Digital marketing and social media management)",
        img: img3,
        related: ["Digital marketing", "Social Media Management", "SEO Specialist", "Digital Marketing Strategist"]
    },
    {
        name: "Content Creating",
        para: "(Content creating, copy writing and data entry)",
        img: img4,
        related: ["Content creating", "Mobile Development", "Data Entry", "Prompt engineer"]
    },
    {
        name: "Project Management",
        para: "(Project management and administrative support)",
        img: img5,
        related: ["Project Management", "Administrative support", "Task Management", "Office Management"]
    },
    {
        name: "Quality assurance",
        para: "(Quality assurance and testing)",
        img: img6,
        related: ["Quality Assurance", "Manual Testing", "Automated Testing", "User Testing"]
    }
]


const Proffession = () => {

    const [active, setActive] = useState(0)


    const handleScroll = () => {
        active >= PRO.length - 1 ?
            setActive(0)
            : setActive(prev => ++prev)
    }

    return (
        <article className='py-4 md:py-10 mt-12 md:mt-32'>
            <h2 className="font-bold text-xl md:text-2xl text-center w-full text-[#003366] uppercase py-2">List of Major profession categories</h2>

            <p className='hidden md:block w-[70%] ml-[15%] text-center'>Explore a diverse range of professional categories, tailored to meet your unique business needs. Our comprehensive list encompasses top industry domains, ensuring access to exceptional talent across various sectors.</p>

            <section className="hidden md:grid grid-cols-3 gap-y-10 items-center justify-center mt-16 w-4/5 ml-[10%]">
                {PRO.map((item, index) => (<div key={item.name} className="bg-gray-100 text-center py-14 w-[70%] ml-[15%] rounded-2xl flex flex-col items-center justify-center">

                    <img className="svg-animation w-12 h-12" src={item.img} alt="" />
                    <h2 className="text-xl font-bold text-[#122638] title-animation">{item.name}</h2>
                    <p className=" px-4 para-animation">{item.para}</p>

                    <div className="details text-[#003366]">
                        {item.related.map(item => (
                            <li key={item} className='text-sm px-2 flex items-center justify-start gap-x-2 pt-2'>
                                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6425 0.343717C4.93063 0.266569 0.267545 4.92965 0.344694 10.6416C0.420866 16.1196 4.88131 20.58 10.3593 20.6562C16.0722 20.7343 20.7343 16.0713 20.6562 10.3593C20.581 4.88034 16.1206 0.419889 10.6425 0.343717ZM9.82272 9.74167L12.3398 6.86081C12.4762 6.70476 12.6689 6.60927 12.8757 6.59535C13.0825 6.58144 13.2863 6.65022 13.4423 6.78659C13.5984 6.92295 13.6939 7.11572 13.7078 7.32249C13.7217 7.52925 13.6529 7.73308 13.5166 7.88913L10.9995 10.77C10.932 10.8473 10.8499 10.9105 10.7579 10.956C10.666 11.0016 10.566 11.0285 10.4636 11.0354C10.3612 11.0423 10.2585 11.029 10.1612 10.9962C10.064 10.9634 9.97421 10.9117 9.89694 10.8442C9.81967 10.7767 9.75646 10.6946 9.71091 10.6027C9.66537 10.5107 9.63838 10.4107 9.63149 10.3083C9.62459 10.2059 9.63794 10.1032 9.67075 10.006C9.70356 9.90874 9.7552 9.81893 9.82272 9.74167ZM7.92526 14.1777C7.77876 14.3241 7.58013 14.4063 7.37301 14.4063C7.1659 14.4063 6.96727 14.3241 6.82077 14.1777L4.47946 11.834C4.40694 11.7614 4.34942 11.6752 4.3102 11.5804C4.27097 11.4856 4.25081 11.384 4.25085 11.2814C4.2509 11.1788 4.27115 11.0772 4.31046 10.9824C4.34977 10.8876 4.40736 10.8015 4.47995 10.729C4.55253 10.6564 4.63869 10.5989 4.73351 10.5597C4.82832 10.5205 4.92993 10.5003 5.03254 10.5004C5.13515 10.5004 5.23674 10.5207 5.33152 10.56C5.4263 10.5993 5.51241 10.6569 5.58493 10.7295L7.92868 13.0732C8.07463 13.2202 8.15625 13.4191 8.15561 13.6262C8.15497 13.8333 8.07212 14.0317 7.92526 14.1777ZM16.5581 7.88913L11.0952 14.1391C11.0248 14.2198 10.9386 14.2851 10.8419 14.331C10.7452 14.377 10.6401 14.4026 10.5332 14.4062H10.5068C10.4041 14.4062 10.3025 14.386 10.2076 14.3467C10.1128 14.3074 10.0266 14.2498 9.95407 14.1772L7.61325 11.8335C7.46678 11.6869 7.38455 11.4881 7.38464 11.2809C7.38474 11.0736 7.46714 10.8749 7.61374 10.7285C7.76033 10.582 7.9591 10.4998 8.16633 10.4999C8.37355 10.5 8.57225 10.5824 8.71872 10.729L10.1738 12.1855C10.2116 12.2234 10.2568 12.253 10.3066 12.2727C10.3563 12.2923 10.4096 12.3015 10.4631 12.2997C10.5166 12.298 10.5691 12.2852 10.6174 12.2623C10.6658 12.2394 10.7089 12.2067 10.7441 12.1665L15.3828 6.86081C15.5191 6.70476 15.7119 6.60927 15.9187 6.59535C16.1254 6.58144 16.3293 6.65022 16.4853 6.78659C16.6414 6.92295 16.7369 7.11572 16.7508 7.32249C16.7647 7.52925 16.6959 7.73308 16.5595 7.88913H16.5581Z" fill="#003366" />
                                </svg>
                                <p>{item}</p></li>
                        ))}
                    </div>
                </div>

                ))}
            </section>

            <article onTouchEnd={handleScroll} className="md:hidden  mt-10 pb-14">
                <section className="   w-4/5 ml-[10%]">
                    <div key={PRO[active].name} className="bg-gray-100 text-center py-14 w-full rounded-2xl flex flex-col PRO[active]s-center justify-center">

                        {/* <img className="svg-animation w-16 h-16" src={PRO[active].img} alt="" /> */}

                        <h2 className="text-xl font-bold text-[#122638]">{PRO[active].name}</h2>
                        <p className="px-4  pt-1">{PRO[active].para}</p>

                        <div className="text-[#003366] ml-[13%]">
                            {PRO[active].related.map(item => (
                                <li key={item} className=' px-2 flex items-center justify-start gap-x-2 pt-2'>
                                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6425 0.343717C4.93063 0.266569 0.267545 4.92965 0.344694 10.6416C0.420866 16.1196 4.88131 20.58 10.3593 20.6562C16.0722 20.7343 20.7343 16.0713 20.6562 10.3593C20.581 4.88034 16.1206 0.419889 10.6425 0.343717ZM9.82272 9.74167L12.3398 6.86081C12.4762 6.70476 12.6689 6.60927 12.8757 6.59535C13.0825 6.58144 13.2863 6.65022 13.4423 6.78659C13.5984 6.92295 13.6939 7.11572 13.7078 7.32249C13.7217 7.52925 13.6529 7.73308 13.5166 7.88913L10.9995 10.77C10.932 10.8473 10.8499 10.9105 10.7579 10.956C10.666 11.0016 10.566 11.0285 10.4636 11.0354C10.3612 11.0423 10.2585 11.029 10.1612 10.9962C10.064 10.9634 9.97421 10.9117 9.89694 10.8442C9.81967 10.7767 9.75646 10.6946 9.71091 10.6027C9.66537 10.5107 9.63838 10.4107 9.63149 10.3083C9.62459 10.2059 9.63794 10.1032 9.67075 10.006C9.70356 9.90874 9.7552 9.81893 9.82272 9.74167ZM7.92526 14.1777C7.77876 14.3241 7.58013 14.4063 7.37301 14.4063C7.1659 14.4063 6.96727 14.3241 6.82077 14.1777L4.47946 11.834C4.40694 11.7614 4.34942 11.6752 4.3102 11.5804C4.27097 11.4856 4.25081 11.384 4.25085 11.2814C4.2509 11.1788 4.27115 11.0772 4.31046 10.9824C4.34977 10.8876 4.40736 10.8015 4.47995 10.729C4.55253 10.6564 4.63869 10.5989 4.73351 10.5597C4.82832 10.5205 4.92993 10.5003 5.03254 10.5004C5.13515 10.5004 5.23674 10.5207 5.33152 10.56C5.4263 10.5993 5.51241 10.6569 5.58493 10.7295L7.92868 13.0732C8.07463 13.2202 8.15625 13.4191 8.15561 13.6262C8.15497 13.8333 8.07212 14.0317 7.92526 14.1777ZM16.5581 7.88913L11.0952 14.1391C11.0248 14.2198 10.9386 14.2851 10.8419 14.331C10.7452 14.377 10.6401 14.4026 10.5332 14.4062H10.5068C10.4041 14.4062 10.3025 14.386 10.2076 14.3467C10.1128 14.3074 10.0266 14.2498 9.95407 14.1772L7.61325 11.8335C7.46678 11.6869 7.38455 11.4881 7.38464 11.2809C7.38474 11.0736 7.46714 10.8749 7.61374 10.7285C7.76033 10.582 7.9591 10.4998 8.16633 10.4999C8.37355 10.5 8.57225 10.5824 8.71872 10.729L10.1738 12.1855C10.2116 12.2234 10.2568 12.253 10.3066 12.2727C10.3563 12.2923 10.4096 12.3015 10.4631 12.2997C10.5166 12.298 10.5691 12.2852 10.6174 12.2623C10.6658 12.2394 10.7089 12.2067 10.7441 12.1665L15.3828 6.86081C15.5191 6.70476 15.7119 6.60927 15.9187 6.59535C16.1254 6.58144 16.3293 6.65022 16.4853 6.78659C16.6414 6.92295 16.7369 7.11572 16.7508 7.32249C16.7647 7.52925 16.6959 7.73308 16.5595 7.88913H16.5581Z" fill="#003366" />
                                    </svg>

                                    <p>{item}</p></li>
                            ))}
                        </div>
                    </div>

                </section>

                <section className='pt-3 flex items-center justify-center mt-10 gap-x-2 md:hidden '>
                    {PRO.map((item, index) => (
                        <Dots key={index} active={active === index} />
                    ))}
                </section>
            </article>



        </article >
    )
}



export default Proffession