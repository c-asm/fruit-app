import getFruitImage from '@/lib/getFruitImage';
import sortFruitNutritions from '@/lib/sortFruitNutritions';

// Fetch a single fruit by given id, error if not found
export default async function getFruit(fruit_id) {
	// Fetch fruit data
	const res = await fetch(`https://fruityvice.com/api/fruit/${fruit_id}`, { next: { revalidate: 0 } });
	if (!res.ok) throw new Error('Failed to fetch fruit data');
	var fruit = await res.json();

	// Find an image for fruit
	let image_url = await getFruitImage(fruit.name);
	if (!image_url) throw new Error('Failed to load fruit image'); 
	fruit.image = image_url;
	
	// Sort fruit stats
	fruit = sortFruitNutritions(fruit);

	return fruit;
}