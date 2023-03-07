import emoji_data from "emoji-datasource/emoji.json";
/* It's okay to use such big file here (1Mb), because most of
 required data is rendered and cached during build process,
 so it wont be acutally searching the file every function is called.

 In a real world application, you would either be directly acessing DB,
 which is of course faster than searching JSON file, or sending request
 to a backend server. NextJS allows us to make both backend and frontend servers
 in one app; however, especially in bigger projects, it's recommended to separate them.
*/

export default function findFruitImage(name) {
	let found = emoji_data.find(emoji => (emoji?.category==="Food & Drink" && emoji.name.split(' ').map(x => x.toLowerCase()).includes(name.toLowerCase())));
	console.log()
	if (!found) {
		// If required fruit emoji could not be found, return null
		return null;
	}

	// If emoji is found, return link to png.
	// See README for details on the emoji dataset i'm using here.
	return `https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-160/${found.image}`;
}