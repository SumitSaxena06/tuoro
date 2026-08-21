export default function Teacherscard({tutor}){
    return(
        <div className="bg-emerald-300 border p-6 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center items-center bg-gray-100 h-40">
                <span className="text-5xl">👨‍🏫</span>
            </div>

            <div className="p-5">
                <h3 className="text-2xl font-semibold">{tutor.name}</h3>
                <p className="text-xl mt-1">{tutor.subject}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-yellow-500">
                    ⭐ {tutor.rating}
                    </span>

                    <span className="font-semibold">
                        ${tutor.price}/hr
                    </span>
                </div>
            <button className="border rounded-2xl bg-fuchsia-400 text-white px-2 py-2"> View Profile</button>
            </div>
        </div>
    )
}