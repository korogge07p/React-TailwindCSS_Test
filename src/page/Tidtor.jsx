import { Link } from "react-router-dom";
import KunPedDank from '../assets/img/KunPedDank.png'

const Tidtor = () => {
    return(
        <div>
            <h1 className="font-noto font-bold my-11 text-5xl flex justify-center items-center">
                Contact here, but not here
            </h1>
            <div className="m-auto border w-10 h-10 border-none my-5">
                <img className="" src={KunPedDank} alt="CEO" />
            </div>
            <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
        </div>
    )
}
    

export default Tidtor;