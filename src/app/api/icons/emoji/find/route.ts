import { NextRequest } from "next/server";
// Extended request typing
import emoji_data from "emoji-datasource/emoji.json";
/* It's okay to use such big file here (1Mb), because most of
 required responses are rendered and cached during build process,
 so it wont be acutally searching the file every time API request is made.

 In a real world application, you would either be directly acessing DB,
 which is of course faster than searching JSON file, or sending request
 to a backend server. NextJS allows us to make both backend and frontend servers
 in one app; however, in bigger projects, it's recommended to separate them.
*/

// This tells Next.JS to cache response (as long as it's going to be same every time in our case)
export const revalidate = false;

// HTTP GET request handler
export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const name = searchParams.get('name');
	if (!name) {
		// If query params are not provided, return status 400
		return new Response('No name specified', { status: 400 });
	}

	let found = emoji_data.find(emoji => (emoji?.category==="Food & Drink" && emoji.name.split(' ').map(x => x.toLowerCase()).includes(name.toLowerCase())));
	if (!found) {
		// If required fruit emoji could not be found, return status 404
		return new Response('Invalid name', { status: 404 });
	}

	// Finally, if emoji is found, return link to png.
	// See README for details on the emoji dataset i'm using here.
	return new Response("https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-160/" + found.image);
}