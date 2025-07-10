import Register from "./Register"
export default function Footer() {
    return (
        <footer className="relative bg-[##ededed] pt-20 mt-20">

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-7xl">  <Register /></div>


            <div className="bg-[#00cc99]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-10 py-20 gap-10">

                    <div>
                        <p className="text-black text-4xl font-extrabold mb-4">
                            Job<span className="text-white">NQW</span>
                        </p>
                        <p className="text-white text-sm max-w-md">
                            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                            hendrerit semper vel class aptent taciti sociosqu.
                        </p>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold text-xl mb-4">Compagny</h1>
                        <div className="text-sm">
                            <p>Address: 123 Fifth Avenue, New York - 1060, USA</p>
                            <p>Call Us: +(1600) 456 7890</p>
                            <p>Email: yourid@example.com</p>
                            <p>Mon Sat: 9:00 AM - 19:00 PM</p>
                        </div>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold text-xl mb-4"> Pages</h1>
                        <ul className="space-y-1 text-sm">
                            <li>Home</li>
                            <li>Booking</li>
                            <li>Facilities</li>
                            <li>About Us</li>
                            <li>Location</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold text-xl mb-4"> Contact Us</h1>
                        <div className="flex gap-3">
                            <img src="icons/Google-footer.svg" />
                            <img src="icons/Facebook-footer.svg" />
                            <img src="icons/Twitter-footer.svg" />
                            <img src="icons/LinkedIn-footer.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}