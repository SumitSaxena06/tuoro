export default function Searchbar(){
    return(
        <div>
            <form className="flex justify-center mt-6 gap-2">
                <input type="text" placeholder="Search for the best tutors around you!" className="border w-1/2 px-4 py-2 rounded-lg focus:outline-none"/>
                <button className="bg-fuchsia-400 text-white px-4 py-3 border rounded-lg">Search</button>
            </form>
        </div>
    )
}