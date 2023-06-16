

import HeroImg from '../assets/heromap.png'

const Hero = () => {
    return (
        <article className='h-[70vh] md:h-[90vh] opacity-6 flex items-center relative Hero_main overflow-hidden'>
            <section className='text-white md:w-[45%] md:ml-[10%]  z-[500] px-2'>
                <h2 className="font-bold text-xl md:text-3xl">Breaking Barriers, Building Success: </h2>
                <h2 className="font-bold text-xl md:text-3xl">Your Tech Partner of Choice</h2>
                <p className="mt-6 text-base md:text-base">From designing cutting-edge solutions to fueling growth, we are your trusted partner in harnessing the power of technology. Join us on this transformative journey and unlock a world of endless possibilities for your business.</p>
                <button className='text-sm md:text-base bg-white text-[#003366] font-bold px-4 py-2 rounded-md mt-4'>
                    <a href="/#contact-us" >Contact us</a>
                </button>

            </section>

            <div class="circle-container">
                <div class="circle"></div>
            </div>

            <div class="circle-container-two">
                <div class="circle-two"></div>
            </div>

            <div style={{
                backgroundImage: `url(${HeroImg})`,
            }} className='absolute top-0 w-full z-10 h-full '></div>
        </article>
    )
}

export default Hero