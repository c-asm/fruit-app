import getFruitImage from '@/lib/getFruitImage';
import sortFruitNutritions from '@/lib/sortFruitNutritions';

export default async function getFruit(fruit_id) {
	const res = await fetch(`https://fruityvice.com/api/fruit/${fruit_id}`, { next: { revalidate: 0 } });
	if (!res.ok) throw new Error('Failed to fetch fruits list');
	var fruit = await res.json();

	let image_url = await getFruitImage(fruit.name);
	if (!image_url) throw new Error('Failed to load fruit image'); 
	fruit.image = image_url;
	
	fruit = sortFruitNutritions(fruit);

	return fruit;
}