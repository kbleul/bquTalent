
import img1 from "../assets/Clients/beu.png"
import img2 from "../assets/Clients/buna.png"
import img3 from "../assets/Clients/bus.png"
import img4 from "../assets/Clients/flintstone.png"
import img5 from "../assets/Clients/habari.png"
import img6 from "../assets/Clients/lucy.png"
import img7 from "../assets/Clients/nib.png"
import img8 from "../assets/Clients/prana.png"
import img9 from "../assets/Clients/tamegas.png"
import img10 from "../assets/Clients/yegara.png"



const TrustedBy = ({ bgOn }) => {
    return (
        <article className={bgOn ? "mt-14 md:mt-32 missionContainer pb-8" : "mt-14 md:mt-32"}>
            <h3 className="text-xl md:text-4xl text-[#003366] font-bold w-full text-center py-8">Trusted by</h3>

            <div class="carousel-container">
                <div class="carousel">
                    <div class="carousel-track gap-x-6 md:gap-x-24">
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img1} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img2} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img3} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img4} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img5} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img6} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img7} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img8} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img9} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img10} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img1} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img2} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img3} alt="" />
                        <img className="h-10 w-16 md:h-12 md:w-24 mr-4 " src={img4} alt="" />
                    </div>
                </div>
            </div>


        </article>
    )
}

export default TrustedBy