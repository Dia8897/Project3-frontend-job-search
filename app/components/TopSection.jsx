import SearchBar from "./SearchBar";

export default function TopSection() {
  return (
    <section className="relative bg-[#f2f2f2] overflow-visible">
      <div className="container mx-auto px-0">
        <div className="grid w-full grid-cols-[0.75fr_auto]" style={{ fontFamily: 'Montserrat, sans-serif' }}>

          <div className="flex flex-col justify-between px-6 flex-1">
            <header className="flex justify-between items-center relative z-20 pb-20 ml-10 pt-15">
              <div className="flex items-center gap-[90px]">
                <h1 className="text-2xl font-bold text-black">
                  Job<span className="text-[#00cc99]">NQW</span>
                </h1>

                <nav className="space-x-[50px] text-black font-medium hidden md:flex justify-between">
                  <a href="#" className="hover:text-[#00cc99]">Home</a>
                  <a href="#" className="hover:text-[#00cc99]">Job</a>
                  <a href="#" className="hover:text-[#00cc99]">About Us</a>
                  <a href="#" className="hover:text-[#00cc99]">Contact</a>
                </nav>
              </div>
            </header>

            <div className="max-w-xl ml-10">
              <h2 className="text-4xl text-black font-extrabold mb-4">Search, Find, & Apply</h2>
              <p className="mb-10 text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere.
              </p>
              <div className="bg-white py-3 px-6 mb-20 rounded-lg">
                <SearchBar />
              </div>
            </div>
          </div>


          <div className="relative bg-[#00cc99] rounded-bl-[80px] px-8 pt-15 overflow-hidden">

            <div className="flex justify-end space-x-10 mb-10 mr-[50px]">
              <button className="text-white">Sign In</button>
              <button className="px-5 py-2 bg-white rounded-md text-black flex items-center gap-2">
                <img src="./icons/create-account.svg" className="w-5 h-5" />
                <p className="text-black">Create Account</p>
              </button>
            </div>

            <div
              className="absolute bg-white p-2 rounded-md"
              style={{
                top: "20%", left: "15%", transform: "rotate(15deg)",
                width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <img src="/icons/img1.svg" alt="icon1" style={{ width: "24px", height: "24px" }} />
            </div>

            <div
              className="absolute bg-white p-2 rounded-md"
              style={{
                top: "50%", left: "60%", transform: "rotate(-25deg)",
                width: "58px", height: "58px", display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <img src="/icons/img2.svg" alt="icon2" style={{ width: "30px", height: "30px" }} />
            </div>

            <div
              className="absolute bg-white p-2 rounded-md"
              style={{
                top: "70%", left: "30%", transform: "rotate(35deg)",
                width: "43px", height: "43px", display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <img src="/icons/img3.svg" alt="icon3" style={{ width: "20px", height: "20px" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
