"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header
                className="header-gradient flex items-center justify-between py-8 px-4 md:px-0 relative z-50 text-black"
            >

                <div className="flex items-center w-full md:w-auto md:space-x-8">


                    <h1 className="text-2xl font-bold whitespace-nowrap mx-auto md:mx-0">
                        Job<span className="text-[#00cc99]">NQW</span>
                    </h1>


                    <nav className="hidden md:flex space-x-6 font-medium ml-8">
                        <a href="#" className="hover:text-[#00cc99]">
                            Home
                        </a>
                        <a href="#" className="hover:text-[#00cc99]">
                            Job
                        </a>
                        <a href="#" className="hover:text-[#00cc99]">
                            About Us
                        </a>
                        <a href="#" className="hover:text-[#00cc99]">
                            Contact
                        </a>
                    </nav>
                </div>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden bg-[#00cc99] p-2 rounded-md w-10 h-10 flex flex-col justify-center items-center gap-[6px]"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    type="button"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                </button>


                <div className="hidden md:flex items-center justify-end space-x-4 w-full md:w-auto">
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
            </header>

            <style>{`
                @media (min-width:768px) {
                    .header-gradient{
                    background: linear-gradient(to right, #f2f2f2 50%, #00cc99 50%);
                    }
                  }
               ` }
            </style>


            {menuOpen && (
                <nav
                    id="mobile-menu"
                    className="md:hidden bg-[#f2f2f2] px-4 py-6 space-y-4 font-medium shadow-lg"
                >
                    <a
                        href="#"
                        className="block hover:text-[#00cc99]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block hover:text-[#00cc99]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Job
                    </a>
                    <a
                        href="#"
                        className="block hover:text-[#00cc99]"
                        onClick={() => setMenuOpen(false)}
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="block hover:text-[#00cc99]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-full bg-[#00cc99] text-white rounded-md py-2"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-full bg-white text-black rounded-md py-2 flex items-center justify-center gap-2"
                    >
                        <img
                            src="./icons/create-account.svg"
                            alt="create account"
                            className="w-5 h-5"
                        />
                        Create Account
                    </button>
                </nav>

            )}

        </>
    );
}
