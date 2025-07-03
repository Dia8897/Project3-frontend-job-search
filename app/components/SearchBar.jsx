export default function SearchBar() {
  return (
    <div className="bg-white flex flex-wrap gap-3 text-sm w-full max-w-4xl mx-auto items-center">


      <div className="flex items-center gap-2 rounded-md bg-[#f9f9f9] px-2 py-1 flex-grow  flex-shrink-0">
        <img src="./icons/job-title.svg" alt="Job Icon" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="flex-grow text-black placeholder-black w-full"
        />
      </div>


      <div className="flex items-center gap-2 rounded-md bg-[#f9f9f9] px-2 py-1 flex-grow  flex-shrink-0">
        <img src="./icons/location.svg" alt="Location Icon" className="w-4 h-4 ml-2" />
        <select
          className="flex-grow px-4 py-2 rounded-md text-black bg-[#f9f9f9] w-full placeholder-black"
        >
          <option value="">Location</option>
          <option value="">New York</option>
          <option value="">London</option>
          <option value="">Paris</option>
        </select>
      </div>


      <button className="bg-[#00cc99] text-white px-8 py-1 rounded-md hover:bg-teal-600 transition flex-shrink-0">
        Search
      </button>
    </div>
  );
}
