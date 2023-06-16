
import HeroImg from '../assets/heromap.png'

import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()

    return (<article style={{
        backgroundImage: `url(${HeroImg})`,
    }} className='mt-32 bg-gray-800 '>
        <article className="text-white py-16 text-sm grid grid-cols-2 md:flex gap-y-10 md:gap-y-0">
            <section className="md:w-2/5 col-span-2 px-[7%]">
                <h3 className="font-bold text-2xl mb-4">BquTalent</h3>
                <p className='text-sm'>BquTalent revolutionizes the way you work. Harnessing our industry-leading expertise and cutting-edge solutions, we drive growth, efficiency, and innovation for your business.
                </p>
            </section>
            <section className="md:w-1/5 w-4/5 ml-[10%] md:ml-0 col-span-1  justify-center flex flex-col items-start">
                <h5 className="font-bold border-b md:border-none mb-4 pt-2">Navigation Links</h5>
                <button className='py-1' onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/services")
                }}>Services</button>
                <button className='py-1' onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/about-us")
                }}>About Us</button>
                <button className='py-1'>Carrers</button>
            </section>
            <section className="md:w-1/5 w-4/5 ml-[10%] md:ml-0  col-span-1 flex flex-col items-start">
                <h5 className="font-bold border-b md:border-none mb-4 pt-2">Others</h5>
                <button className='py-1'>Privacy and policies</button>
                <button className='py-1'>Terms and conditions</button>
                <button className='py-1'>Help</button>
            </section>
            <section className="md:w-1/5 w-4/5 ml-[10%] md:ml-0 flex flex-col">
                <h5 className="font-bold border-b md:border-none mb-4 pt-2">Address</h5>
                <p className='py-1'>(+251-911520105)</p>
                <p className='py-1'>contact@bqutalent.com</p>
                <p className='py-1'>Addis Ababa, Ethiopia</p>
            </section>

            <div className='"md:w-1/5 w-4/5 ml-[10%] md:ml-0  md:hidden flex flex-col'>
                <h5 className="md:hidden font-bold border-b md:border-none mb-4 pt-2">Social Media</h5>

                <div className='flex items-center justify-center  gap-x-4'>
                    <FaFacebookF className='w-5 h-5' />
                    <BsInstagram className='w-5 h-5' />
                    <BsLinkedin className='w-5 h-5' />
                    <FaTwitter className='w-5 h-5' />
                </div>

            </div>
        </article>

        <section className='flex w-full md:w-[90%] md:ml-[5%] border-t border-t-gray-400 text-white'>
            <p className='md:w-4/5 w-full text-center md:text-right md:px-[20%] py-4 text-xs'>Copyright 2023 | BquTalent | All rights reserved</p>
            <div className='md:flex items-center justify-center px-10 gap-x-4 hidden '>
                <FaFacebookF className='w-5 h-5' />
                <BsInstagram className='w-5 h-5' />
                <BsLinkedin className='w-5 h-5' />
                <FaTwitter className='w-5 h-5' />
            </div>
        </section>
    </article>

    )
}






export default Footer