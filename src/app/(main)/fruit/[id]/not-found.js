'use client';

import ErrorPage from 'next/error';

// If fruit is not found, this page will be displayed ( see page.js data fetching comments )
export default function NotFound() { 
	return <ErrorPage title='Fruit not found' statusCode={404} />;
}