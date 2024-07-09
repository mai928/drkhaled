import React from 'react'
import Image from 'next/image'
import circle from '../../../../public/assets/section-icon.png'
import initTranslations from '@/app/i18n'
import CustomButton from '@/components/button/CustomButton'
import DOMPurify from "isomorphic-dompurify";
import { fetchData } from 'utils/api'





export async function generateMetadata({ params }) {
  const { locale } = params

  return {
    title: locale === 'ar' ? 'الخدمات | دكتور خالد النمرسي' : "Services | Dr Khaled Elnomrosy",
    description: locale === 'ar' ? "جميع الخدمات الخاصة بأمراض الذكورة والتلقيح الصناعى وتحديد نوع الجنين متوفره في مركز دكتور خالد النمرسي " : "All services related to andrology, artificial insemination and fetal gender determination are available at Dr. Khaled Al-Nomorsi Center",
    other: {
      title: locale === 'ar' ? 'الخدمات | دكتور خالد النمرسي' : "Services | Dr Khaled Elnomrosy",
    }

  }
}

const i18nNamespaces = ["home"];

const Services = async ({ params }) => {

  const truncateText = (text, wordCount) => {
    return text?.split(' ').slice(0, wordCount).join(' ') + '...';
  };

  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)



  const data = await fetchData('services/get', locale);



  const services = data?.data


  return (

    <section className="px-5 lg:px-32 pb-10 lg:pb-28 pt-20 ">


      <div className='block lg:flex gap-10 '>

        <div className='m-auto'>
          <div className='flex items-center gap-3 mt-10 lg:mt-0 '>
            <Image alt="alt" src={circle} />
            <h1 className='text-primary-500 text-lg font-semibold '>{t("The Services")}</h1>
            <Image alt="alt" src={circle} />

          </div>


        </div>
      </div>

      <div className='text-center pt-14'>

        <div className="flex flex-wrap -mx-4">
          {services?.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <img className='w-full h-full rounded-md' alt={`${item.alt_image}`} src={`https://khcan.elnomrosyivf.com/public/uploads/images/service/${item?.image}`} />
                  <h2 className="text-xl font-bold mb-2 mt-4">{item.name}</h2>
                  <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(item.des, 20))) }} />

                  <CustomButton route={`/services/${encodeURIComponent(item.slug)}`} textBtn={t('Read More')} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>

  )
}

export default Services