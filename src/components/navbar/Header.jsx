"use client";
import React, { useEffect, useState } from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import ThirdNav from "./ThirdNav";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import { useTranslation } from "react-i18next";
import { fetchData } from "utils/api";

const Header = () => {



	const { t, i18n } = useTranslation()

	const [Toggle, SetToggle] = useState(false);
	const [showMenuIcon, setShowMenuIcon] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [setting, setSetting] = useState();



	const handleFixed = () => {

		const handleScroll = () => {
			if (window.scrollY > 150) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}
	useEffect(() => {

		handleFixed()
		const handleResize = () => {
			if (window.innerWidth <= 1024) {
				setShowMenuIcon(true);
				SetToggle(false);
			} else {
				setShowMenuIcon(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};

	}, []);


	useEffect(() => {
		const fetchSetting = async () => {

			const result = await fetchData('settings/get', i18n.language);
			setSetting(result?.data[0]);
		};
		fetchSetting()
	}, []);



	return (
		<section>
			{showMenuIcon ? (
				<div className="px-3 py-2">
					<div className="flex  justify-between">
						<svg
							className="cursor-pointer"
							onClick={() => SetToggle(!Toggle)}
							xmlns="http://www.w3.org/2000/svg"
							width={30}
							height={30}
							viewBox="0 0 448 512"
						>
							<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
						</svg>



						<Link href={'/'}><img alt="logo" width={110} height={'auto'} src={`${setting?.link_image}/${setting?.logo}`} /></Link>
					</div>
				</div>
			) : (
				<>
					<FirstNav isFixed={isFixed} />
					<SecondNav isFixed={isFixed} />
					<div className="bg-white-300">
						<ThirdNav isFixed={isFixed} />
					</div>
				</>
			)}

			{/* slideBar */}
			
			<div>
				<div className={`sidebar ${Toggle ? "open" : "close"}`}>
					<div className="p-10">
						<div className="flex justify-between items-end mb-10">
							<Link href={'/'}><img alt="logo" width={110} height={'auto'} src={`${setting?.link_image}/${setting?.logo}`} /></Link>
							<h1
								className="cursor-pointer p-1 px-3 rounded-full bg-primary-500 font-semibold text-white-300"
								onClick={() => SetToggle(false)}
							>
								x
							</h1>
						</div>

						<ul>
							{navLinks.map((item) => (
								<div key={item.title} className="flex items-center mt-7">
									<div className="p-1 bg-white-400 rounded-full me-4">
										<svg

											xmlns="http://www.w3.org/2000/svg"
											width={13}
											height={13}
											className="fill-primary-500  "
											viewBox="0 0 320 512"
										>
											<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
										</svg>
									</div>
									<li>

										<Link
										
											className="text-secondary-500 text-xl font-semibold   hover:text-primary-500"
											href={item.path}
											onClick={()=>SetToggle(false)}
										>
											{t(item.title)}
										</Link>
									</li>
								</div>

							))}
						</ul>

						<div className="flex items-center mt-7">
							<div className="p-1 bg-white-400 rounded-full me-4">
								<svg

									xmlns="http://www.w3.org/2000/svg"
									width={13}
									height={13}
									className="fill-primary-500  "
									viewBox="0 0 320 512"
								>
									<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
								</svg>


							</div>
							<div className="border-[1px] border-gray-400 rounded-lg p-2">
								<LanguageChanger />

							</div>


						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
