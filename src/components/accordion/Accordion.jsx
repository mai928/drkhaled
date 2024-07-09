'use client'
import React, { useEffect, useState } from 'react'
import circle from "../../../public/assets/section-icon.png";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { fetchData } from 'utils/api';
import DOMPurify from "isomorphic-dompurify";



const Accordion = () => {
    const [isOpen, setOpen] = useState(false)
    const [ID, setID] = useState(null)

    const { t ,i18n } = useTranslation()


    const handleClick = (id) => {
        setOpen(!isOpen)
        setID(id)
    }



    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const result = await fetchData('faq/get',i18n.language);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            }
        };

        fetchDataFromAPI();
    }, []);


    const img = data?.data?.main_faq.image_link
    const img_name = data?.data?.main_faq.image
    const alt = data?.data?.main_faq.alt_image

    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <section className='px-2 lg:px-32  mt-20 pb-24'>
            <div className='text-center pb-10 text-4xl font-bold text-secondary-500'>



                <div className="flex  justify-center items-center gap-2 mb-3">
                    <Image alt="alt" src={circle} />

                    <p className="text-primary-500 font-bold text-base lg:text-xl ">
                        {t("People also ask")}
                    </p>
                    <Image alt="alt" src={circle} />
                </div>

                <h1 className="text-xl text-secondary-500 font-bold lg:text-4xl">

                    {t("Frequently Asked Questions")}
                </h1>

            </div>

            <div className={` block lg:flex gap-14  py-10  ${isOpen && 'min-h-[40rem]'} min-h-96 `}>

                <div className={`w-full lg:w-[50%]`}> {
                    data?.data?.faqs?.map((item, index) => (
                        <div key={index} className='w-full border-t-[1px] border-gray-300 py-4'>
                            <button onClick={() => handleClick(index)} className='flex  w-full items-center justify-between'>
                                <div className='font-semibold text-lg' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(item.question)) }} />


                                <div className="  focus:outline-none   "
                                >
                                    {
                                        isOpen && index === ID ?
                                            (
                                                <div className='p-3 bg-gray-300 rounded-full  transition-transform transform rotate-180'>

                                                    <svg width={15} height={15} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                                </div>

                                            )
                                            :
                                            (
                                                <div className='p-3 bg-primary-500 rounded-full  transition-transform transform rotate-0'>
                                                    <svg width={15} height={15} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                                </div>

                                            )
                                    }

                                </div>
                            </button>


                            {
                                isOpen && index === ID && <div className='transition-transform transform rotate-0'>
                                    <div className='text-md text-gray-600 py-4  overflow-hidden transition-all duration-[3500ms] transform scale-100 ease-in-out   ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(item.answer)) }} />
                                </div>
                            }
                        </div>

                    ))
                }
                </div>



                <div className='w-full lg:w-[50%] relative'>
                    <img className=' rounded-sm w-[80%] ' alt={alt} src={`${img}/${img_name}`} />
                    <img alt={alt} className='absolute rounded-sm top-[50%] start-[35%] hidden lg:block w-[70%]' src={`${img}/${img_name}`} />
                    <Link href={`tel:+012237624281`} className='absolute top-[85%] lg:top-[80%] start-[10%] px-7 lg:px-14 py-3 lg:py-5 rounded-sm  bg-secondary-500 text-white-300 font-bold text-lg '>Call : +012237624281</Link>
                </div>




            </div>


        </section>
    )
}

export default Accordion