export const randomString = (length: number = 5): string => {
	let r = ''; let a = 'abcdefghijklmnopqrstuvwxyz1234567890';
	for (let i = 0; i < length; i++) {
		r += a[Math.floor(Math.random()*a.length)]
	}
	return r;
}

export const capString = (s: string): string => (
	s[0].toUpperCase() + s.slice(1, )
);