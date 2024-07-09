import React from 'react'
import { fetchData } from 'utils/api';
import VideoWithPoster from '../../../components/videoWithPoster/VideoWithPoster'
import DOMPurify from "isomorphic-dompurify";
import initTranslations from '@/app/i18n';



export async function generateMetadata({ params }) {
    const { locale } = params
  
    return {
      title: locale === 'ar' ? ' الفيديوهات | دكتور خالدالنمرسي' : "videosّ| Dr Khaled Elnomrosy",
      description: locale === 'ar' ? "جميع الفديوهات الخاصة بأمراض الذكورة والتلقيح الصناعى وتحديد نوع الجنين متوفره في مركز دكتور خالد النمرسي " : "All videos related to andrology, artificial insemination and fetal gender determination are available at Dr. Khaled Al-Nomorsi Center",
      other: {
        title: locale === 'ar' ? ' الفيديوهات | دكتور خالدالنمرسي' : "videosّ| Dr Khaled Elnomrosy",
    }
  
    }
  }


const i18nNamespaces = ["home"];

const Video = async ({ params }) => {
    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces);


    const result = await fetchData('mdeia/media-group/get',locale);
    const videos = result?.data


    return (

     

            <section className='px-3 lg:px-32 pt-20'>
                <div className='text-center pb-10'>
                    <h1 className='text-4xl  text-secondary-500 font-semibold '>{t("TV Interviews")}</h1>

                    <div className='pt-4  text-md text-gray-500'>
                        {t("All videos related to andrology, artificial insemination and fetal gender determination are available at Dr. Khaled Al-Nomorsi Center")}
                    </div>

                </div>
                <div className="w-full h-full ">

                    {
                        videos?.map((item, index) => {
                            return (

                                <div key={index} className='block lg:flex gap-4'>
                                    {
                                        item?.videos?.map((vid, index) => (
                                            <div key={index} className={index % 2 === 0 ? 'w-full lg:w-[65%] mt-4 lg:mt-0' : 'lg:w-[35%] mt-4 lg:mt-0'}>
                                                <VideoWithPoster videoUrl={vid?.link} posterImage={`${item?.image_link}/${item?.image}`} text={vid?.name} />
                                            </div>
                                        ))
                                    }
                                </div>

                            )
                        })

                    }
                </div>


            </section>



    )
}

export default Video

