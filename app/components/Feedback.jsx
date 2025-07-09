"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

export default function TestimonialSlider() {
    return (
        <section className="container mx-auto py-12 px-4 text-left">
            <h2 className="text-3xl  font-semibold mb-8 text-black">
                People’s Feedback about JobNow!
            </h2>

            <Swiper modules={[Navigation]} loop className="w-full"
                navigation={{
                    nextEl: '.swiper-custom-next',
                    prevEl: '.swiper-custom-prev',
                }}
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-center gap-12 px-4 ">
                            <div className="w-full md:w-1/2">
                                <p className="text-[#8a8a8a] text-lg mb-6"> {t.desc}</p>
                                <p className="text-black text-lg font-semibold mb-4">{t.prg}</p>
                                <h4 className="text-xl font-semibold text-black">{t.name}</h4>
                                <span className="text-sm text-[#767373]">{t.role}</span>
                                <div className="flex gap-4 mt-6">
                                    <button className="swiper-custom-prev w-10 h-10 rounded-full bg-[#00cc99] text-white font-extrabold text-3xl transform duration-300 transform-gpu"
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateZ(20px)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateZ(0px)"}
                                    >
                                        &#8592;
                                    </button>
                                    <button className="swiper-custom-next w-10 h-10 rounded-full bg-[#00cc99] text-white text-3xl font-extrabold transform duration-300 transform-gpu"
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateZ(20px)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateZ(0px)"}
                                    >
                                        &#8594;
                                    </button>

                                </div>
                            </div>

                            <div className="w-48 h-48 rounded-lg bg-[#00cc99] text-black flex justify-center text-center>">
                                {t.img}

                            </div>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
