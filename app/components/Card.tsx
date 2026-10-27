"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideCards } from "../data/slideData";

import "./Card.css"

export default function Card() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop
            pagination={{ clickable: true }}
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="card-swiper"
        >
            {slideCards.map((card) => (
                <SwiperSlide key={card.id} className="h-auto">

                    <div className="card">
                        <img src={card.imageSrc} alt={card.title} />
                        <div className="card-text">
                            <p className="card-title">{card.title}</p>
                            <h3>{card.descripton}</h3>
                            <p>🗓️{card.data} ● 💬{card.comments}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}