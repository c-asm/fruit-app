import Link from 'next/link';
import Image from 'next/image';

import style from '@/css/home.module.css';

import getAllFruits from '@/lib/getAllFruits';


export default async function Home() {
	// Load fruits list
	const fruitsData = getAllFruits();
	var fruits = await fruitsData;

	return (<>
		<div className='container'>
			<div className={style.fruitslist}>
				{fruits.map((e, id) => <>
					<div key={'fruit'+id} className={style.fruitcard}>
						{/* Fruit title */}
						<div className={style.fruittitle}>
							<Image width={26} height={26} className={style.emoji} src={e.image} alt={e.name} />
							<Link href={`/fruit/${e.id}`}>{e.name}</Link>
						</div>

						{/* Fruit stats (progress bars) */}
						<div className={style.fruitstats}>
							{Object.entries(e.nutritions).map((n, ni) => <>
								<div key={'stats'+id+ni} className={style.fruitstatsblock}>
									<span>{n[0]}</span>
									<div><div><div style={{
										width: n[1]/Object.values(e.nutritions).reduce((a, b) => a + b, 0)*100+0.1+'%'
									}}></div></div></div>
								</div>
							</>)}
						</div>
					</div>
				</>)}
			</div>
		</div>
	</>
  )
}
