export default function Categories() {
    return (
        <section className="bg-[rgba(0,204,153,0.051)]">
            <div className="container mx-auto">

                <div className="flex flex-col items-center justify-center py-10 gap-6 text-center">
                    <h1 className="text-black font-bold text-3xl">Popular Job Categories</h1>
                    <p className="text-[#8a8a8a] max-w-5xl">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                        faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                        mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                        urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                        egestas
                    </p>
                </div>

                <div className="  pr-5 flex flex-wrap gap-5">

                    <div className="group bg-white rounded-[50px] flex flex-col items-center justify-center gap-4 py-10 px-8 flex-1 min-w-[220px] min-h-[220px] shadow-md transition-all duration-300 hover:bg-[#00cc99]">
                        <img
                            src="/icons/Design.svg"
                            alt="Design Icon"
                            className="w-12 h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        <h1 className="text-black font-semibold group-hover:text-white">
                            Design and Development
                        </h1>
                        <p className="text-[#8a8a8a] group-hover:text-white">350 Job vacancy</p>
                    </div>


                    <div className="group bg-white rounded-[50px] flex flex-col items-center justify-center gap-4 py-10 px-8 flex-1 min-w-[220px] min-h-[220px] shadow-md transition-all duration-300 hover:bg-[#00cc99]">
                        <img
                            src="/icons/Accounting.svg"
                            alt="Accounting Icon"
                            className="w-12 h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        <h1 className="text-black font-semibold group-hover:text-white">
                            Accounting and Finance
                        </h1>
                        <p className="text-[#8a8a8a] group-hover:text-white">350 Job vacancy</p>
                    </div>


                    <div className="group bg-white rounded-[50px] flex flex-col items-center justify-center gap-4 py-10 px-8 flex-1 min-w-[220px] min-h-[220px] shadow-md transition-all duration-300 hover:bg-[#00cc99]">
                        <img
                            src="/icons/Bank.svg"
                            alt="Bank Icon"
                            className="w-12 h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        <h1 className="text-black font-semibold group-hover:text-white">
                            Bank Institution
                        </h1>
                        <p className="text-[#8a8a8a] group-hover:text-white">350 Job vacancy</p>
                    </div>


                    <div className="group bg-white rounded-[50px] flex flex-col items-center justify-center gap-4 py-10 px-8 flex-1 min-w-[220px] min-h-[220px] shadow-md transition-all duration-300 hover:bg-[#00cc99]">
                        <img
                            src="/icons/Product-management.svg"
                            alt="Product Management Icon"
                            className="w-12 h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        <h1 className="text-black font-semibold group-hover:text-white">
                            Product Management
                        </h1>
                        <p className="text-[#8a8a8a] group-hover:text-white">350 Job vacancy</p>
                    </div>
                </div>


                <div className="flex items-center justify-center mt-10">
                    <button className="px-5 py-2 border border-[#00cc99] rounded-lg shadow-md text-[#00cc99] font-semibold transition-all duration-300 hover:bg-[#00cc99] hover:text-white">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
}
