"use client";

import { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RecentlyAdded() {
    const [wrapperWidth, setWrapperWidth] = useState("100vw");

    useEffect(() => {
        function handleResize() {
            const vw = window.innerWidth;
            if (vw >= 1280) {
                setWrapperWidth(`calc(100vw - ((100vw - 1280px) / 2))`);
            } else {
                setWrapperWidth("100vw");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards = [
        {
            icon: "/icons/Amazon.svg",
            title: "Design and Development",
            subtitle: "Amazon",
            desc: "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
            location: "Washington, USA"
        },
        {
            icon: "/icons/Google.svg",
            title: "Full Stack Development",
            subtitle: "Google",
            desc: "Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
            location: "California, USA"
        },
        {
            icon: "/icons/Apple.svg",
            title: "Software Development",
            subtitle: "Apple",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. ",
            location: "California, USA"
        },
    ];

    return (
        <>

            <section className="container mx-auto relative">

                <div className="flex flex-col items-center justify-center py-10 gap-6 text-center">
                    <h1 className="text-black font-bold text-5xl">Recently Added Jobs</h1>
                    <p className="text-[#8a8a8a] max-w-5xl">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                    </p>
                </div>


                <div className="relative" style={{ width: wrapperWidth }}>
                    <Swiper
                        spaceBetween={20}
                        pagination={false}
                        modules={[]}
                        className="w-full"
                        slidesPerView={4}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="group w-full bg-white rounded-[50px] flex flex-col items-start justify-center gap-4 py-10 px-8 min-h-[220px] transition-all duration-300">
                                    <img
                                        src={card.icon}
                                        alt={`${card.title} Icon`}
                                        className="w-12 h-12 transition-all duration-300"
                                    />

                                    <h1 className="text-black font-semibold text-left w-full">{card.title}</h1>
                                    <p className="text-[#8a8a8a] text-left w-full">{card.subtitle}</p>
                                    <p className="text-[#8a8a8a] text-left w-full">{card.desc}</p>

                                    <div className="flex gap-3 w-full">
                                        <button className="flex bg-[#f9f9f9] gap-2 rounded-md px-5 py-3 items-center">
                                            <img src="icons/Location.svg" />
                                            <p className="text-black">{card.location}</p>
                                        </button>

                                        <button className="flex bg-[#f9f9f9] gap-2 rounded-md px-5 py-3 items-center">
                                            <img src="icons/Full-time.png" />
                                            <p className="text-black">Full Time</p>
                                        </button>
                                    </div>

                                    <button className="group mt-4 text-left">
                                        <span className="flex items-center gap-2 text-[#00cc99] font-semibold group-hover:text-[#00cc70]">
                                            Apply Now <span className="text-xl font-bold">›</span>
                                        </span>
                                    </button>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>


                <div className="flex items-center justify-center mt-10">
                    <button className="px-5 py-2 border border-[#00cc99] rounded-md shadow-md text-[#00cc99] font-semibold cursor-pointer">
                        View More
                    </button>
                </div>
            </section>
        </>
    );
}
