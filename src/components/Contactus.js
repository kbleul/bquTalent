
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';




const Contactus = () => {
    return (
        <article id="contact-us" className="mt-16 pt-0 md:pt-16 flex items-center justify-center mb-4">
            <section className="w-full   md:w-1/2 md:px-16">
                <h2 className="pl-[5%] md:pl-0 text-[#003366] font-bold text-base md:text-3xl py-2">Contact Us</h2>
                <p className="w-4/5 pl-[5%] md:pl-0 text-sm md:text-base">Fell free to contact us any time. we will get back to you
                    as soon as possible.</p>

                <form className="flex flex-col justify-center items-center mt-8 w-[90%] ml-[5%]">
                    <input type="text" placeholder="*Full Name" className="contact_input border w-full rounded-md py-2 px-4 mb-8" />
                    <input type="email" placeholder="*Email" className="contact_input border w-full rounded-md py-2 px-4 mb-8" />
                    <textarea rows="7" placeholder="*Message" className="contact_textarea border w-full rounded-md p-2 mb-8" ></textarea>

                    <button type="submit" className="w-full md:w-2/5 md:ml-0 rounded-xl py-2 bg-[#003366] text-white font-bold">Submit</button>
                </form>
            </section>
            <section className="hidden md:block w-1/2">
                <section className="relative ">
                    <div className="h-[70vh] w-2/5 ml-[60%]"
                        style={{
                            background: "rgba(255, 46, 0, 0.1)"
                        }}></div>

                    <div className="info absolute top-[10vh] border h-[50vh] ml-[20%] w-[70%] text-white">
                        <h4 className="font-bold text-3xl p-10">Info</h4>
                        <div className='px-10 flex items-center gap-4 mb-6'>
                            <MdEmail className="w-6 h-6" />
                            <p>Bqutalent@info.com</p>
                        </div>
                        <div className='px-10 flex items-center gap-4 mb-6'>
                            <BsFillTelephoneFill className="w-6 h-6" />
                            <div>
                                <p>(+251-9535-0856)</p>
                                <p>(+251-9535-0856)</p>
                            </div>
                        </div>
                        <div className='px-10 flex items-center gap-4'>
                            <MdLocationOn className="w-6 h-6" />
                            <p>Meskel Flower, Addis Ababa, ETHIOPIA</p>
                        </div>
                    </div>

                    <div className='absolute top-12 w-12 h-12 bg-[#FF603D] ml-[17%]'></div>
                </section>
            </section>
        </article>
    )
}

export default Contactus