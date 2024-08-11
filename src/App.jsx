import React from 'react'
import Card from './Cards'
import Sdata from './Sdata'
import './index.css'

function ncards(val){
	return(
	<Card 
		title = {val.title} 
		imgsrc = {val.imgsrc} 
		name = {val.name} 
		links = {val.links}
	/>
	)
}

function App(){
	return(
	<>
	<div className="nav">
		<h1>List of Top 5 Netflix Series</h1>
	</div>
	{Sdata.map(ncards)}
	</>
	)
}

export default App;