export default function About() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row  py-16 justify-between items-center gap-16 px-3">

            <div className="bg-[#8a8a8a] w-full md:w-1/2 rounded-lg min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"></div>


            <div className="w-full md:w-1/2">
                <h1 className="text-black font-bold text-4xl mb-5">
                    We Will Help You Become an Employee in your Dream Company
                </h1>
                <p className="text-[#8a8a8a] mb-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                    Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
                <button className="px-5 py-2 border border-[#00cc99] rounded-md shadow-md text-[#00cc99] font-semibold cursor-pointer hover:bg-[#00cc99] hover:text-white transition-all duration-300 ease-in-out">
                    Learn More
                </button>
            </div>
        </section>
    );
}
