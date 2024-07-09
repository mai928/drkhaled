"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../../public/assets/team1.jpg";
import circle from "../../../public/assets/section-icon.png";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect CSS
import Link from "next/link";

const Team = () => {
	const members = [
		{
			id: 1,
			name: "Dr.Khaled",
			img: team1,
			specialist: "Plastic Surgery",
		},
		{
			id: 2,
			name: "Dr.Hala",
			img: team1,
			specialist: "Plastic Surgery",
		},
		{
			id: 3,
			name: "Dr.Nermeen",
			img: team1,
			specialist: "Plastic Surgery",
		},
		{
			id: 4,
			name: "Dr.Asmaa",
			img: team1,
			specialist: "Plastic Surgery",
		},
		{
			id: 5,
			name: "Dr.Rania",
			img: team1,
			specialist: "Plastic Surgery",
		},
		{
			id: 6,
			name: "Dr.Doaa",
			img: team1,
			specialist: "Plastic Surgery",
		},
	];

	const breakpoints = {
		1024: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 60,
		},

		320: {
			slidesPerView: 1,
			spaceBetween: 40
		},
	};





	return (
		<section className=" px-5 md:px-16 lg:px-32 text-center py-10">
			<div className="py-10">
				<div className="flex  justify-center items-center gap-2 mb-3">
					<Image alt="alt" src={circle} />

					<p className="text-primary-500 font-bold text-base lg:text-xl ">
						Our Team
					</p>
					<Image alt="alt" src={circle} />
				</div>

				<h3 className="text-xl text-secondary-500 font-bold lg:text-4xl">

					Meet Better The Team Doctor
				</h3>
			</div>

			<Swiper
				slidesPerView={4}
				breakpoints={breakpoints}
				autoplay={{ delay: 2000 }}
				loop={true}
				modules={[Navigation, Autoplay, Pagination]}
			>
				{members.map((item) => (
					<SwiperSlide key={item.id} className="relative py-28">
						<div className=" py-32 w-[280px] lg:w-[285px] rounded-md border-gray-200 border-[1px] z-[-10px]  hover:bg-gray-200 m-auto ">
							<div className="absolute  min-w-[240px]   lg:min-w-[240px] rounded-md top-0 left-10 lg:left-6 z-10  ">
								<Image alt="alt" className=" w-full h-full " src={item.img} />
								<div className="teamContent">
									<p className="text-center my-3 text-secondary-500 text-2xl font-bold mt-5">
										{item.name}
									</p>
								</div>
								<p className="text-gray-500">{item.specialist}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

	
		</section>
	);
};

export default Team;
