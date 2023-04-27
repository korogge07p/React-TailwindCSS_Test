import { Link } from "react-router-dom";

const Members = () => {
    return(
        <div>
            <h1 className="font-noto font-bold my-11 text-5xl flex justify-center items-center">
                Member Page
            </h1>
            <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
        </div>
    )
}
    


export default Members;