import FetchToSlider from './FetchToSlider'
import { fetchData } from '../../../utils/api'
import React from 'react';





const Slider = async ({ params }) => {

	const { locale } = params;

	const response = await fetchData('sliders/get', locale)
	const data = response.data
	if(!data){
		<div>loading....</div>
	}
	return (
		<FetchToSlider data={data} />
	);
};



export default Slider;

