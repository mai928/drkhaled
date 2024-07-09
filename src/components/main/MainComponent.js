"use client";
import React from "react";
import AboutUs from "@/components/aboutUs/AboutUs";
import Form from "@/components/form/Form";
import Video from "@/components/video/Video";
import Accordion from "@/components/accordion/Accordion";
import CallAction from "@/components/callToAction/CallAction";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const MainComponent = ({ params }) => {
	return (
		<section>
			<div className="">
				<Form />
			</div>
			<div className="px-2 lg:px-28 ">
			<ServicesComponent/>

			</div>
			<CallAction />
		</section>
	);
};

export default MainComponent;
