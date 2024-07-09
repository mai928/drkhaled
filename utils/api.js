export const fetchData = async (variable, lang) => {
	try {
		const myHeaders = new Headers();
		myHeaders.append("lang", lang);

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		const response = await fetch(
			`https://khcan.elnomrosyivf.com/api/${variable}`,
			{
				method: "GET",
				headers: myHeaders,
				next: {
					revalidate: 10,
				},
			},
		);

		let data = await response?.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch data:", error);
		throw error;
	}
};
