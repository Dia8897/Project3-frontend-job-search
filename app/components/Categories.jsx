"use client";

import { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
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
            icon: "/icons/Design.svg",
            title: "Design and Development",
            subtitle: "350 Job vacancy",
        },
        {
            icon: "/icons/Accounting.svg",
            title: "Accounting and Finance",
            subtitle: "350 Job vacancy",
        },
        {
            icon: "/icons/Bank.svg",
            title: "Bank Institution",
            subtitle: "350 Job vacancy",
        },
        {
            icon: "/icons/Product-management.svg",
            title: "Product Management",
            subtitle: "350 Job vacancy",
        },
        {
            icon: "/icons/Product-management.svg",
            title: "Product Management",
            subtitle: "350 Job vacancy",
        }
    ];

    return (
        <>
            <section className="bg-[rgba(0,204,153,0.051)] py-12">
                <div className="container mx-auto relative">
                    <div className="flex flex-col items-center justify-center py-10 gap-6 text-center">
                        <h1 className="text-black font-bold text-3xl">
                            Popular Job Categories
                        </h1>
                        <p className="text-[#8a8a8a] max-w-5xl">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit...
                        </p>
                    </div>

                    <div className="relative" style={{ width: wrapperWidth }}>
                        <Swiper
                            spaceBetween={20}
                            simulateTouch={true}
                            pagination={false}
                            modules={[]}
                            className="w-full"
                            slidesPerView={4.5}
                            centeredSlides={false}
                            breakpoints={{
                                320: { slidesPerView: 1.2 },
                                640: { slidesPerView: 1.5 },
                                768: { slidesPerView: 2.5 },
                                1024: { slidesPerView: 3.5 },
                                1280: { slidesPerView: 4.5 },
                                1440: { slidesPerView: 5 },
                            }}
                        >
                            {cards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group w-full bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 px-8 min-h-[220px] transition-all duration-300 hover:bg-[#00cc99]">
                                        <img
                                            src={card.icon}
                                            alt={`${card.title} Icon`}
                                            className={`w-12 h-12 transition-all duration-300 ${index === 0
                                                ? "icon-green"
                                                : "group-hover:brightness-0 group-hover:invert"
                                                }`}
                                        />
                                        <h1 className="text-black font-semibold group-hover:text-white">
                                            {card.title}
                                        </h1>
                                        <p className="text-[#8a8a8a] group-hover:text-white">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="flex items-center justify-center mt-10">
                        <button className="px-5 py-2 border border-[#00cc99] rounded-md shadow-md text-[#00cc99] font-semibold cursor-pointer hover:bg-[#00cc99] hover:text-white">
                            View More
                        </button>
                    </div>
                </div>
            </section>

            <style>{`
        .icon-green {
  filter: invert(62%) sepia(68%) saturate(3650%) hue-rotate(145deg) brightness(96%) contrast(88%);
  transition: filter 0.3s;
}

.group:hover .icon-green {
  filter: brightness(0) invert(1); /* white on hover */
}
        `}</style>
        </>
    );
}
