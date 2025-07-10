"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function TestimonialSlider() {
    const [textSwiper, setTextSwiper] = useState(null);
    const [imageSwiper, setImageSwiper] = useState(null);

    const testimonials = [
        {
            name: 'Jean Garcia',
            role: 'Data Scientist at Google',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'Jean’s Img',
            prg: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas"
        },
        {
            name: 'Alex Kim',
            role: 'UX Designer at Spotify',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'Alex’s Img',
            prg: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas"
        },
        {
            name: 'Sara Lee',
            role: 'Marketing Manager at Airbnb',
            desc: 'User-friendly and efficient. Highly recommended!',
            img: 'Sara’s Img',
            prg: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas"
        },
    ];

    return (
        <section className="container mx-auto py-16 px-4 text-left mb-6">
            <h2 className="text-3xl font-semibold mb-8 text-black">
                People’s Feedback about JobNow!
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-stretch">

                <div className="w-full md:w-1/2">
                    <Swiper
                        modules={[Navigation, Controller]}
                        onSwiper={setTextSwiper}
                        controller={{ control: imageSwiper }}
                        navigation={{
                            nextEl: '.swiper-custom-next',
                            prevEl: '.swiper-custom-prev',
                        }}
                        loop
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <p className="text-[#8a8a8a] text-lg mb-6">{t.desc}</p>
                                <p className="text-black text-lg font-semibold mb-4">{t.prg}</p>
                                <h4 className="text-xl font-semibold text-black">{t.name}</h4>
                                <span className="text-sm text-[#767373]">{t.role}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <div className="flex gap-4 mt-6">
                        <button className="swiper-custom-prev w-12 h-12 rounded-full bg-[#00cc99] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                            <img className="w-3/4 h-full" src="/icons/Left-arrow.png" />
                        </button>
                        <button className="swiper-custom-next w-12 h-12 rounded-full bg-[#00cc99] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                            <img className="w-3/4 h-full" src="/icons/Right-arrow.png" />
                        </button>
                    </div>
                </div>


                <div className="w-full h-full">
                    <Swiper
                        modules={[Controller]}
                        onSwiper={setImageSwiper}
                        controller={{ control: textSwiper }}
                        allowTouchMove={false}
                        loop
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-h-[300px] max-w-xl h-full md:w-1/2 rounded-xl bg-[#00cc99] flex justify-center text-black text-xl">
                                    {t.img}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
