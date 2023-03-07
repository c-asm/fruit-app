import config from '@/config';
import { isURL } from '@/utils/validators';

// Find an image for fruit if any, else return null
export default async function getFruitImage(fruit_name) {
	let api_url = `${config.baseApiUrl}/api/icons/emoji/find?name=${fruit_name.toLowerCase()}`;
	let imgData = await fetch(api_url, {next: { revalidate: false }});
	let imgUrl  = await imgData.text();
	if (!imgData.ok || !isURL(imgUrl)) {
		// If response is empty or is not a URL, return null
		return null;
	}
	return imgUrl;
}