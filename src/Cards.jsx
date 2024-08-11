import React from 'react'

 
function Card(props){
	return(
		<>
				<div className="card">
					<img src={props.imgsrc} alt="myPic" className="card__img" />
					<div className="card__info">
					<p><span className="card__category">{props.title}</span></p>
					<h3 className="card__name">{props.name}</h3>
					<a href={props.links}>
						<button> Watch Now!</button>
					</a>
					</div>
				</div>
		</>
	)
}

export default Card;