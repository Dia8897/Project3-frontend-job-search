export default function SearchBar() {
  return (
    <div className="bg-white flex flex-col sm:flex-row gap-10">
      <div className="flex items-center gap-2 rounded-md bg-[#f9f9f9] py-2 w-full ">
        <img
          src="./icons/job-title.svg"
          alt="Search Icon"
          className="w-4 h-4"
        />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full text-black placeholder-black"
        />
      </div>

      <div className=" flex items-center gap-2 rounded-md bg-[#f9f9f9] w-full py-2 ">
        <img src="./icons/location.svg" alt="Search Icon" className="w-4 h-4 ml-2" />
        <input
          type="text"
          placeholder="Location"
          className="px-4 py-2 rounded-md text-black bg-[#f9f9f9] w-full placeholder-black"
        />
      </div>
      <button className="bg-[#00cc99] text-white px-6 py-3 rounded-md hover:bg-teal-600 transition">
        Search
      </button>
    </div>
  );
}
