'use client'
import Link from "next/link";
import { useState } from "react";
const CustomButton = ({ textBtn, className, styleText ,route  ,type}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className=" flex justify-center  lg:block lg:justify-start">
			<Link
				onMouseMove={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				// w-36  md:w-48 lg:w-56 rounded-full
				className={`flex section-btn  text-sm lg:text-lg   font-normal ps-4  py-2   md:ps-11 lg:ps-10 md:py-3 lg:py-4 mt-2  ${className}`}
				href={`${route}`}
				type={type}
			>
				<p className={styleText}>{textBtn}
				</p>

				<div
					className={`rounded-full  ${isHovered ? "btn-icon" : ""
						}  bg-secondary-500 p-1 text-center m-auto`}
				>
					<svg
						className="w-3 h-3 lg:w-5 lg:h-5"
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						fill="white"
						viewBox="0 0 448 512"
					>
						<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
					</svg>
				</div>
			</Link>
		</section>
	);
};

export default CustomButton;
