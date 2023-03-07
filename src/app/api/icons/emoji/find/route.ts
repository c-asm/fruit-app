import { NextRequest } from "next/server";
import emoji_data from "emoji-datasource/emoji.json";

export const revalidate = false;

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const name = searchParams.get('name');
	if (!name) {
		return new Response('No name specified', { status: 400 });
	}

	let found = emoji_data.find(emoji => (emoji?.category==="Food & Drink" && emoji.name.split(' ').map(x => x.toLowerCase()).includes(name.toLowerCase())));
	if (!found) {
		return new Response('Invalid name', { status: 404 });
	}

	return new Response("https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-160/" + found.image);
}