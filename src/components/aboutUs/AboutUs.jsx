import Image from "next/image";
import icon3 from "../../../public/assets/icon-3.png";
import icon4 from "../../../public/assets/icon-4.png";
import DrKhaled from "../../../public/assets/3.jpeg";
import circle from "../../../public/assets/section-icon.png";
import CustomButton from "../button/CustomButton";
import initTranslations from "@/app/i18n";
import { fetchData } from "utils/api";
import DOMPurify from "isomorphic-dompurify";




const i18nNamespaces = ["home"];

const AboutUs = async ({ params }) => {

	const { locale } = params;
	const { t } = await initTranslations(locale, i18nNamespaces);

	const result = await fetchData('about-us/get', locale);
	const data = result.data[0]


	const truncateText = (text, wordCount) => {
		return text.split(' ').slice(0, wordCount).join(' ') + '...';
	};



	// console.log('data:::',data)





	return (
		<section className="pb-10  mt-12  lg:mt-0">
			<div className="block lg:flex  lg:gap-7">
				<div className="w-full lg:w-1/2 text-center lg:text-start">
					<div className="  flex  justify-center lg:justify-start  items-center gap-2 mb-3 ">
						<Image alt="circle" src={circle} />

						<p className="text-primary-500 text-base lg:text-2xl font-semibold ">
							{t("WHAT ABOUT US")}
						</p>
						<Image alt="circle" src={circle} />
					</div>

					<h3 className="font-bold text-xl lg:text-4xl text-secondary-500 mt-4">
						{t("About Medical Immediately")}
						<br /> {t("Advanced Manual.")}
					</h3>

					<div className="text-sm text-gray-500 font-[500] leading-7 mt-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(data.des, 20))) }} />
					<div className="flex justify-center lg:justify-between mt-5">

					</div>
					<CustomButton route={'/about-us'} className={'w-36  md:w-48 lg:w-56 rounded-full'} textBtn={t('Read More')} />
				</div>

				<div className="w-full lg:w-1/2 text-center lg:text-start  lg:mt-0 mt-4">
				<Image alt="img" className="w-full h-full rounded-md" src={DrKhaled}/>
				</div>




			</div>
		</section>
	);
};

export default AboutUs;
