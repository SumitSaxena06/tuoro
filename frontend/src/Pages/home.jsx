import Searchbar from "../components/Searchbar";
import Subjectcard from "../components/Subjectcard";

export default function Home(){
    const subjects = [
        { name: "Mathematics", icon: "📐" },
        { name: "Physics", icon: "⚛️" },
        { name: "Chemistry", icon: "🧪" },
        { name: "English", icon: "📚" },
        { name: "Computer Science", icon: "💻" },
        { name: "Biology", icon: "🧬" },
    ];
    return(
        <div>
            <section className="text-center py-20">
            <h1 className="text-5xl font-bold py-3"> Find the best techers Around the Community</h1>
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
        </div>
    )
}   