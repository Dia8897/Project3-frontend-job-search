export default function About() {
    return (
        <section className="container mx-auto flex flex-col mx-auto md:flex-row px-15 py-10 justify-between items-center gap-10">
            <img src="./icons/about.png" alt="logo" className="w-1/2" />
            <div>
                <h1 className="text-black font-bold text-4xl mb-5">
                    We Will Help You Become an Employee in your Dream Compagny
                </h1>
                <p className="text-[#8a8a8a] mb-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor.Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                    Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
                <button className="px-5 py-2 border border-[#00cc99] rounded-lg shadow-md text-[#00cc99] font-semibold">
                    Learn More
                </button>
            </div>
        </section>
    );
}