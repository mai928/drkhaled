
import { fetchData } from 'utils/api';
import React from 'react';
import initTranslations from '@/app/i18n';
import { title } from 'process';


function removeEmptyPTags(str) {
  return str.replace(/<\/?(em|p|br|ul|li|a|span|strong|u)[^>]*>|&nbsp;/g, '');
}


export async function generateMetadata({ params }) {
  const { locale } = params;

  const product = await fetchData('about-us/get', locale)
  let response = product.data[0]


  let cleanedTitle = removeEmptyPTags(response?.meta_title)
  let cleanedDescription = removeEmptyPTags(response?.meta_des);
  let titleRemoved = removeEmptyPTags(response?.meta_title)


  return {
    title: cleanedTitle,
    description: cleanedDescription,
    other: {
      title: titleRemoved
    }

  }
}





const About = async ({ params }) => {
  const i18nNamespaces = ["home"];

  function processText(text) {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <div className='flex ' key={index}>
        {index < lines.length - 1 && line.trim() && (
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} className='fill-primary-500 me-4 mt-4' viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
          </span>
        )}
        <div className='text-start my-1'> {line}
        </div>

      </div>
    ));
  }



  const { locale } = params;
  const { t } = await initTranslations(locale, i18nNamespaces);


  const result = await fetchData('about-us/get', locale);
  const response = result.data[0]

  // console.log(response)
  const img = response?.photo
  let alt = response?.alt_image
  const name = response?.name
  const des = response?.des





  return (

    <section className='px-2 lg:px-32 py-32'>
      <div className='block lg:flex w-full justify-center items-center gap-32 '>
        <div className='lg:w-1/4 flex'>
          <div className=' bg-[#d7e1ea] rounded-full w-72 lg:w-80   '>
            <img className='m-auto mt-10 ' alt={alt} src={`${response.photo}`} />
          </div>

        </div>
        <div className='lg:w-3/4'>
          <h1 className='font-bold text-secondary-500 text-2xl lg:text-4xl my-4 text-center  lg:text-start'>{t(name)}</h1>

          <ul className='m-auto text-center'>
            <div>

              <li className='flex  items-center gap-4'>
                <div className='text-md text-gray-500 my-2' >{processText(removeEmptyPTags(t(response?.des)))}</div>
              </li>
            </div>




          </ul>



        </div>
      </div>

    </section >




  )
}

export default About