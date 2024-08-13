import React from 'react'

 
function Card(props){
	return(
		<>
				<div className="card sm:w-[30vw] sm:min-h-[45vh] bg-zinc-700 text-white rounded-lg sm:px-[2vw] sm:py-3 w-[57vw] h-[49vh] px-1 py-2">
					<img src={props.imgsrc} alt="myPic" className="card__img sm:w-[100%] sm:h-[20%] object-cover" />
					<div className="card__info sm:flex sm:flex-col sm:items-center sm:justify-around flex flex-col gap-[2vw] justify-around items-center">
					<p><span className="card__category sm:text-sm sm:font-medium text-sm font-semibold">{props.title}</span></p>
					<h3 className="card__name sm:text-3xl sm:font-semibold sm:mb-1 text-2xl font-bold">{props.name}</h3>
					<a className="bg-blue-500 sm:hover:bg-blue-400 sm:px-3 sm:py-1 rounded-lg px-3 py-[1vw] " href={props.links}>
						<button> Watch Now!</button>
					</a>
					</div>
				</div>
		</>
	)
}

export default Card;