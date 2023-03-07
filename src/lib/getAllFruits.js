import getFruitImage from '@/lib/getFruitImage';
import sortFruitNutritions from '@/lib/sortFruitNutritions';

export default async function getAllFruits() {
	const res = await fetch('https://fruityvice.com/api/fruit/all', { next: { revalidate: 'force-cache' } });
	if (!res.ok) throw new Error('Failed to fetch fruits list');
	let fruits = await res.json();
	
	fruits = await Promise.all(fruits.map(async (f) => {
		let image_url = await getFruitImage(f.name);
		if (!image_url) { return null; }
		f.image = image_url; return f;
	}));

	fruits = fruits.filter(e => e!==null);
	
	fruits = fruits.map(f => sortFruitNutritions(f));

	return fruits;
}