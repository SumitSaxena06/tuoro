import Searchbar from "../components/Searchbar";
import Subjectcard from "../components/Subjectcard";
import Teacherscard from "../components/Teacherscard";

export default function Home(){
    const subjects = [
        { name: "Mathematics", icon: "📐" },
        { name: "Physics", icon: "⚛️" },
        { name: "Chemistry", icon: "🧪" },
        { name: "English", icon: "📚" },
        { name: "Computer Science", icon: "💻" },
        { name: "Biology", icon: "🧬" },
    ];
    const Tutors = [
        {name : "Sumit Saxena", subject:"Data Structures and Algorithms", price:"16", rating:"4.9"},
        {name : "Adarsh", subject:"Communications", price:"18", rating:"4.2"},
        {name : "Aditya", subject:"Physics", price:"24", rating:"4.6"},
        {name : "Yash Sharma", subject:"Chemistry",price:"19", rating:"4.7"}
    ];
    return(
        <div>
            <section className="text-center py-20">
            <h1 className="text-5xl font-bold py-3 font-sans"> Find the best techers Around the Community</h1>
            <h2>learn and Acheive Excellency from The Best!</h2>

            <Searchbar/>
            </section>

            <section>
                <h1 className="text-5xl font-bold flex justify-center">Browser Subjects.</h1>
                <p className="text-center text-2xl py-4">Find the best tutors for your Subject</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 max-w-5xl mx-auto">
                    {subjects.map((subject) => (
                        <Subjectcard key={subject.name}
                            subject={subject.name}
                            icon={subject.icon}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h1 className="text-5xl font-bold text-center px-6 py-8"> Popular Teachers </h1>
                <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 max-w-6xl mx-auto flex justify-between px-4 py-4">
                    {Tutors.map((tutor) => (
                        <Teacherscard key={tutor.name}
                        tutor={tutor}
                        />
                    ))}
                </div>
            </section>

            <section className=" py-12">
            <h1 className="text-5xl font-bold text-center mb-10">Why tuoro.</h1>

            <div className="flex justify-center gap-12 px-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
                <span className="text-4xl mb-3">🔍</span>
                <h3 className="text-xl font-semibold text-gray-800">Find Talent</h3>
                <p className="text-gray-600 mt-2 text-sm">Discover skilled tutors tailored to your needs.</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
                <span className="text-4xl mb-3">⚖️</span>
                <h3 className="text-xl font-semibold text-gray-800">Compare</h3>
                <p className="text-gray-600 mt-2 text-sm">Evaluate tutors side by side with ease.</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
                <span className="text-4xl mb-3">🏆</span>
                <h3 className="text-xl font-semibold text-gray-800">Learn from The Best</h3>
                <p className="text-gray-600 mt-2 text-sm">Get guidance from top-rated professionals.</p>
                </div>
            </div>
            </section>

        </div>
    )
}   