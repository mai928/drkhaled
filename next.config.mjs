/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "khcan.elnomrosyivf.com",
				port: '3000',
				pathname: "/api/uploads/images/**",
			},
		],
	},
  
};

export default nextConfig;
