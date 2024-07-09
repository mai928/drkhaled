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
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";


const ServicesComponent = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

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
                const result = await fetchData('services/get', i18n.language);
                setData(result?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            }
        };

        fetchDataFromAPI();
    }, []);

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
                        {t("Experts in Every Aspect Service")}
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
                        <SwiperSlide key={index} className=" mt-5">

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <img className='w-full h-full rounded-md' alt={`${item.alt_image}`} src={`https://khcan.elnomrosyivf.com/public/uploads/images/service/${item?.image}`} />
                                    <h2 className="text-xl font-bold mb-2 mt-4">{item.name}</h2>
                                    <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(item.des, 20))) }} />

                                    <Link href={`/services/${encodeURIComponent(item.slug)}`} className={'rounded-lg py-4 font-semibold hover:text-primary-500'} >{t('Read More')}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center ">
                    <CustomButton route={'/services'} className={'w-36  md:w-48 lg:w-56 rounded-full'} textBtn={t("Show More")} />
                </div>
            </div>
        </section>
    );
}

export default ServicesComponent






