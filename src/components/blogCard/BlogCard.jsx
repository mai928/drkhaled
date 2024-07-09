import icon1 from "../../../public/assets/icon-1.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import bgServes from '../../../public/assets/bg-serves.png'
import DOMPurify from "isomorphic-dompurify";


const BlogCard = ({ item, isHover, Id, index, style }) => {

	const truncateText = (text, wordCount) => {
		return text.split(' ').slice(0, wordCount).join(' ') + '...';
	};

	const { t } = useTranslation()

	return (
		<div>
			<div className="relative ">
				<img alt={item?.alt_image} className="rounded-t-lg" src={`${item?.image_path}/${item?.main_image}`} />
				{isHover && Id === item.name ? (

					<div>
						<div className={`absolute  top-0 bottom-0  start-[37%] end-0  w-20  bg-primary-500 z-10 polygon `}>
							<p className="text-white-300 font-bold text-2xl text-center  pt-4">
								{index + 1}
							</p>
						</div>
						<div className=" absolute inset-0 bg-overlay-400  rounded-t-lg bg-opacity-90  "></div>
					</div>
				) : (
					<div className=" absolute inset-0 bg-white-500 rounded-t-lg  "></div>
				)}

				<div className={`absolute top-[45%] ${style}  z-20 p-3`}>
					<div
						className={`absolute top-[6px] start-[14px] z-[-1] p-14 rounded-full  ${isHover && Id === item.name ? "bg-white-300" : "bg-primary-500"
							} `}
					></div>
					<div
						className={` ${isHover && Id === item.name ? "bg-primary-500" : "bg-white-300"
							} p-7 rounded-full `}
					>
						<Image alt="alt"
							className={` ${isHover && Id === item.name
								? "filter brightness-0 invert-[1]"
								: ""
								}`}
							src={icon1}
						/>
					</div>
				</div>
			</div>

			<div className="text-center mt-24 pb-20 px-2">
				<h3 className="text-secondary-500 font-bold text-2xl">{item.name}</h3>

				<div className="mt-4  font-semibold text-[13px] text-gray-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(item.des, 15))) }}
				/>

				<Link
					className="mt-7 font-semibold  flex justify-center items-center"
					href={`/blogs/${encodeURIComponent(item.slug)}`}
				>
					<p
						className={`${isHover && Id === item.name ? "text-primary-500" : ""}`}
					>
						{t("Read More")}
					</p>
					<svg
						className={`${isHover && Id === item.name ? "fill-primary-500" : ""
							} ms-2`}
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 512 512"
					>
						<path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
