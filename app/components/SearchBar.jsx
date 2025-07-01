// components/SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="bg-white flex flex-col sm:flex-row gap-10">
      <input type="text" placeholder="Job title or keyword"
        className=" py-1 px-4 text-black rounded-md bg-[#f9f9f9] w-full sm:w-1/2 placeholder-black" />
      <input type="text" placeholder="Location"
        className="px-4 py-2 rounded-md text-black bg-[#f9f9f9] w-full sm:w-1/2 placeholder-black" />
      <button className="bg-[#00cc99] text-white px-6 py-3 rounded-md hover:bg-teal-600 transition">
        Search
      </button>
    </div>
  );
}
