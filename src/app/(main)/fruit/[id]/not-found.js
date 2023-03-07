'use client';

import ErrorPage from 'next/error';

export default function NotFound() { 
	return <ErrorPage title='Fruit not found' statusCode={404} />;
}