import { Link } from "react-router-dom";

const Music = () => {
    return(
        <div>
            <h1 className="font-noto font-bold my-11 text-5xl flex justify-center items-center">
                Music not found 404.
            </h1>
            <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
        </div>
    )
}

export default Music;