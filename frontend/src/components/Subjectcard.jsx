export default function Subjectcard({subject, icon}){
    return(
        <div className="bg-fuchsia-200 border p-6 rounded-2xl shadow-sm hover:shadow-md ">
            <div className="flex justify-around">
                {icon}
            </div>
            <h3 className="text-lg font-semibold">
                {subject}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
                Find Tutors
            </p>
        </div>
    )
}