import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import circle from "../../../public/assets/section-icon.png";
import Image from "next/image";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import CustomButton from "../button/CustomButton";
import { useTranslation } from "react-i18next";
import { fetchData } from "utils/api";
import BlogCard from "../blogCard/BlogCard";
const Blogs = () => {


	const { t, i18n } = useTranslation()

	const [isHover, setHovered] = useState(false);
	const [Id, setID] = useState("");

	const handleHoverOn = (id) => {
		setHovered(true);
		setID(id);
	};

	const breakpoints = {
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
	};


	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDataFromAPI = async () => {
			try {
				const result = await fetchData('cms/get', i18n.language);
				setData(result?.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error);
			}
		};

		fetchDataFromAPI();
	}, []);

	// if (error) {
	// 	return <div>Error loading data</div>;
	// }

	// if (!data) {
	// 	return <div>Loading...</div>;
	// }



	return (
		<section className="py-10 lg:py-28 ">
			<div>
				<div className="py-5 text-center ">
					<div className="flex  justify-center items-center gap-2 mb-3">
						<Image alt="alt" src={circle} />

						<p className="text-primary-500 font-bold  text-base lg:text-xl">
							{t("OUR FEATURES US")}
						</p>
						<Image alt="alt" src={circle} />
					</div>

					<h3 className="text-secondary-500 text-xl  lg:text-4xl font-bold my-5">
						{t("The important Blogs")}
					</h3>
				</div>

				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					breakpoints={breakpoints}
					autoplay={{ delay: 4000 }}
					loop={true}
					modules={[Navigation, Autoplay, Pagination]}

				>
					{data?.map((item, index) => (
						<SwiperSlide key={index} className="px-5 mt-5">
							<div
								onMouseMove={() => handleHoverOn(item.name)}
								onMouseOut={() => setHovered(false)}
								className={` border-[1px] ${isHover && Id === item.name ? "bg-white-300" : ""
									} border-white-300 rounded-xl `}
								key={index}
							>
								<BlogCard style={'start-[25%]'} item={item} isHover={isHover} Id={Id} index={index} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex justify-center ">
					<CustomButton route={'/blogs'} className={'w-36  md:w-48 lg:w-56 rounded-full'} textBtn={t("Show More")} />
				</div>
			</div>
		</section>
	);
};

export default Blogs;
