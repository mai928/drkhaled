'use client'
import LanguageChanger from '@/components/LanguageChanger/LanguageChanger'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchData } from 'utils/api';
const FirstNav = ({ isFixed }) => {
	const { t ,i18n } = useTranslation()


	const [emailLink, setData] = useState();
	const [workingHours, setSetting] = useState();


		useEffect(() => {
			const fetchDataFromAPI = async () => {
				try {
					const result = await fetchData('social-media/get' ,i18n.language);
					setData(result?.data[0]?.email);
				} catch (error) {
					console.error("Error fetching data:", error);
					setError(error);
				}
			};
	
			fetchDataFromAPI();
		}, []);


		useEffect(() => {
			const fetchSetting = async () => {
	
				const setting = await fetchData('settings/get',i18n.language);
				setSetting(setting.data[0]?.working_hours);
	
	
			};	
					fetchSetting()
	
		}, []);


	return (
		<section className={`bg-white-400 w-full py-2 px-14 ${isFixed && 'hidden'}`}>
			<div className="flex justify-between">
				<div className="flex gap-14">
					<div className="flex  items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							className="fill-primary-500"
							viewBox="0 0 512 512"
						>
							<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
						</svg>
						<p className="text-gray-600 text-sm">{emailLink?.link}</p>
					</div>
					<div className="flex  items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							className="fill-primary-500"
							viewBox="0 0 512 512"
						>
							<path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
						</svg>
						<p className="text-gray-600 text-sm">{t(workingHours)}</p>
					</div>
				</div>
				<div>
					<LanguageChanger />
				</div>
			</div>
		</section>
	);
};

export default FirstNav;
