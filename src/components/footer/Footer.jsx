import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { fetchData } from "utils/api";
import EmailForm from '../emailForm/EmailForm'
import initTranslations from "@/app/i18n";



const i18nNamespaces = ["home"];

const Footer = async ({params}) => {
     
	const {locale}=params
	const {t}= await initTranslations(locale ,i18nNamespaces)


	const responseService = await fetchData('services/get',locale);
	  const data = responseService?.data




	const responseSettings = await fetchData('settings/get',locale);
	   const setting =   responseSettings?.data[0]


	const responseContact = await fetchData('contact/get',locale);
	   const contact=  responseContact?.data[0]



	return (
		<footer className="">
			<div className="bg-footer">
				<div className="bg-secondary-500 bg-opacity-90 absolute inset-0 z-[0]">
					<div className="p-10 lg:p-24 w-full">
						<div className="block text-center lg:text-start lg:flex justify-between items-center">
							<div className="w-full lg:w-5/12">
								<Link href={'/'}>	<img
									alt="alt"
									className="filter brightness-0 invert-[1]"
									width={180}
									height={'auto'}
									src={`${setting?.link_image}/${setting?.logo}`}
								/>
								</Link>

								<div>
									<div className="flex items-start gap-0 lg:gap-4 mt-5">
										<div className=" p-2 lg:p-3 bg-white-400 rounded-full ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={20}
												height={20}
												className="fill-primary-500"
												viewBox="0 0 384 512"
											>
												<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
											</svg>
										</div>
										<p className="text-white-400  text-sm  lg:text-base">
											{contact?.address}
										</p>
									</div>
									<div className="flex gap-4 items-center  mt-5">
										<div className=" p-2 lg:p-3 bg-white-400 rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={20}
												height={20}
												className="fill-primary-500"
												viewBox="0 0 512 512"
											>
												<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
											</svg>
										</div>

										<p className="text-white-400 text-sm  lg:text-base">
											{contact?.phone1}

										</p>
									</div>

									<EmailForm />
								</div>
							</div>

							<div className=" w-full lg:w-3/12  mt-10 lg:mt-0">
								<h3 className="mb-3 lg:mb-5 text-white-500 font-semibold text-lg">
									{t("UseFul Links")}
								</h3>
								<ul className="list-unstyled">
									{navLinks.map((item) => (
										<li key={item.title} className="mt-2 flex gap-3 items-center ms-10  lg:ms-0">
											<div className="p-1 bg-white-400 rounded-full">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={13}
													height={13}
													className="fill-primary-500"
													viewBox="0 0 320 512"
												>
													<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
												</svg>
											</div>
											<Link
												className={`text-gray-300  block pb-2 text-md hover:text-primary-500 `}
												href={item.path}
											>
												{t(item.title)}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="w-full lg:w-3/12  mt-8 lg:mt-0">
								<h3 className=" mb-3 lg:mb-5 text-white-500 font-semibold text-lg">
									{t("Services")}
								</h3>
								<ul className="list-unstyled">
									{data?.map((item) => (
										<li key={item.title} className="mt-2 flex gap-3 items-center ms-10  lg:ms-0">
											<div className="p-1 bg-white-400 rounded-full">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={13}
													height={13}
													className="fill-primary-500"
													viewBox="0 0 320 512"
												>
													<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
												</svg>
											</div>
											<Link
												href={`/services/${encodeURIComponent(item.slug)}`}
												className={`text-gray-300  block pb-2 text-md hover:text-primary-500 `}
											>
												{t(item.name)}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
