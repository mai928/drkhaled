"use client";
import CustomButton from "../button/CustomButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import circle from '../../../public/assets/section-icon.png'
import { fetchData } from "utils/api";
import DOMPurify from "isomorphic-dompurify";


const Video = () => {
	const { t ,i18n } = useTranslation()
	const [show, SetShow] = useState(false);
	const [error, setError] = useState(null)



	const [videoArr, setVideos] = useState(null);

	useEffect(() => {
		const fetchDataFromAPI = async () => {
			try {
				const result = await fetchData('mdeia/media-group/get',i18n.language);
				setVideos(result?.data[0]);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error);
			}
		};

		fetchDataFromAPI();
	}, []);

	// console.log('videos:::',videoArr)

	return (
		<section className="relative">
			<div className="bg-video">
				<div className="bg-secondary-500 bg-opacity-90 absolute  inset-0 z-[0]">
					<div className="pt-10 text-center  lg:text-start lg:pt-32">
						<div className=" block lg:flex px-2 lg:px-28 z-30">
							<div className="w-full lg:w-1/2">


								<div className="  flex  justify-center lg:justify-start  items-center gap-2 mb-3 ">
									<Image alt="circle" src={circle} />

									<p className="text-primary-500 text-[17px]  font-[500] uppercase">
										{t("OUR VIDEO MORE")}
									</p>
									<Image alt="circle" src={circle} />
								</div>

								<h3 className="mt-3 text-lg lg:text-4xl text-white-400 font-bold">
									{t("Immediately Video Medical")}
									<br /> {t("Every Health Care")}
								</h3>
						

								<div className="text-white-400 leading-8 mt-6 font-normal lg:font-semibold text-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(videoArr?.des)) }} />
								<CustomButton route={'/video'} className={'w-36  md:w-48 lg:w-56 rounded-full'} textBtn={t('More Videos')} />
							</div>

							<div className="w-full lg:w-1/2">
								<div className=" flex justify-center pt-10 lg:pt-28">
									<div className="relative ">
										<div
											onClick={() => SetShow(true)}
											className="p-4 bg-white-400 rounded-full btn-video  cursor-pointer "
										>
											<svg
												className="fill-primary-500"
												xmlns="http://www.w3.org/2000/svg"
												width={20}
												height={20}
												viewBox="0 0 512 512"
											>
												<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
											</svg>
										</div>
									</div>
								</div>
							</div>

							<div>
								{show && (
									<div className="absolute inset-0 bg-black bg-opacity-85 w-full h-full overflow-hidden z-[9999]">
										<div onClick={() => SetShow(false)} className="absolute top-10 right-20 text-2xl">
											<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} className="fill-primary-500 cursor-pointer" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
										</div>
										<iframe
											className="absolute  top-[30%] lg:top-[20%] right-[2%] lg:right-[30%]  lg:w-[650px]  lg:h-[350px]"
											// https://www.youtube.com/embed/dXlqTljulP4
											// videoArr?.videos[0]?.link
											src={videoArr?.videos[0]?.link}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Video;
