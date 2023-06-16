
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"

const HeaderMain = () => {

    const navigate = useNavigate()
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false)

    return (<>
        <article className="relative w-full h-[10vh] md:h-[10vh] flex items-center justify-between md:px-16">
            <section onClick={() => navigate("/")} className=" cursor-pointer ml-8">
                <img className="w-20 md:w-28 " src={logo} alt="" />
            </section>
            <section className="hidden md:flex items-center justify-center gap-8 text-[#003366] font-bold">
                <Link className={location.pathname !== "/" && "text-black opacity-50"} to="/">Home</Link>
                <Link className={location.pathname !== "/services" && "text-black opacity-50"} to="/services">Services</Link>
                <Link className={location.pathname !== "/About-us" && "text-black opacity-50"} to="/About-us">About us</Link>
                <button onClick={() => {
                    navigate("/")
                    setTimeout(() => {
                        const element = document.getElementById("contact-us");
                        element.scrollIntoView();
                    }, 100)
                }} className="ml-10 bg-[#082d52] text-white px-6 py-2 border-none rounded-md">Contact us</button>
            </section>

            <section className="px-4 md:hidden cursor-pointer" onClick={() => setShowMenu(prev => !prev)}>
                {showMenu ? <AiOutlineClose className="w-6 h-6" /> : <GiHamburgerMenu className="w-6 h-6" />}
            </section>


        </article>

        {showMenu && <section className=" flex flex-col bg-[#003366] text-white text-sm items-start justify-center text-[#003366] font-bold pb-2">
            <Link onClick={() => setShowMenu(false)} className="mt-2 pl-8 border-b border-b-gray-500 w-full py-2" to="/">Home</Link>
            <Link onClick={() => setShowMenu(false)} className="mt-2 pl-8 border-b border-b-gray-500 w-full py-2" to="/services">Services</Link>
            <Link onClick={() => setShowMenu(false)} className="mt-2 pl-8 border-b border-b-gray-500 w-full py-2" to="/About-us">About us</Link>
            <button onClick={() => {
                setShowMenu(false)
                navigate("/")

                setTimeout(() => {
                    const element = document.getElementById("contact-us");
                    element.scrollIntoView();
                }, 100)
            }} className="pl-8 text-white px-6 py-2 border-none rounded-md">Contact us</button>
        </section>}
    </>
    )
}

export default HeaderMain