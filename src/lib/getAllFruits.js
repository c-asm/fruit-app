import getFruitImage from '@/lib/getFruitImage';
import sortFruitNutritions from '@/lib/sortFruitNutritions';

// Get list of all available fruits
export default async function getAllFruits() {
	// Fetch fruits data
	const res = await fetch('https://fruityvice.com/api/fruit/all', { next: { revalidate: 'force-cache' } });
	if (!res.ok) throw new Error('Failed to fetch fruits list');
	let fruits = await res.json();
	
	// Only leave fruits that have an image available
	fruits = await Promise.all(fruits.map(async (f) => {
		let image_url = await getFruitImage(f.name);
		if (!image_url) { return null; }
		f.image = image_url; return f;
	}));

	// Remove nulls from list
	fruits = fruits.filter(e => e!==null);

	// Sort fruit stats
	fruits = fruits.map(f => sortFruitNutritions(f));

	return fruits;
}