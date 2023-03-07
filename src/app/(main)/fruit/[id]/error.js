'use client';

import { notFound } from 'next/navigation';

// By default display all errors as 404 (it okay here, but not okay on static routes like home/about page)
export default function Error() { notFound();}