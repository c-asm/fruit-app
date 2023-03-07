import config from '@/config';
import { isURL } from '@/utils/validators';

export default async function getFruitImage(fruit_name) {
	let api_url = config.baseApiUrl + `/api/icons/emoji/find?name=${fruit_name.toLowerCase()}`;
	let imgData = await fetch(api_url, {next: { revalidate: false }});
	let imgUrl = await imgData.text();
	if (!imgData.ok || !isURL(imgUrl)) {
		return null;
	}
	return imgUrl;
}