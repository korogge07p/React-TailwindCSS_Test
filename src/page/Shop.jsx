import { Link } from "react-router-dom";

const Shop = () => {
    return(
        <div>
            <h1 className=" font-noto text-red-600 text-9xl flex justify-center items-center my-11">
                Sold out.
            </h1>
            <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
        </div>
    )
}
    


export default Shop;