import SearchBar from "./SearchBar";

export default function TopSection() {
    return (
        <section className="relative h-[693px] bg-[#f2f2f2] overflow-visible">
            <div className="flex flex-col justify-between px-6 py-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <header className="flex justify-between items-center mb-50 relative z-20">
                    <div className=" flex gap-[50px]">
                        <h1 className="text-2xl font-bold text-black">
                            Job<span className="text-[#00cc99]">NQW</span>
                        </h1>

                        <nav className="space-x-10 text-black font-medium hidden md:flex justify-between">
                            <a href="#" className="hover:text-[#00cc99]">Home</a>
                            <a href="#" className="hover:text-[#00cc99">Job</a>
                            <a href="#" className="hover:text-[#00cc99">About Us</a>
                            <a href="#" className="hover:text-[#00cc99]">Contact</a>
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
                    <h2 className="text-4xl text-black font-extrabold mb-4">Search, Find, & Apply</h2>
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

     <img
    src="./icons/img1.svg"
    alt="icon1"
    className="absolute"
    style={{ top: "10%", left: "15%", width: "40px", transform: "rotate(15deg)" }}
  />
  <img
    src="./icons/img2.svg"
    alt="icon2"
    className="absolute"
    style={{ top: "50%", left: "60%", width: "50px", transform: "rotate(-25deg)" }}
  />
  <img
    src="./icons/img3.svg"
    alt="icon3"
    className="absolute"
    style={{ top: "70%", left: "30%", width: "35px", transform: "rotate(35deg)" }}
  />
   <div
    className="absolute bg-white p-2 rounded-md"
    style={{ top: "20%", left: "15%", transform: "rotate(15deg)", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img src="/icons/img1.svg" alt="icon1" style={{ width: "24px", height: "24px" }} />
  </div>

  <div
    className="absolute bg-white p-2 rounded-md"
    style={{ top: "50%", left: "60%", transform: "rotate(-25deg)", width: "58px", height: "58px", display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img src="/icons/img2.svg" alt="icon2" style={{ width: "30px", height: "30px" }} />
  </div>

  <div
    className="absolute bg-white p-2 rounded-md"
    style={{ top: "70%", left: "30%", transform: "rotate(35deg)", width: "43px", height: "43px", display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img src="/icons/img3.svg" alt="icon3" style={{ width: "20px", height: "20px" }} />
  </div>
</div>

        </section>
    );
}
