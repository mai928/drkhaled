import initTranslations from '@/app/i18n';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";





export async function generateMetadata({ params }) {

    function removeEmptyPTags(str) {
        return str?.replace(/<\/?(em|p|br|ul|li|a|span|strong|u)[^>]*>|&nbsp;/g, '');
      }

    const slug = params?.slug

    const slugDecoding = decodeURIComponent(slug)

    const myHeaders = new Headers();
    myHeaders.append("lang", params.locale);

    const formdata = new FormData();
    formdata.append("slug", slugDecoding);



    const res = await fetch(`https://khcan.elnomrosyivf.com/api/services/service_details/get`, {
        method: "POST",
        headers: myHeaders,
        cache:'no-store',
        body: formdata,
        redirect: "follow"
    });
    const data = await res.json()
    const filteredBlog = data?.data

    return {
        title:removeEmptyPTags(filteredBlog?.meta_title) ,
        description: removeEmptyPTags(filteredBlog?.meta_des),
        other:{
            title:removeEmptyPTags(filteredBlog?.meta_title) ,

        }

    }

}


const i18nNamespaces = ["home"];


const ServiceDetails = async ({ params }) => {

    let locale = params.locale

    const { t } = await initTranslations(locale, i18nNamespaces);


    const slug = params?.slug

    const slugDecoding = decodeURIComponent(slug)


    // console.log('slugDecoding::',slugDecoding)
    const myHeaders = new Headers();
    myHeaders.append("lang",locale);

    const formdata = new FormData();
    formdata.append("slug", slugDecoding);




    const res = await fetch(`https://khcan.elnomrosyivf.com/api/services/service_details/get`,{
        method: "POST",
        headers: myHeaders,
        cache:'no-cache',
        body: formdata,
        redirect: "follow"
    } );
    const data = await res.json()

    const sliderData = !data || (!data.status) ? (<div>loading....</div>) : data

    const filteredBlog = sliderData?.data


    if (!filteredBlog) {
        <div>loading....</div>
    }

    return (

        <section className='px-3 lg:px-32 py-10'>
            {
                <div className=' block lg:flex gap-10 '>
                    <div className=' w-full lg:w-[50%]  text-center lg:text-start'>
                        <h1 className='text-secondary-500 text-3xl  font-bold py-6'>{filteredBlog?.name}</h1>

                        <div className="text-md text-gray-500 leading-7 py-6" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(filteredBlog?.des)) }} />

                    </div>

                    <div className='w-full h-[80%] lg:w-[50%]  lg:mt-24'>


                        <img className='w-full h-[70%] rounded-md' alt={`${filteredBlog?.alt_image}`} src={`https://khcan.elnomrosyivf.com/public/uploads/images/service/${filteredBlog?.image}`} />


                    </div>

                </div>
            }

        </section>

    )
}

export default ServiceDetails