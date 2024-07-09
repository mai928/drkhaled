'use client'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchData } from "utils/api";

const Form = () => {
	const { t  ,i18n} = useTranslation()

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [responseMessage, setResponseMessage] = useState('');

	const ResponseMessage = ({ message }) => {
		if (!message) return null;

		return (
			<div className="mt-6 text-center">
				<p className={`text-lg ${message === 'Message sent successfully!' ? 'text-green-900' : 'text-red-500'}`}>
					{message}
				</p>
			</div>
		);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const myHeaders = new Headers();
		myHeaders.append("lang", i18n.language);


		try {
			const response = await fetch('https://khcan.elnomrosyivf.com/api/messages/store', {
				method: 'POST',
				headers:myHeaders,
				body: JSON.stringify(formData)
			});

			const result = await response.json();
			console.log(result.data)

			if (response.status && result.data) {
				setResponseMessage('Message sent successfully!');
				setFormData({
					name: '',
					email: '',
					phone: '',
				});
			} else {
				setResponseMessage('Failed to send message. Please try again.');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setResponseMessage('An error occurred. Please try again.');
		}

		setTimeout(() => {
			setResponseMessage('')
		}, 3000)
	};


	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchDataFromAPI = async () => {
			try {
				const result = await fetchData('contact/get');
				setData(result?.data[0]);
			} catch (error) {
				console.error("Error fetching data:", error);
				// setError(error);
			}
		};

		fetchDataFromAPI();
	}, []);


	return (
		<section className="  w-full  z-20 ">
			<div className="block lg:flex w-full bg-secondary-500 gap-14  ">
				<div className="w-full lg:w-[65%]">
					<form onSubmit={handleSubmit} className=" ms-0 lg:ms-28 py-16">
						<div className="text-center lg:text-start">
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className="bg-transparent border-[1px]   border-gray-500 rounded-md py-4   lg:mt-0 me-0 lg:me-4  w-[85%] lg:w-[32%] px-5 lg:px-8   placeholder:text-gray-50"
								placeholder={t("your Name")}
							/>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className="bg-transparent border-[1px] mt-5  lg:mt-0 me-0 lg:me-4 border-gray-500 rounded-md w-[85%]  lg:w-[32%] py-4 px-5 lg:px-8  placeholder:text-gray-50"
								placeholder={t("Your Email")}
							/>
							<input
								type='number'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								required
								className="bg-transparent border-[1px] mt-5  lg:mt-0 border-gray-500 rounded-md  w-[85%]   lg:w-[32%] py-4 px-5 lg:px-8  placeholder:text-gray-50"
								placeholder={t("Your Phone")}
							/>
						</div>
						<div className="pt-6 text-center">
							<button
								type="submit"
								className="bg-primary-500 text-center w-52  lg:w-full text-white-300 uppercase text-xl rounded-md py-3 font-semibold  mx-6 lg:mx-0"
							>
								{t("Send")}
							</button>
						</div>
					</form>
					<div>
						<ResponseMessage message={responseMessage} />
					</div>
				</div>

				<div className="w-full lg:w-[35%] ">
					<div className="bg-primary-500 h-full m-auto  lg-m-0 w-[85%] ">
						<div className="flex  justify-between  items-center p-5">
							<div className="bg-white-400 p-2 rounded-full">
								<svg
									className="fill-primary-500"
									xmlns="http://www.w3.org/2000/svg"
									width={30}
									height={30}
									viewBox="0 0 384 512"
								>
									<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
								</svg>
							</div>
							<div className="ms-4">
								<h3 className="text-white-300 text-xl font-bold">{t("Phone Number")}</h3>
								<p className="text-[14px] my-3 text-white-300">
									{
										data?.phone1
									}
								</p>
							</div>
						</div>

						<div className="border-b-[1px] my-5 border-white-300" />

						<div className="flex  justify-between  items-center p-5">
							<div className="bg-white-400 p-2 rounded-full">
								<svg
									className="fill-primary-500"
									xmlns="http://www.w3.org/2000/svg"
									width={30}
									height={30}
									viewBox="0 0 384 512"
								>
									<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
								</svg>
							</div>
							<div className="ms-4">
								<h3 className="text-white-300 text-xl font-bold">{t("Address")}</h3>
								<p className="text-[14px]  text-white-300">
									{data?.address}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Form;
