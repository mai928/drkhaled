import Image from 'next/image';
import React from 'react'
import bgBlog from '../../../../public/assets/bg-slider3.jpg'
import circle from '../../../../public/assets/section-icon.png'
import { fetchData } from "utils/api";
import BlogsParts from '../../../components/blogsParts/BlogsParts';
import initTranslations from '@/app/i18n';



export async function generateMetadata({ params }) {
    const { locale } = params

    return {
        title: locale === 'ar' ? 'المقالات | دكتور خالد النمرسي' : "Blogs | Dr Khaled Elnomrosy",
        description: locale === 'ar' ? "مقالات دكنور خالد النمرسي" : "blogs for dr khaled elnomrousy",
        other: {
            title: locale == 'ar' ? 'المقالات | دكتور خالد النمرسي' : "Blogs | Dr Khaled Elnomrosy"
        }

    }
}



const BlogsCatagory = async ({ params }) => {
    const i18nNamespaces = ["home"];

    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces)



    const Blogs = await fetchData('cms/get', locale)
    const data = Blogs?.data

    return (

            <section className="px-5 lg:px-32 pb-10 lg:pb-28 pt-20 ">


                <div className='block lg:flex gap-10 '>
                    <div className='w-full lg:w-1/2'>
                        <Image alt='img' className='rounded-lg' src={bgBlog} />

                    </div>

                    <div className=' w-full lg:w-1/2 mt-10'>
                        <div className='flex items-center gap-3 mt-10 lg:mt-0 '>
                            <Image alt="alt" src={circle} />
                            <h1 className='text-primary-500 text-lg font-semibold '>{t("The Blogs")}</h1>
                            <Image alt="alt" src={circle} />

                        </div>

                        <h3 className='text-secondary-500  text-lg lg:text-3xl font-bold lg:font-semibold  py-4 lg:leading-relaxed'>{t("Looking for the Most Recent")} <span className='text-primary-500'>{t("Topics")}</span><br /> {t("Discussed ?We Got you")} <br /> <span className='text-primary-500'>{t("Covered")}</span>{locale === 'en' ? "100%" : ''} </h3>

                    </div>
                </div>

                <div className='text-center pt-14'>


                    <BlogsParts data={data} />
                </div>

            </section>


    )
}

export default BlogsCatagory