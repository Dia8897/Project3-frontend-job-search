"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";

export default function TopSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="top-section relative w-full overflow-visible">
        <div className="container mx-auto">
          <Header />

          <div className="grid grid-cols-1 md:grid-cols-[50%_50%] min-h-[500px]  items-center ">
            <div className="md:bg-[#f2f2f2] bg-white md:mr-10 p-5 text-center md:text-left">
              <h2 className="text-4xl font-extrabold mb-4 text-black">
                Search, Find, & Apply
              </h2>
              <p className="mb-10 text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>
              <div className="bg-white py-3 px-6 rounded-lg">
                <SearchBar />
              </div>
            </div>

            <div className="relative min-h-[300px] w-full h-full bg-[#00cc99]  md:rounded-bl-[70px] overflow-visible relative">
              <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[20%] left-[15%] rotate-[15deg] w-[48px] h-[48px]">
                <img src="/icons/img1.svg" alt="icon1" className="w-6 h-6" />
              </div>

              <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[50%] left-[60%] -rotate-[25deg] w-[58px] h-[58px]">
                <img
                  src="/icons/img2.svg"
                  alt="icon2"
                  className="w-[30px] h-[30px]"
                />
              </div>

              <div className="absolute bg-white p-2 rounded-md flex items-center justify-center top-[70%] left-[30%] rotate-[35deg] w-[43px] h-[43px]">
                <img src="/icons/img3.svg" alt="icon3" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-0 right-0 w-1/2 h-[80px] bg-[#00cc99] rounded-bl-[80px] z-10" /> */}
      </section>
      <style>{`
        .top-section {
          background: #f2f2f2;
        }
        @media (min-width: 768px) {
          .top-section {
            background: linear-gradient(to right, #f2f2f2 60%, #00cc99 40%);
          }

         
        }
      `}</style>
    </>
  );
}
