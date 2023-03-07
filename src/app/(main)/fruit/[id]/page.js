import { notFound } from 'next/navigation';
import Image from 'next/image';

import { capString } from '@/utils/funcs';
import getFruit from '@/lib/getFruit';

import style from '@/css/fruit.module.css'


export default async function fruitPage({ params }) {
	/// Data fetching
	var fruit;
	try {
		const fruitData = getFruit(params?.id);
		fruit = await fruitData;
	} catch (err) {
		// If fetch failed (fruit id not found), send 404
		console.log(err);
		notFound();
	}
	// If fruit is still not present, send 404
	if (!fruit) notFound();


	return (<>
		<div style={{maxWidth: 900}} className='container'>
			<div id={style.title} className='row'>
				<div>
					<div className={style.titleblock} >
						<Image width={26} height={26} className={style.emoji} src={fruit.image} alt={fruit.name} />
						<span>{fruit.name}</span>
					</div>
					<span>{fruit.genus} | {fruit.family}</span>
				</div>
			</div>


			<div id={style.content} className='row'>
				<div id={style.stats} className='col-3'>
					<span className={style.contenttitle}>Fruit stats:</span>
					<div className={style.statswrapper}>
						{Object.entries(fruit.nutritions).map((n, ni) => <div key={ni} className={style.statsblock}>
							<span>{capString(n[0])}</span>
							<div><div style={{
								width: Math.max(5, n[1]/Object.values(fruit.nutritions).reduce((a, b) => a + b, 0)*100+0.1)+'%'
							}}></div></div>
						</div>)}
					</div>
				</div>

				<div id={style.info}  className='col'>
					<div id={style.block1}>
						<span className={style.contenttitle}>Fruit photo:</span>
						<Image width={160} height={160} src={fruit.image} alt={fruit.name} />
					</div>
					<vr/>
					<div id={style.block2}>
						<span className={style.contenttitle}>Fruit info:</span>
						<div>
							{['name', 'family', 'genus', 'order'].map(e => 
								<div key={'info'+e} className={style.fruitname}>
									<span>{capString(e)}:</span> <span>{fruit[e]}</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)
}