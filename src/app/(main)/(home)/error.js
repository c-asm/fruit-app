"use client";

export default function Error({ error }) {
	return (<>
		<style jsx>{`
			/* Red text flashing animation */

			@keyframes errorflash {
				0% { color: red; }
				50% { color: white; }
				100% { color: red; }
			}
		`}</style>

		
		<div
			className='w-100 h-100 d-flex justify-content-center align-items-center'
			style={{minHeight: 200, fontWeight: 500, fontSize: 20, color: 'red',  animation: '1.5s errorflash infinite ease-in-out'}}>
			Error loading fruits !
		</div>
	</>);
}