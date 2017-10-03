import React from 'react'
import Template from './template.jsx'

const Role = React.createClass({
	getInitialState:function(){
		this.isSelected = this.props.isSelected
		return {
			reRender:false
		}
	},
	toggle:function(){
		if(this.props.readonly){
			return;
		}
		this.isSelected = !this.isSelected
		this.props.select(this.props.role,this.isSelected)
	},
	render:Template
})

export default Role