
import img from '../assets/AboutUs/Sucess.png';
import img2 from '../assets/AboutUs/ignite.png';


const Ignit = () => {
    return (
        <article className='mt-14 md:mt-32 px-[5%]'>
            <h2 className='font-bold text-[#003366] text-xl text-center md:text-left md:text-3xl'>Igniting Success through Collaborative Outsourcing</h2>
            <div className='md:hidden'>
                <img className="w-[94%] ml-[3%]" src={img2} alt="" />
            </div>
            <p className=' mt-2'>Join our pool and let us find you the best talent for your company. Let us save you time and money by assisting you in finding the best talent for your company.</p>
            <div className='hidden md:block mt-8'>
                <img src={img} alt="" />
            </div>
        </article>
    )
}

export default Ignit