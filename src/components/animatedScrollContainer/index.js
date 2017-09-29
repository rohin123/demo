import React from 'react'
import Template from './template.jsx'
import '../../../style/animatedScrollContainer.scss'

const AnimatedScrollContainer = React.createClass({
	// nextIndex:function(index){
	// 	this.screenRef.style.transform = "translateX(" + (index*300) + ")"
	// },
	// privIndex:function(index){
	// 	this.screenRef.style.transform = "translateX(" + (index*300) + ")"
	// },
	setIndex:function(index){
		//console.log('setIndex',index)
		this.screenRef.style.transform = "translateX(" + (-index*300) + "px)"
	},
	render:Template
})

export default AnimatedScrollContainer