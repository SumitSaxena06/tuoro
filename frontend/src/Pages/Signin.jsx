export default function Signin(){
    return(
        <div className="min-h-screen flex justify-center items-center bg-fuchsia-50">
            <div className="w-96 bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-black mb-6 text-center">Welcome Back!</h1>

                <form className="flex flex-col gap-4">

                    <div className="block mb-1">
                        <label>Email Address</label>
                        <input type="text" placeholder="Enter Your Email Address" className="w-full border rounded-lg px-3 py-2" />
                    </div>

                    <div className="block mb-1">
                        <label>Password</label>
                        <input type="text" placeholder="Enter password" className="w-full border rounded-lg px-3 py-2" />
                    </div>

                    <button type="Submit" className="bg-green-400 text-white py-2 rounded-lg mt-2 hover:bg-green-500 transition-colors duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}