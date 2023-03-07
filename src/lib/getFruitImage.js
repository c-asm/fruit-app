import { isURL } from '@/utils/validators';
import findFruitImage from './findFruitImage';

// Find an image for fruit if any, else return null
export default async function getFruitImage(fruit_name) {
	let imgURL  = findFruitImage(fruit_name);
	if (!imgURL || !isURL(imgURL)) {
		// If response is empty or is not a URL, return null
		return null;
	}
	return imgURL;
}