import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="flex justify-between items-center bg-orange-400 px-8 py-4">
            <p className="text-2xl font-bold px-4 "> <Link to='/'>tuoro.</Link> </p>
            <div className="flex justify-between gap-2">
                <Link to='/Signup' className="bg-orange-500 px-2 py-1 rounded-2xl text-white">Sign up</Link>
                <Link to = '/Signin'className=" bg-fuchsia-300 px-2 py-1 rounded-2xl">Sign in</Link>
            </div>
        </div>
    )
}