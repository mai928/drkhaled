"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import circle from "../../../public/assets/section-icon.png";
import Image from "next/image";
import bg from "../../../public/assets/2-removebg.png";
import CustomButton from "../button/CustomButton";
import { useTranslation } from "react-i18next";
import plus from '../../../public/assets/plus-shap.png'
import start from '../../../public/assets/start-shap.png'
import DOMPurify from "isomorphic-dompurify";



const FetchToSlider = ({ data }) => {

    const { t, i18n } = useTranslation()
    return (
        <section className="relative">
            <Swiper
                loop={true}
                autoplay={{ delay: 5000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="mySwiper"
            >


                {data?.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div key={index} className="">
                            <div className="relative ">
                                <div>
                                    <img

                                        alt={item.alt_image}
                                        className="w-full h-[70vb] lg:h-[120vb] "
                                        src={`${item.image_path}/${item.slider_image}`}
                                    />
                                    <div className="absolute z-0  top-0 bottom-0 left-0 right-0 bg-white-400 bg-opacity-85"></div>
                                </div>
                            </div>

                            <Image className="hidden lg:block absolute start-20 top-20 plus-shap" src={plus} alt="plus" />
                            <Image className=" hidden lg:block  absolute end-20 top-36 plus-shap" src={start} alt="start" />
                            <div className="absolute w-full lg:w-1/2  start-0 top-8  lg:start-44 lg:top-52 ">
                                <div className="flex justify-center lg:justify-start items-center">
                                    <Image alt="alt" className="me-3" src={circle} />
                                    <h3 className="text-primary-500 font-semibold text-sm md:text-xl lg:text-2xl capitalize">
                                        {t(item.small_des)}
                                    </h3>
                                </div>

                                <div className="border-b-[1px] w-52 lg:w-[320px] border-primary-500 mt-1  m-auto  lg:ms-0" />
                                <h1 className=" w-[95%] text-xl md:text-3xl lg:text-6xl mt-5 lg:mt-10 leading-9 lg:leading-[5rem]    text-gray-900 font-bold   text-center lg:text-start">
                                    {t(item.title_image)}
                                </h1>

                                <div
                                    className="text-gray-500 mt-6 text-[13px] md:text-sm lg:text-[14px] lg:leading-6  text-center lg:text-start lg:w-[85%]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(item.des)) }}
                                />

                                <CustomButton route={t('/contact')} className={'w-36  md:w-48 lg:w-56 rounded-full'} textBtn={t("Contact Us")} />
                            </div>
                            <div className={` hidden lg:block  absolute  ${i18n.language === 'ar' ? 'lg:end-[-130px]' : 'lg:end-32'}  lg:w-1/2 lg:end-32 lg:top-28`}>
                                <Image alt="alt" className="w-full h-full" src={bg} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default FetchToSlider