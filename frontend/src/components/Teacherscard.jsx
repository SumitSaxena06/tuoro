export default function Teacherscard({ tutor }) {
  return (
    <div className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
      
      {/* Avatar Section */}
      <div className="flex justify-center items-center bg-gradient-to-r from-emerald-300 to-emerald-400 h-40">
        <span className="text-6xl">👨‍🏫</span>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
        <p className="text-gray-600 mt-1">{tutor.subject}</p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 font-medium">
            ⭐ {tutor.rating}
          </span>
          <span className="text-gray-800 font-semibold">
            ${tutor.price}/hr
          </span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 rounded-xl transition-colors duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
}
