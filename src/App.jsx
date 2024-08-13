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
	<div className="sm:bg-slate-700 sm:bg-zinc-900 sm:w-full h-[10vh] sm:flex sm:items-center sm:justify-center sm:text-3xl sm:text-white text-2xl font-bold flex items-center justify-center bg-zinc-900 text-white text-center">
		<h1>List of Top Netflix Series</h1>
	</div>
	<div className="cards sm:px-7 sm:pt-5 sm:w-full sm:min-h-screen sm:flex sm:flex-wrap  sm:bg-zinc-800 sm:items-center sm:gap-[2vw] w-full min-h-screen bg-zinc-800 flex flex-wrap px-2 py-4 gap-[4vw] justify-center">
	{Sdata.map(ncards)}
	</div>
	</>
	)
}

export default App;