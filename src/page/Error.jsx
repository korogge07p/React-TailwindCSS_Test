import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h1 className=" text-red-600 font-noto font-bold my-11 text-5xl flex justify-center items-center">
                404 NOT FOUND ANY PAGE STUPID.
            </h1>
            <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
        </div>
    )
}
    


export default Error;