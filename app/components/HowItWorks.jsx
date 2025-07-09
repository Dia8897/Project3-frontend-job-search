export default function HowItWorks() {
    const steps = [
        { title: "Register", icon: "./icons/register.svg", paragraph: "Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis." },
        { title: "Create a Resume", icon: "./icons/create.svg", paragraph: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae." },
        { title: "Find Job", icon: "./icons/find.svg", paragraph: "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas." },
        { title: "Apply Job", icon: "./icons/apply.svg", paragraph: "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas." },
    ];

    return (
        <section className="py-20 container mx-auto px-3">
            <h3 className="text-3xl font-bold mb-4 text-black">How it works</h3>
            <div className="flex justify-between items-center">
                <p className="text-gray-600 max-w-2xl mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                </p>
                <button className="hidden md:block px-5 py-2 border border-[#00cc99] rounded-md shadow-md text-[#00cc99] font-semibold cursor-pointer hover:bg-[#00cc99] hover:text-white transition duration-300 ease-in-out">
                    Learn More
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                        <div className="text-4xl mb-3">
                            <img src={step.icon} />
                        </div>
                        <h4 className="font-semibold text-black mb-2">{step.title}</h4>
                        <p className="text-[#8a8a8a] text-sm"> {step.paragraph}</p>
                    </div>
                ))}
            </div>
            <button className="md:hidden px-5 py-2 border border-[#00cc99] rounded-md shadow-md text-[#00cc99] font-semibold cursor-pointer hover:bg-[#00cc99] hover:text-white transition duration-300 ease-in-out">
                Learn More
            </button>
        </section>
    );
}
