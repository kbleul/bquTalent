

import HeroImg from '../assets/ServicesPage/Background.png'
import HeroImg2 from '../assets/ServicesPage/bg.png'



const HeroSecondary = ({ title, para }) => {
    return (
        <article className='h-[70vh] md:h-[90vh] flex items-center relative   overflow-hidden'>

            <section className='px-4 md:w-[45%] md:ml-[10%] z-[20] relative'>
                <div className='secondaryHero_box z-[20]  text-white  rounded-xl px-4 md:px-8 py-8'>
                    <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
                    <p className="mt-6 text-sm">{para}</p>
                </div>

            </section>

            <div style={{
                backgroundImage: `url(${HeroImg2})`,
            }} className='absolute top-0 w-full z-2 h-full'></div>

            <div style={{
                backgroundImage: `url(${HeroImg})`,
            }} className='absolute top-0 w-full z-10 h-full'></div>
        </article>
    )
}

export default HeroSecondary