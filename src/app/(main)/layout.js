// Imports
import { randomString } from '@/utils/funcs';
import Header from '@/components/header';

// Fonts, styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/css/globals.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })


// Main
const root_renderid = randomString(5);

export default function RootLayout({ children }) {

	const renderid = randomString(5);
	///  Meaning of data-renderid (see below <html> and <body> tags) is to show how SSR works.
	// root_renderid is defined on server, and is not changed
	// renderid is defined with each function call - so it's different for every request

	return (
		<html data-renderid={root_renderid+'-'+renderid} lang="en">
			<body style={inter.style} data-renderid={root_renderid+'-'+renderid}>
				<Header />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
};