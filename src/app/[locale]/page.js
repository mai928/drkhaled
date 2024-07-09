import Slider from "@/components/slider/Slider";
import MainComponent from "../../components/main/MainComponent";
import Video from "@/components/video/Video";
import Accordion from "@/components/accordion/Accordion";
import AboutUs from "@/components/aboutUs/AboutUs";
import SecondaryComponent from "@/components/secondaryComponent/SecondaryComponent"

export default async function Home({ params }) {
	return (
		<main>
			<Slider params={params} />
			<MainComponent params={params} />
			<div className="px-2 lg:px-28 ">
				<AboutUs params={params} />
			</div>

			<Video params={params} />
			<SecondaryComponent/>
			<Accordion />
		</main>
	);
}
