import SearchBar from "./SearchBar";

export default function TopSection() {
    return (
        <section className="relative h-[693px] bg-[#f2f2f2] overflow-visible">
            <div className="flex flex-col justify-between px-6 py-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <header className="flex justify-between items-center mb-50 relative z-20">
                    <div className=" flex gap-[50px]">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Job<span className="text-[#00cc99]">NQW</span>
                        </h1>

                        <nav className="space-x-10 font-medium hidden md:flex justify-between">
                            <a href="#" className="hover:text-teal-500">Home</a>
                            <a href="#" className="hover:text-teal-500">Job</a>
                            <a href="#" className="hover:text-teal-500">About Us</a>
                            <a href="#" className="hover:text-teal-500">Contact</a>
                        </nav>
                    </div>

                    <div className="space-x-10 hidden md:flex">
                        <button className="text-white">Sign In</button>
                        <button className="px-4 py-2 bg-white rounded-md hover:bg-teal-600 hover:text-white transition">
                            Create Account
                        </button>
                    </div>
                </header>


                <div className="max-w-xl ">
                    <h2 className="text-4xl font-extrabold mb-4">Search, Find, & Apply</h2>
                    <p className="mb-10 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, urna eu tincidunt consectetur.
                    </p>
                    <div className = "bg-white py-4 px-6 rounded-lg">
                    <SearchBar />
                    </div>
                </div>
            </div>

           <div
  className="absolute top-0 right-0 z-10 w-[603px] h-full bg-[#00cc99] rounded-bl-[80px] "
>
 
</div>

        </section>
    );
}
