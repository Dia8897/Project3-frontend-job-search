"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function TopSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className = "bg-[#f2f2f2]" style={{ fontFamily: "Montserrat, sans-serif" }}>

      <header className="fixed top-0 left-0 w-full ">
        <div className="flex w-full h-full items-center justify-between  min-h-[80px]  mx-auto">

          <div className="w-1/2 bg-[#f2f2f2] py-5">
            <div className = " flex items-center px-6 w-full justify-end pr-30">

              <div className="hidden md:flex items-center space-x-8 text-black">
                <h1 className="text-2xl font-bold whitespace-nowrap">
                  Job<span className="text-[#00cc99]">NQW</span>
                </h1>
                <nav className="flex space-x-6 font-medium">
                  <a href="#" className="hover:text-[#00cc99]">Home</a>
                  <a href="#" className="hover:text-[#00cc99]">Job</a>
                  <a href="#" className="hover:text-[#00cc99]">About Us</a>
                  <a href="#" className="hover:text-[#00cc99]">Contact</a>
                </nav>
              </div>
            </div>


            <div className="md:hidden text-black font-bold text-2xl">
              Job<span className="text-[#00cc99]">NQW</span>
            </div>
          </div>


          <div className="w-1/2 bg-[#00cc99]  py-5">
            <div className="flex items-center justify-end w-full max-w-lg px-6">

              <div className="hidden md:flex items-center space-x-4">
                <button className="text-white">Sign In</button>
                <button className="bg-white text-black rounded-md px-5 py-2 flex items-center gap-2">
                  <img
                    src="./icons/create-account.svg"
                    alt="create account"
                    className="w-5 h-5"
                  />
                  Create Account
                </button>
              </div>


              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                  className="flex flex-col justify-center items-center space-y-1.5"
                >
                  <span
                    className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                      }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>


        {menuOpen && (
          <div className="md:hidden bg-[#f2f2f2] flex flex-col px-6 py-4 space-y-4 shadow-lg relative z-40">
            <nav className="flex flex-col space-y-3 font-medium">
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#00cc99]">Home</a>
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#00cc99]">Job</a>
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#00cc99]">About Us</a>
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#00cc99]">Contact</a>
            </nav>
            <div className="flex flex-col space-y-3">
              <button onClick={() => setMenuOpen(false)} className="text-black text-left">Sign In</button>
              <button
                onClick={() => setMenuOpen(false)}
                className="bg-[#00cc99] text-white rounded-md px-5 py-2 flex items-center gap-2 justify-center"
              >
                <img
                  src="./icons/create-account.svg"
                  alt="create account"
                  className="w-5 h-5"
                />
                Create Account
              </button>
            </div>
          </div>
        )}
      </header>


      <section className="relative w-full flex flex-col md:flex-row pt-16">

        <div className="w-full md:w-1/2 bg-[#f2f2f2] min-h-[500px]" />
        <div className="w-full md:w-1/2 bg-[#00cc99] min-h-[500px] rounded-bl-[80px]" />


        <div className="absolute inset-0 flex justify-center items-center px-6 py-20 w-full">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-4 text-black">
                Search, Find, & Apply
              </h2>
              <p className="mb-10 text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>

              <div className="bg-white py-3 px-2 rounded-lg">
                <SearchBar />
              </div>
            </div>

       
            <div className="w-full md:w-1/2 relative">


         
              <div className="relative h-[300px] w-full">
                <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[20%] left-[15%] rotate-[15deg] w-[48px] h-[48px]">
                  <img src="/icons/img1.svg" alt="icon1" className="w-6 h-6" />
                </div>

                <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[50%] left-[60%] -rotate-[25deg] w-[58px] h-[58px]">
                  <img src="/icons/img2.svg" alt="icon2" className="w-[30px] h-[30px]" />
                </div>

                <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[70%] left-[30%] rotate-[35deg] w-[43px] h-[43px]">
                  <img src="/icons/img3.svg" alt="icon3" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
