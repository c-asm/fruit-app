// Sort fruit nutritions by amount, so that stats look more organized.
export default function sortFruitNutritions(fruit) {
	let n = fruit.nutritions;
	let s = Object.entries(n).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
	fruit.nutritions = s; return fruit;
};