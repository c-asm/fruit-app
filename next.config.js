/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
	remotePatterns: [
		{
			hostname: 'raw.githubusercontent.com',
		}
	]
  }
}

module.exports = nextConfig;