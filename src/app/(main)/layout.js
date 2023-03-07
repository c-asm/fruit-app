// Imports
import { randomString } from '@/utils/funcs';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.css';
import '@/css/globals.css';

// Fonts
const inter = Inter({ subsets: ['latin'] })


// Main
const root_renderid = randomString(5);
export default function RootLayout({ children }) {
	const renderid = randomString(5);

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