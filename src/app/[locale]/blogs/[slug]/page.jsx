
import Image from 'next/image'
import React from 'react'
import DOMPurify from "isomorphic-dompurify";
import initTranslations from '@/app/i18n';



export async function generateMetadata({ params }) {

  function removeEmptyPTags(str) {
    return str?.replace(/<\/?(em|p|br|ul|li|a|span|strong|u)[^>]*>|&nbsp;/g, '');
  }

  const slug = params?.slug

  // console.log("blog slug => ", params.slug)
  const slugDecoding = decodeURIComponent(slug)

  const myHeaders = new Headers();
  myHeaders.append("lang", params.locale);

  const formdata = new FormData();
  formdata.append("slug", slugDecoding);

  // const requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: "follow"
  // };


  const res = await fetch(`https://khcan.elnomrosyivf.com/api/cms/cms_details/get`, {
    method: "POST",
    headers: myHeaders,
    cache: 'no-store',
    body: formdata,
    redirect: "follow"
  });

  const data = await res.json()
  const filteredBlog = data.data
  // const stripTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  return {
    title: removeEmptyPTags(filteredBlog?.meta_title),
    description: removeEmptyPTags(filteredBlog?.meta_des),
    other: {
      title: removeEmptyPTags(filteredBlog?.meta_title)
    }

  }

}



const i18nNamespaces = ["home"];

const BlogDetails = async ({ params }) => {
  let locale = params.locale

  const { t } = await initTranslations(locale, i18nNamespaces);


  const slug = params?.slug

  const slugDecoding = decodeURIComponent(slug)

  const myHeaders = new Headers();
  myHeaders.append("lang", params.locale);

  const formdata = new FormData();
  formdata.append("slug", slugDecoding);


  // const requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: "follow"
  // };


  const res = await fetch(`https://khcan.elnomrosyivf.com/api/cms/cms_details/get`, {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    cache: 'no-store',
    redirect: "follow"
  });
  const data = await res.json()
  const filteredBlog = data?.data



  return (
    <section className='px-3 lg:px-32 py-10'>
      {
        <div className=' block lg:flex gap-10'>
          <div className=' lg:w-[50%]  text-center lg:text-start'>
            <h1 className='text-secondary-500 text-3xl  font-bold py-6'>{filteredBlog?.name}</h1>

            <div className="text-md text-gray-500 leading-7 py-6" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(filteredBlog?.des)) }} />

          </div>

          <div className=' lg:w-[50%] lg:mt-24'>
            <img className='rounded-lg' alt={filteredBlog?.alt_image}
              src={`${filteredBlog?.image_path}/${filteredBlog?.main_image}`} />
          </div>

        </div>
      }

    </section>
  )
}

export default BlogDetails