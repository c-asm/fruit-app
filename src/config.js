const PORT = process.env.PORT || 3000;
console.debug('Config: Port being used:', PORT);

const config = {
	baseApiUrl: `http://localhost:${PORT}`, // Dont do this in production!
}

export default config;