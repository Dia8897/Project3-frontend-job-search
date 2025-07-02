export default function SearchBar() {
  return (
    <div className="bg-white flex flex-col sm:flex-row gap-10">
      <div className="flex justify-between items-center gap-2 rounded-md bg-[#f9f9f9] py-1 w-full ">
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

      <div className=" flex justify-between items-center gap-2 rounded-md bg-[#f9f9f9] w-full py-1 ">
        <img src="./icons/location.svg" alt="Search Icon" className="w-4 h-4 ml-2" />
        <select
          className="px-4 py-2 rounded-md text-black bg-[#f9f9f9] w-full placeholder-black"
        >
          <option value="">Location</option>
          <option value="">New York</option>
          <option value="">London</option>
          <option value="">Paris</option>
        </select>
      </div>
      <button className="bg-[#00cc99] text-white px-8 py-1 rounded-md hover:bg-teal-600 transition">
        Search
      </button>
    </div>
  );
}
